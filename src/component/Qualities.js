import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Qualities.module.css';

function Qualities() {
    const [isScrolled, setIsScrolled] = useState(false);
    const qualitiesRef = useRef(null);
    const threshold = 50;
    useEffect(() => {
        const qualityItems = document.querySelectorAll(`.${styles.QualityContent} > div > div`);
    
        qualityItems.forEach((item, index) => {
          const opacity = 1 - (index - 1) / qualityItems.length;
          const color = `rgba(222, 221, 235, ${opacity})`;
          item.style.color = color;
        });
    
        const handleScroll = () => {
          const qualitiesRect = qualitiesRef.current.getBoundingClientRect();
          const shouldChangeColor = qualitiesRect.top < threshold;
    
          setIsScrolled(shouldChangeColor);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div ref = {qualitiesRef} className={`${styles.QualityWrapper} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>
            <div className={styles.QualityHeading}>
                <div className={`${styles.QualityHeadingTop} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>Everything</div>
                <div className={`${styles.QualityHeadingBottom} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>a team needs</div>
            </div>

            <div className={`${styles.QualityContent}`}>
                <div className={`${isScrolled ? styles.scrolled : styles.notScrolled}`}>
                    <div>AI uperpowers</div>
                    <span>AI + SuperList = 🔮</span>
                </div>

                <div>
                    <div>Offline mode</div>
                    <span>Keep working, even<br /> when your wifi isn't. </span>
                </div>

                <div>
                    <div>Collaboration</div>
                    <span>Collaborate with your<br /> team , friends or clients.  </span>
                </div>
                <div>
                    <div>Real time</div>
                    <span>Get things done<br /> together, in real time.  </span>    
                </div>

                <div>
                    <div>Repeating tasks</div>
                    <span>Simplify your workflow<br /> bu setting tasks to repeat.  </span>
                </div>

                <div>
                    <div>Tasks via email</div>
                    <span>Turn email into tasks<br /> with the click of button.  </span>
                </div>

                <div>
                    <div>Reminders</div>
                    <span>Never miss a deadline<br /> with reminders.  </span>
                </div>

                <div>
                    <div>Infininte depth</div>
                    <span>Add a subtask, and<br /> another one, and<br /> another one...  </span>
                </div>
                
                <div>
                    <div>Multiplatform</div>
                    <span>Seamlessly work<br /> across macOS, iOS,<br /> Android, and Web.  </span>
                </div>

                <div>
                    <div>Private & secure</div>
                    <span>Superlist is private by<br /> default. Share only what<br /> you want to.  </span>
                </div>

                <div>
                    <div>Fast AF</div>
                    <span>Work at the spped of<br /> light(almost).  </span>
                </div>
            </div>

            <div className={`${styles.QualityBottom} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>
                The list goes on...
            </div>

            <div className={`${styles.QualityBeta}  ${isScrolled ? styles.scrolled : styles.notScrolled}`}>
                <div className={styles.QualityBetaCircleOne}></div>
                <div className={styles.QualityBetaSquare}>
                    Join our Beta
                </div>
                <div className={styles.QualityBetaCircleTwo}></div>

            </div>
            
        </div>
    )
    
}

export default Qualities;