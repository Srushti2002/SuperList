import React from 'react';
import styles from '../styles/Canvas.module.css';

const HeadDescriptions = ["Tasks, notes ", "Integrated ", "Work & personal ", "Perfect for ", "Private "];
const BodyDescriptions = ["& everything in between", "with apps you love", "at the flip of the switch ", "teams and solo users", "until you are ready"];
const CanvasLinks = ["https://rive.app/s/5SECyr-JwEy39V_rTuK5qg/embed", "https://rive.app/s/2UugwsmmMECoeqqzKEA6_w/embed", "https://rive.app/s/l4Dn5NXjT0eWvqrEMebEZw/embed", "https://rive.app/s/_fzPLUmffE_2N34e1ULr4Q/embed", "https://rive.app/s/H1tra-eEZEeQWAjKlFCM4g/embed"];
const canvasColors = ["#e2e0f1", "#EAF5F1", "#FEEDEB", "#E9F4FE", "#F4E1E7"];
const canvasColorsImg = ["#6B66DA", "#2A966F", "#F84F39", "#2590F2", "#F84F39"];
const textColors= ["#6B66DA", "#2A966F", "#F84F39", "#2590F2", "#F84F39"];
const dataAos = ["fade-right","fade-left","fade-right","fade-left","fade-right"];


function Canvas() {
  return (
    <div className={styles.CanvasWrapper}>
      <div className={styles.CanvasSection}>
        {HeadDescriptions.map((headDes, index) => (
          <div key={index} className={styles.CanvasItem}  data-aos={dataAos[index]}>
            <div className={styles.CanvasLeftSection}
            style={{backgroundColor: canvasColors[index]}}
            >
              <div className={styles.CanvasMainTitle}
              style={{color: textColors[index]}}
              >{headDes}</div>
              <div className={styles.CanvasSubTitle}>{BodyDescriptions[index]}</div>
            </div>
            <div className={styles.CanvasRightSection}
            style={{backgroundColor: canvasColorsImg[index]}}>
            <iframe
          title={`Canvas ${index + 1}`}
          src={CanvasLinks[index]}
          width="650"
          style={{backgroundColor: canvasColorsImg[index]}}
          height="700"
          frameBorder="0"
          allowFullScreen=""
/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//Stacked cards Scroll
// import React, { useEffect, useRef, useState } from 'react';
// import styles from '../styles/Canvas.module.css';

// const HeadDescriptions = ["Tasks, notes ", "Integrated ", "Work & personal ", "Perfect for ", "Private "];
// const BodyDescriptions = ["& everything in between", "with apps you love", "at the flip of the switch ", "teams and solo users", "until you are ready"];
// const CanvasLinks = ["https://rive.app/s/5SECyr-JwEy39V_rTuK5qg/embed", "https://rive.app/s/2UugwsmmMECoeqqzKEA6_w/embed", "https://rive.app/s/l4Dn5NXjT0eWvqrEMebEZw/embed", "https://rive.app/s/_fzPLUmffE_2N34e1ULr4Q/embed", "https://rive.app/s/H1tra-eEZEeQWAjKlFCM4g/embed"];
// const canvasColors = ["#e2e0f1", "#EAF5F1", "#FEEDEB", "#E9F4FE", "#F4E1E7"];
// const canvasColorsImg = ["#6B66DA", "#2A966F", "#F84F39", "#2590F2", "#F84F39"];
// const textColors = ["#6B66DA", "#2A966F", "#F84F39", "#2590F2", "#F84F39"];

// function Canvas() {
//   const canvasRef = useRef(null);
//   const [isStacking, setIsStacking] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const cards = canvasRef.current.querySelectorAll(`.${styles.CanvasItem}`);
//       const offset = window.scrollY * 0.08; // Adjust the scroll speed
//       const firstCard = cards[0];
//       const rect = firstCard.getBoundingClientRect();
//       const isTopVisible = rect.top <= 0;

//       setIsStacking(isTopVisible);

//       cards.forEach((card, index) => {
//         card.style.transition = 'transform 0.3s ease-out'; // Set the transition

//         if (isTopVisible) {
//           // card.style.position = index === 0 ? 'fixed' : 'relative'; // Fix the position for the first card
//           card.style.transform = `translateY(-${offset * index}px)`;
//         } else {
//           // card.style.position = 'relative'; // Reset to relative position
//           card.style.transform = 'translateY(-5px)';
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial positioning
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={styles.CanvasWrapper}>
//       <div ref={canvasRef} className={styles.CanvasSection}>
//         {HeadDescriptions.map((headDes, index) => (
//           <div key={index} className={styles.CanvasItem} style={{ height: "95vh" }}>
//             <div className={styles.CanvasLeftSection} style={{ backgroundColor: canvasColors[index] }}>
//               <div className={styles.CanvasMainTitle} style={{ color: textColors[index] }}>
//                 {headDes}
//               </div>
//               <div className={styles.CanvasSubTitle}>{BodyDescriptions[index]}</div>
//             </div>
//             <div className={styles.CanvasRightSection} style={{ backgroundColor: canvasColorsImg[index] }}>
//               <iframe
//                 title={`Canvas ${index + 1}`}
//                 src={CanvasLinks[index]}
//                 width="650"
//                 style={{ backgroundColor: canvasColorsImg[index] }}
//                 height="700"
//                 frameBorder="0"
//                 allowFullScreen=""
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Canvas;

export default Canvas;

