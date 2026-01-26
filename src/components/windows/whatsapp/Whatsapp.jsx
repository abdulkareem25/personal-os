import './whatsapp.scss';
import MacWindow from '../../macwindow/MacWindow';

const chats = ['Aman', 'Rohit', 'Design Team', 'Family', 'College Group'];

const Whatsapp = () => {
  return (
    <MacWindow name="whatsapp" title="WhatsApp" logo="/doc-icons/whatsapp.svg">
      <div className="whatsapp">
        <div className="wa-sidebar">
          {chats.map((c, i) => (
            <div key={i} className="wa-chat">{c}</div>
          ))}
        </div>

        <div className="wa-chat-window">
          <h3>Select a chat</h3>
          <p>Your messages will appear here</p>
        </div>
      </div>
    </MacWindow>
  );
};

export default Whatsapp;
