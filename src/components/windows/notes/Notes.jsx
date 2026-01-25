import React, { useState, useEffect, useRef } from 'react';
import './notes.scss';
import MacWindow from '../macwindow/MacWindow';

const STORAGE_KEY = 'simple_notes_v1';

function id() {
    return Math.random().toString(36).slice(2, 9);
}

const sample = [
    { id: id(), title: 'Project ideas', content: 'Brainstorm: visual editor, small CLI tool, newsletter ideas.', pinned: true, updatedAt: Date.now() - 86400000 },
    { id: id(), title: 'Shopping', content: 'Milk\nEggs\nCoffee beans', pinned: false, updatedAt: Date.now() - 3600000 },
    { id: id(), title: 'Meeting notes', content: 'Discuss roadmap, allocate owners, set shipping dates.', pinned: false, updatedAt: Date.now() - 600000 },
];

export default function Notes() {
    const [notes, setNotes] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : sample;
        } catch (e) {
            return sample;
        }
    });

    const [query, setQuery] = useState('');
    const [activeId, setActiveId] = useState(notes?.[0]?.id ?? null);
    const [editing, setEditing] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        if (!activeId && notes.length) setActiveId(notes[0].id);
    }, [notes, activeId]);

    function createNote() {
        const newNote = { id: id(), title: 'Untitled', content: '', pinned: false, updatedAt: Date.now() };
        setNotes(prev => [newNote, ...prev]);
        setActiveId(newNote.id);
        setEditing(true);
    }

    function deleteNote(targetId) {
        setNotes(prev => prev.filter(n => n.id !== targetId));
        if (activeId === targetId) {
            setActiveId(notes?.[0]?.id ?? null);
        }
    }

    function togglePin(targetId) {
        setNotes(prev => prev.map(n => n.id === targetId ? { ...n, pinned: !n.pinned } : n));
    }

    function updateActive(partial) {
        setNotes(prev => prev.map(n => n.id === activeId ? { ...n, ...partial, updatedAt: Date.now() } : n));
    }

    function onChangeContent(e) {
        const val = e.target.value;
        updateActive({ content: val });
        setEditing(true);
        // debounce marking saved
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setEditing(false), 700);
    }

    function onChangeTitle(e) {
        updateActive({ title: e.target.value });
    }

    function filtered() {
        const q = query.trim().toLowerCase();
        const list = [...notes].sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return b.updatedAt - a.updatedAt;
        });
        if (!q) return list;
        return list.filter(n => (n.title + ' ' + n.content).toLowerCase().includes(q));
    }

    const active = notes.find(n => n.id === activeId) || null;

    return (
        <MacWindow name="notes" title="Notes" logo="/doc-icons/notes.svg">
            <div className="notes-window">
                <div className="notes-sidebar">
                    <div className="notes-top">
                        <button className="search-btn" onClick={createNote}>New note</button>
                        <input
                            className="search"
                            placeholder="Search notes"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </div>

                    <div className="notes-list">
                        {filtered().map(n => (
                            <div
                                key={n.id}
                                className={`note-item ${n.id === activeId ? 'active' : ''}`}
                                onClick={() => setActiveId(n.id)}
                            >
                                <div className="note-left">
                                    <div className="note-title">{n.title}</div>
                                    <div className="note-snippet">{(n.content || '').split('\n')[0] || '—'}</div>
                                </div>
                                <div className="note-right">
                                    <button className="icon-btn" onClick={(e) => { e.stopPropagation(); togglePin(n.id); }} title="Pin">{n.pinned ? '📌' : '📍'}</button>
                                    <button className="icon-btn" onClick={(e) => { e.stopPropagation(); deleteNote(n.id); }} title="Delete">🗑️</button>
                                </div>
                            </div>
                        ))}

                        {filtered().length === 0 && (
                            <div className="empty">No notes found</div>
                        )}
                    </div>
                </div>

                <div className="notes-editor">
                    {!active && (
                        <div className="empty-preview">Select or create a note to begin</div>
                    )}

                    {active && (
                        <div className="editor-wrap">
                            <input className="note-title-input" value={active.title} onChange={onChangeTitle} />
                            <textarea className="note-body" value={active.content} onChange={onChangeContent} />

                            <div className="editor-footer">
                                <div className="muted">{editing ? 'Editing…' : 'Saved'}</div>
                                <div className="time">{new Date(active.updatedAt).toLocaleString()}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MacWindow>
    );
}