import { useContext } from 'react';
import ReactPlayer from 'react-player';

import { GameContext } from 'GameContext';

import { videoSection } from './videoSection.module.scss';

const VideoView = ({ url }) => {
  return <ReactPlayer url={url} volume={0} autoplay muted loop playing />;
};

const VideoSection = () => {
  const {
    currentData: { streams },
  } = useContext(GameContext);

  console.log({ streams });

  if (!streams) {
    return null;
  }

  return (
    <div className={videoSection}>
      {streams.map((url, idx) => (
        <VideoView
          style={{ transform: 'rotateX(-20deg)' }}
          url={url}
          key={`vid-${idx}`}
        />
      ))}
    </div>
  );
};

export { VideoSection };
