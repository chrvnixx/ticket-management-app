import { useNavigate } from "react-router-dom"
import styles from "./header.module.css"
import logoIcon from "../assets/icons8-tickets-48.png"

export default function Header() {
    const navigate = useNavigate()
    return (
        <>
            <header className={styles.header} >
                <div onClick={() => navigate("/")} className={styles.logo}>
                    <img src={logoIcon} alt="Logo" />
                    <p > <strong>Ventix</strong></p>
                </div>
                <div className={styles.features}>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
                <div>
                    <button onClick={() => navigate("/login")} className={styles.loginButton}> <strong>Login</strong></button>
                    <button onClick={() => navigate("/signup")} className={styles.getButton}> <strong>Get Started</strong></button>
                </div>
            </header>
        </>

    )
}