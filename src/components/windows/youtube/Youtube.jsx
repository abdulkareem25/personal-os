import React, { useState } from 'react';
import './youtube.scss';
import MacWindow from '../../MacWindow/MacWindow';

const Youtube = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <MacWindow name="youtube" title="YouTube" logo="/doc-icons/youtube.svg">
      <div className="yt-window">
        {!playing && (
          <div className="yt-center">
            <div className="yt-thumb" onClick={() => setPlaying(true)}>
              <div className="yt-play">▶</div>
            </div>
            <p className="yt-hint">Click to play video</p>
          </div>
        )}

        {playing && (
          <iframe
            className="yt-frame"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    </MacWindow>
  );
};

export default Youtube;