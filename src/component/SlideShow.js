import React, { useState, useEffect } from "react";
import styles from "../styles/Slideshow.module.css";


const names = ["Teamwork", "Personal projects", "Everything in between"];
const lists = ["💥  App launch", "🏡  Kitchen Reno", "🏃  Daily habits"];

export default function SlideShow({
  images,
  autoplay = true,
  autoplayInterval = 3000,
}) {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(autoplay);
  const [activeItem, setActiveItem] = useState(null);
  
  useEffect(() => {
    let intervalId;
    if (isPlay) {
      intervalId = setInterval(() => {
        setCurrImageIndex((currImageIndex + 1) % images.length);
      }, autoplayInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlay, currImageIndex, images.length, autoplayInterval]);

  function handleItemClick(index) {
    setActiveItem(index);
    setCurrImageIndex(index);
    setIsPlay(false); 
 
  }
  

  function toggle() {
    setIsPlay(!isPlay);
  }

  return (
    <div className={styles.slideShowWrapper} data-aos="fade-up">
      <div className={styles.SlideShowIcon}>
        {names.map((name, index) => (
          <div key={index} onClick={() => handleItemClick(index)}>
            {index === activeItem && (
              <div className={styles.activeItemIndicator}></div>
            )}
            <div
              className={`${styles.SlideShowIconItem} ${
                index === activeItem ? styles.active : ""
              }`}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.slideShow}>
        <div className={styles.slideShowSquare}>
            <div className={styles.slideShowSquareCurve}>
                <span className={styles.slideShowSquareCurveBox}></span>
                <span className={styles.slideShowSquareCurveBox}></span>
            </div>
            <div className={styles.slideShowSquareCurve}>    
                <span className={styles.slideShowSquareCurveBox}></span>
                <span className={styles.slideShowSquareCurveBox}></span>
            </div>
            <h4>Lists</h4>
            <ul onClick={toggle}>
                {/* <li>List</li> */}
            {lists.map((list, index) => (
                <li key={index} onClick={() => handleItemClick(index)}>
                {list}
                </li>
            ))}
            <li>🍔  Recipe</li>
            <li>✏️  Design Work</li>

            </ul>
        </div>
        
        <img
          className={styles.slideShowlImg}
          onClick={toggle}
          src={images[currImageIndex]}
          alt={`Image ${currImageIndex + 1}`}
        />
        
      </div>
    </div>
  );
}
