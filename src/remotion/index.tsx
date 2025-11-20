import { Composition } from 'remotion';
import { CarouselVideo } from './scene';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="carousel"
        component={CarouselVideo}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
