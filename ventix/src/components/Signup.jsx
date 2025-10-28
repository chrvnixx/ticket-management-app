import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginSignup.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            localStorage.setItem("user", JSON.stringify(formData));
            alert("Signup successful!");
            navigate("/login");
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Create an Account</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.confirmPassword && (
                        <p className={styles.error}>{errors.confirmPassword}</p>
                    )}

                    <button type="submit" className={styles.button}>
                        Sign Up
                    </button>
                    <p className={styles.switchText}>
                        Already have an account?{" "}
                        <span
                            className={styles.link}
                            onClick={() => navigate("/login")}
                        >
                            Log In
                        </span>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
}