import { useNavigate } from "react-router-dom"
import Header from "./Header"
import logoIcon from "../assets/icons8-tickets-48.png"
import styles from "./landingPage.module.css"
import wavyBg from "../assets/wavy-background.svg"
import plusIcon from "../assets/icons8-plus-48.png"
import profileIcon from "../assets/icons8-profile-48.png"
import messageIcon from "../assets/icons8-message-48.png"
import pfp1 from "../assets/r-d-smith-S1z65AHntBo-unsplash.jpg"
import pfp2 from "../assets/brooke-cagle-V3twiVfbhz0-unsplash.jpg"
import pfp3 from "../assets/darshan-patel-QJEVpydulGs-unsplash.jpg"
import twitterIcon from "../assets/icons8-twitter-50.png"
import linkedinIcon from "../assets/icons8-linkedin-50.png"
import facebookIcon from "../assets/icons8-facebook-50.png"
import Footer from "./Footer"

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <main>
            <svg className={styles.svgCircle} height="1000" width="200" xmlns="http://www.w3.org/2000/svg">
                <circle r="80" cx="80" cy="80" fill="white" />
            </svg>
            <svg className={styles.svgCircle} height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
                <circle r="80" cx="400" cy="200" fill="white" />
            </svg>
            <Header />
            <div className={styles.heroSection}>
                <img className={styles.wavyBg} src={wavyBg} alt="wavy background" />

                <h1>Your One-stop Solution to Manage <span className={styles.greenText}>Customer<br /> Suppport</span></h1>

                <p className={styles.para1}>Ventix is a simple, intuitive, and powerful ticket management system designed <br /> to help you provide outstanding customer service.</p>

                <div className={styles.mainButtons}>

                    <button onClick={() => navigate("/signup")} className={styles.mainGetButton}><strong>Get Started</strong>
                    </button>

                    <button onClick={() => navigate("/login")} className={styles.mainLoginButton}><strong>Login</strong></button>
                </div>
                <div className={styles.heroSubSection}>
                    <h2>Everything you need, nothing you don't.</h2>
                    <p className={styles.para2}>Ventix is packed with features to help you streamline your support but we've <br /> kept it simple and intuitive to use</p>
                </div>



                <div className={styles.ftCardContainer} >

                    <div className={styles.ftCard}>
                        <img src={plusIcon} alt="" />
                        <h5>Effortless Ticket Creation</h5>
                        <p>Create tickets in seconds with our <br />simple and intuitive interface.</p>
                    </div>

                    <div className={styles.ftCard}>
                        <img src={profileIcon} alt="" />
                        <h5>Update Your Tickets on The Go</h5>
                        <p>Update tickets in realtime even after submission.</p>
                    </div>

                    <div className={styles.ftCard}>
                        <img src={messageIcon} alt="" />
                        <h5>Easy Deletion</h5>
                        <p>Unclog your workspace by removing resolved tickets.</p>
                    </div>

                </div>

            </div>

            <div className={styles.testimonies}>
                <h2>Loved by teams worldwide</h2>
                <div className={styles.testimonyCardContainer}>

                    <div className={styles.testimonyCard}>
                        <div className={styles.pfpContainer}>
                            <img className={styles.pfp1} src={pfp1} alt="" />
                        </div>
                        <h5>David Smith</h5>
                        <p>"Ventix has become a game- <br />changer for our support team, <br /> we're resolving faster than <br /> ever before"</p>
                    </div>

                    <div className={styles.testimonyCard}>
                        <div className={styles.pfpContainer}>
                            <img className={styles.pfp2} src={pfp2} alt="" />
                        </div>
                        <h5>Sarah Johnson</h5>
                        <p>"I love how easy it is to use ventix, <br />I was able to get my whole team up<br /> and running in minutes"</p>
                    </div>

                    <div className={styles.testimonyCard}>
                        <div className={styles.pfpContainer}>
                            <img className={styles.pfp3} src={pfp3} alt="" />
                        </div>
                        <h5>Tom chan</h5>
                        <p>"Ticket creation is so seamless <br />i never thought i would be this excited <br />about  creating and managing tickets"</p>
                    </div>
                </div>
            </div>

            <Footer />
            {/* <footer >
                <div className={styles.logo}>
                    <img src={logoIcon} alt="Logo" />
                    <p> <strong>Ventix</strong></p>
                </div>

                <div className={styles.privacyTerms}>
                    <p>privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div className={styles.socialIconsContainer}>
                    <img className={styles.socialIcons} src={twitterIcon} alt="twitter logo" />
                    <img className={styles.socialIcons} src={linkedinIcon} alt="linkedin logo" />
                    <img className={styles.socialIcons} src={facebookIcon} alt="facebook logo" />
                </div>
                <p className={styles.rights}>2023 Ventix All rights reserved</p>

            </footer> */}
        </main>



    )
}