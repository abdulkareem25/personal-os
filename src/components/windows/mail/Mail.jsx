import React, { useState } from 'react';
import './mail.scss';
import MacWindow from '../../macwindow/MacWindow';

const mails = [
  { id: 1, from: 'Rina Patel', subject: 'Design review', time: '10:30 AM', body: 'Hey, can you check the new design update I pushed this morning?' },
  { id: 2, from: 'Product Team', subject: 'Sprint update', time: 'Yesterday', body: 'Sprint goals have been updated. Please review before standup.' },
  { id: 3, from: 'HR', subject: 'Leave approval', time: 'Jan 20', body: 'Your leave request has been approved.' },
  { id: 4, from: 'GitHub', subject: 'New login detected', time: 'Jan 18', body: 'A new login was detected on your account.' },
  { id: 5, from: 'Figma', subject: 'File shared with you', time: 'Jan 16', body: 'A design file has been shared with you.' },
  { id: 6, from: 'Stripe', subject: 'Payment successful', time: 'Jan 14', body: 'Your payment was processed successfully.' },
];

const Mail = () => {
  const [activeId, setActiveId] = useState(1);
  const activeMail = mails.find(m => m.id === activeId);

  return (
    <MacWindow name="mail" title="Mail" logo="/doc-icons/mail.svg">
      <div className="mail-window">

        <div className="mail-sidebar">
          <div className="mail-header">Inbox</div>

          <div className="mail-list">
            {mails.map((mail) => (
              <div
                key={mail.id}
                className={`mail-item ${activeId === mail.id ? 'active' : ''}`}
                onClick={() => setActiveId(mail.id)}
              >
                <div className="mail-left">
                  <div className="mail-from">{mail.from}</div>
                  <div className="mail-subject">{mail.subject}</div>
                </div>
                <div className="mail-time">{mail.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mail-preview">
          <div className="preview-header">
            <h3>{activeMail.subject}</h3>
            <span>{activeMail.from} • {activeMail.time}</span>
          </div>

          <div className="preview-body">
            {activeMail.body}
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Mail;