import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    return(
        <div className={styles.FooterWrapper}>
            <div className={styles.FooterBlock}>
                <div className={styles.FooterSuperlist}>
                    <p>SuperList</p>
                    <div className={styles.FooterSuperlistItems}>
                        <div className={styles.FooterLinkList}>
                            <a href = "/"> Home</a>
                            <a href = "https://www.superlist.com/updates"> Updates</a>
                            <a href = "https://www.superlist.com/pricing"> Pricing</a>
                            <a href = "https://www.superlist.com/careers"> Careers</a>
                            <a href = "https://feedback.superlist.com/b/5m1d55m6/feature-ideas"> Suggestions</a>
                            <a href = "https://help.superlist.com/en/" blank="_blank" rel="noreferrer"> Help Center</a>
                        </div>
                        <div className={styles.FooterLinkList}>    
                            <a href = "https://www.superlist.com/opensource"> Open Source</a>
                            <a href = "https://www.superlist.com/cookie-policy"> Cookies</a>
                            <a href = "https://www.superlist.com/privacy-policy"> Privacy</a>
                            <a href = "https://www.superlist.com/terms"> Terms</a>
                            <a href = "mailto:hello@superlist.com"> Contact</a>
                        </div>
                    </div>
                </div>

                <div className={styles.FooterApp}>
                    <p>App</p>
                    <div className={styles.FooterLinkList}>
                        <a href = "https://storage.googleapis.com/superlist-appcast/beta/latest/Superlist.zip" target="_blank" rel="noreferrer"> Mac</a>
                        <a href = "https://app.superlist.com/"> Web</a>
                        <a href = "https://apps.apple.com/us/app/superlist-tasks-lists/id1547585270"> IOS</a>
                        <a href = "https://play.google.com/store/apps/details?id=com.superlist.superlist&pli=1"> Android</a>   
                    </div>
                </div>

                <div className={styles.FooterSocial}>
                    <p>Social</p>
                    <div className={styles.FooterLinkList}>
                        <a href = "https://github.com/superlistapp" target="_blank" rel="noreferrer"> GitHub</a>
                        <a href = "https://www.linkedin.com/company/superlistapp/" target="_blank" rel="noreferrer"> LinkedIn</a>
                        <a href = "https://www.instagram.com/superlistapp/?hl=en" target="_blank" rel="noreferrer"> Instagram</a>
                        <a href = "https://twitter.com/SuperlistHQ" target="_blank" rel="noreferrer"> X</a>
                    </div>
                </div>

                <div className={styles.FooterUpdates}>
                    <p>Updates</p>
                    <div className={styles.FooterUpdatesBox}>
                        <a href="https://www.superlist.com/updates/more-improvements-bug-fixes">More Improvement and Bug Fixing
                        <div>🐛</div>
                        <span>v 0.32.0</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.FooterCopyRight}>
                ⓒ Superlist 2023
            </div>
    </div>
    )
    
}
export default Footer;