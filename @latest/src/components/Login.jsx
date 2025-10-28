import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./loginSignup.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix the highlighted errors.");
            return;
        }

        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (
            savedUser &&
            savedUser.email === formData.email &&
            savedUser.password === formData.password
        ) {
            localStorage.setItem("isAuthenticated", true);
            toast.success("Login successful!");
            navigate("/dashboard");
        } else {
            setErrors({ general: "Invalid email or password" });
            toast.error("Invalid email or password");
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Welcome Back</h2>
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
                    {errors.general && <p className={styles.error}>{errors.general}</p>}

                    <button type="submit" className={styles.button}>
                        Login
                    </button>

                    <p className={styles.switchText}>
                        Don’t have an account?{" "}
                        <span className={styles.link} onClick={() => navigate("/signup")}>
                            Sign Up
                        </span>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
}
