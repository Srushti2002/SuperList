import React from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Canvas.module.css';
import {useEffect} from 'react';
import gsap from"gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
const cards = [{
  key:1,
  headDescription:"Tasks, notes",
  headSubDescript:"& everything in between",
  link:"https://rive.app/s/5SECyr-JwEy39V_rTuK5qg/embed",
  backgroundColor:"#e2e0f1",
  ImgtextBackgroundColor:"#6B66DA",
  dataAos:"fade-right"
  },
  {
    key:2,
    headDescription:"Integrated ",
    headSubDescript:"with apps you love",
    link:"https://rive.app/s/2UugwsmmMECoeqqzKEA6_w/embed",
    backgroundColor:"#EAF5F1",
    ImgtextBackgroundColor:"#2A966F",
    dataAos:"fade-left"
  }, 
  {
    key:3,
    headDescription:"Work & personal ",
    headSubDescript:"at the flip of the switch ",
    link:"https://rive.app/s/l4Dn5NXjT0eWvqrEMebEZw/embed",
    backgroundColor:"#fEEDEB",
    ImgtextBackgroundColor:"#F84F39",
    dataAos:"fade-right"
  }, 
  {
    key:4,
    headDescription:"Perfect for ",
    headSubDescript: "teams and solo users",
    link:"https://rive.app/s/_fzPLUmffE_2N34e1ULr4Q/embed",
    backgroundColor:"#E9F4FE",
    ImgtextBackgroundColor:"#2590F2",
    dataAos:"fade-left"
}, 
  {
    key:5,
    headDescription: "Private ",
    headSubDescript: "until you are ready",
    link:"https://rive.app/s/H1tra-eEZEeQWAjKlFCM4g/embed",
    backgroundColor:"#F4E1E7",
    ImgtextBackgroundColor:"#F84F39",
    dataAos:"fade-right"
  }
];

function Canvas() {
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const applyScrollTrigger = () => {
      cards.forEach((card, index) => {
        const targetSelector = `.CanvasEachItem-${card.key}`;
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
          const cardTimeLine = gsap.timeline({
            scrollTrigger: {
              trigger: targetElement,
              pin: true,
              start: 'top top',
              end: '+=200%', // Adjust the value based on your layout
              scrub: 1,
              ease: 'linear',
              markers: true,
              pinSpacing: false, // Disable automatic pin spacing
            },
          });

          cardTimeLine.to(targetElement, {
            height: 100,
            paddingBottom: 0,
            stagger: 0.5,
          });
        } else {
          console.warn(`Element not found: ${targetSelector}`);
        }
      });
    };

    // Call the function after a short delay to ensure elements are mounted
    setTimeout(applyScrollTrigger, 100);
  }, [cards]);
      
  return(
    <div className={styles.CanvasWrapper}>
      <div className={styles.CanvasSection}>

        {cards.map((card, index) => {

            const dynamicClass = `${styles.CanvasEachItem}-${card.key}`;

            return(
              <div key = {card.key} className={styles.CanvasItem}>
                <div key={card.key} className={dynamicClass}>
                  <div className={styles.CanvasEachCard}>
                <div className={styles.CanvasLeftSection}
                style={{backgroundColor: card.backgroundColor}}>
                  <div className={styles.CanvasMainTitle}
                  style={{color: card.ImgtextBackgroundColor}}>
                    {card.headDescription}
                  </div>
                  <div className={styles.CanvasSubTitle}>
                    {card.headSubDescript}
                  </div>
                </div>
                <div className={styles.CanvasRightSection}
                style={{backgroundColor:card.ImgtextBackgroundColor}}>
                  <iframe
                    title={`Canvas ${index + 1}`}
                    src={card.link}
                    // width="500"
                    style={{
                      backgroundColor: card.ImgtextBackgroundColor,
                      width:'90%',                      
                      height:'90%',
                      display: 'block',
                      border: 'none',  // Remove the border if not needed
                      borderRadius: '10%',  // Adjust as needed
                    }}
                    // height="600"
                    // frameBorder="0"
                    // allowFullScreen=""
          />
                </div>
                </div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}
export default Canvas;


