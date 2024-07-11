import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
                            <br></br>
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
                            <br></br>
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
                            <br></br>
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
                            <br></br>
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
                        <img src="https://i.pinimg.com/564x/20/05/e2/2005e27a39fa5f6d97b2e0a95233b2be.jpg" alt="Profile" className="profile-image" />
                    </div>
                            </div>
                        </div>
                    </div>
    );
};

export default UserProfile;
