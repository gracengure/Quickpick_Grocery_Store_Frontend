import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const UserProfile = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .required('Required'),
            repeatPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-form-container">
                    <form className="profile-form" onSubmit={formik.handleSubmit}>
                        <h2>User Profile</h2>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="error">{formik.errors.username}</div>
                            ) : null}
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="error">{formik.errors.password}</div>
                            ) : null}
                        </label>
                        <label>
                            Repeat Password:
                            <input
                                type="password"
                                name="repeatPassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.repeatPassword}
                            />
                            {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                                <div className="error">{formik.errors.repeatPassword}</div>
                            ) : null}
                        </label>
                        <button type="submit">Save Changes</button>
                    </form>
                </div>
                <div className="profile-details-container">
                    <div className="profile-image-container">
                        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
                    </div>
                    <div className="profile-social-media">
                        <h3>Social Media</h3>
                        <div className="social-icons">
                            <div>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <label>Add Twitter</label>
                            </div>
                            <div>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <label>Add Facebook</label>
                            </div>
                            <div>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <label>Add LinkedIn</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
