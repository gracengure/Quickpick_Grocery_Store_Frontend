import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserProfile = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            role: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            role: Yup.string()
                .oneOf(['Admin', 'Customer'], 'Invalid role')
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
                            Full Name:
                            <br />
                            <input
                                type="text"
                                name="fullName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                            />
                            {formik.touched.fullName && formik.errors.fullName ? (
                                <div className="error">{formik.errors.fullName}</div>
                            ) : null}
                        </label>
                        <label>
                            Email:
                            <br />
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
                            Role:
                            <br />
                            <select
                                name="role"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.role}
                            >
                                <option value="" label="Select role" />
                                <option value="Admin" label="Admin" />
                                <option value="Customer" label="Customer" />
                            </select>
                            {formik.touched.role && formik.errors.role ? (
                                <div className="error">{formik.errors.role}</div>
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


