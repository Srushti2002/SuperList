import React, { useState, useEffect } from "react";
import styles from "../styles/Slideshow.module.css";


const names = ["Teamwork", "Personal projects", "Everything in between"];
const lists = ["💥  App launch", "🏡  Kitchen Reno", "🏃  Daily habits"];

const sideImages = [
  "https://res.cloudinary.com/superlist/image/upload/c_scale,q_66,w_603/v1702316385/website/cities/64ff85f7377dbac9ecd4349e_dream1-min_tqzwgm.jpg",
  "https://res.cloudinary.com/superlist/image/upload/c_scale,q_66,w_603/v1702316385/website/cities/652417b121909f6dbadf87a5_CleanShot_2023-10-09_at_16.08.58_2x-min_tn93pt.png",
  "https://res.cloudinary.com/superlist/image/upload/c_scale,q_66,w_603/v1702316384/website/cities/64ff85fb19e6b9cdb2331876_dream3-min_zhshux.jpg"
]

const dataAos = ["fade-right","fade-right","fade-right"];
const dataAosLeft = ["fade-left","fade-left","fade-left"];

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
            <ul>
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
          data-aos={dataAosLeft[currImageIndex]}
          src={images[currImageIndex]}
          alt={`Image ${currImageIndex + 1}`}
        />
        
        <img 
        className={styles.SlideShowSideImg}
        data-aos={dataAos[currImageIndex]}
        src={sideImages[currImageIndex]}
        />
      </div>
    </div>
  );
}
