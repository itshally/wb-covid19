import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return(

        <div className={styles.footer}>
            <div className={styles.footerContent}>
                {/* project description */}
                <div className={styles.col1}>
                    <h4>About</h4>
                    <p>This project is built for a hackathon regarding web monetization api, to showcase an updated counter of COVID-19 cases
                            and to show exclusive news content from WHO.</p>
                </div>
               {/* authors */}
               <div className={styles.col2}>
                   <h4>Authors</h4>
                   <a href="https://github.com/itshally" target="_blank" rel="noopener noreferrer"><span>Hally</span></a><br/>
                   <a href="https://github.com/krishnadevz" target="_blank" rel="noopener noreferrer"><span>Krishna</span></a>
               </div>
                {/* sources */}
               <div className={styles.col3}>
                   <h4>Sources</h4>
                   <a href="https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=5038s" target="_blank" rel="noopener noreferrer"><span>JavaScript Mastery</span></a><br/>
                   <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer"><span>WHO</span></a><br/>
                   <a href="https://webmonetization.org/" target="_blank" rel="noopener noreferrer"><span>Web Monetization</span></a><br/>
                   <a href="https://coil.com/" target="_blank" rel="noopener noreferrer"><span>Coil</span></a>
               </div>
                {/* blog articles */}
                <div className={styles.col4}>
                    <h4>Blog</h4>
                    <a href="https://dev.to/krishnakakade/day-1-gftwhackathon-team-forming-and-idea-fixing-88h" target="_blank" rel="noopener noreferrer">
                        <span>Article 1</span>
                    </a><br/>
                    <a href="https://dev.to/krishnakakade/day-2-working-on-tracker-in-reactjs-and-logo-for-app-2a1j" target="_blank" rel="noopener noreferrer">
                        <span>Article 2</span>
                    </a><br/>
                    <a href="https://dev.to/krishnakakade/day-3-exclusive-content-from-who-api-web-monetization-4pn7" target="_blank" rel="noopener noreferrer">
                        <span>Article 3</span>
                    </a>
                </div>
            </div>
            <p className={styles.copyright}>Copyright &copy; 2020 All Rights Reserved</p>
        </div>

    );
}

export default Footer;