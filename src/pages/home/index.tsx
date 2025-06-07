import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const [headerBgOpacity, setHeaderBgOpacity] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!mainRef.current) return;
    const scrollPosition = mainRef.current.scrollTop;
    setHeaderBgOpacity(scrollPosition > 20 ? 1 : 0);
  };

  useEffect(() => {
    const main = mainRef.current;
    if (main) {
      main.addEventListener('scroll', handleScroll);
      return () => main.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={mainRef} className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Your One-Stop AI Image & Video Creation Platform
        </h1>
        <div className={styles.buttonGroup}>
          <a href="/image-to-video" className={styles.button}>
            Image to Video
          </a>
          <a href="/ai-video-generator" className={styles.button}>
            Text to Video
          </a>
          <a href="/ai-image-generator" className={styles.button}>
            AI Image Generator
          </a>
        </div>
      </div>
      <video
        className={styles.video}
        poster="https://cdn.pollo.ai/prod/public/images/index/banner.jpg"
        src="https://cdn.pollo.ai/prod/public/video/banner-video2.mp4"
        autoPlay
        playsInline
        muted
        loop
        preload="none"
      />
    </div>
  );
};

export default HomePage; 