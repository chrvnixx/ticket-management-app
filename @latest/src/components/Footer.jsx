
import styles from './footer.module.css';
import logoIcon from "../assets/icons8-tickets-48.png";
import twitterIcon from "../assets/icons8-twitter-50.png";
import linkedinIcon from "../assets/icons8-linkedin-50.png";
import facebookIcon from "../assets/icons8-facebook-50.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logoIcon} alt="Logo" />
                <p> <strong>Ventix</strong></p>
            </div>
            <div className={styles.privacyTerms}>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            <div className={styles.socialIconsContainer}>
                <img className={styles.socialIcons} src={twitterIcon} alt="twitter logo" />
                <img className={styles.socialIcons} src={linkedinIcon} alt="linkedin logo" />
                <img className={styles.socialIcons} src={facebookIcon} alt="facebook logo" />
            </div>
            <p className={styles.rights}>2023 Ventix All rights reserved</p>
        </footer>
    );
};

