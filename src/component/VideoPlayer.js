// VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/VideoPlayer.module.css';

function VideoPlayer() {
  const videoRef = useRef(null);
  const timelineRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const threshold = 370;

  useEffect(() => {
    const video = videoRef.current;
    const timeline = timelineRef.current;

    const handleVideoTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      timeline.style.width = `${progress}%`;
    };

    const handleScroll = () => {
      const rect = video.getBoundingClientRect();
      const isTop = rect.top <= threshold;

      setIsAtTop(isTop);
    };

    if (video && timeline) {
      video.addEventListener('timeupdate', handleVideoTimeUpdate);
      window.addEventListener('scroll', handleScroll);

      return () => {
        video.removeEventListener('timeupdate', handleVideoTimeUpdate);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.VideoPlayerWrapper}>
      <div className={`${styles.VideoPlay} ${
        isAtTop ? styles.atTop : styles.notAtTop
      }`}>
        <div className={styles.VideoPlayerTitle}>
          <h1 className={styles.VideoPlayerHead}>
            {"You have never worked "}
            <span className={styles.VideoPlayerColoredHead}>This fast</span>
          </h1>
        </div>
        <div className={styles.VideoPlayerMain}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={styles.VideoPlayerActualVideo}
          >
            <source
              src="https://res.cloudinary.com/superlist/video/upload/f_auto/v1701114790/website/2023/video/Website_runthrough_existing_list_niqpzo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.VideoPlayerTimeline}>
          <div className={styles.VideoPlayerTimeLineGrowing} ref={timelineRef}></div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
