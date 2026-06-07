import './discord.scss';
import MacWindow from '../../macwindow/MacWindow';

const Discord = () => {
  return (
    <MacWindow name="discord" title="Discord" logo={`${import.meta.env.BASE_URL}doc-icons/discord.svg`}>
      <div className="discord">
        <div className="discord-servers">
          <div className="server">🔥</div>
          <div className="server">🎮</div>
          <div className="server">💻</div>
        </div>

        <div className="discord-chat">
          <h3># general</h3>
          <p>Welcome to the server 👋</p>
        </div>
      </div>
    </MacWindow>
  );
};

export default Discord;
