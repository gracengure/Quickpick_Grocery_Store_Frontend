import React from 'react';

const UserProfile = () => {
    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-image-container">
                    <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
                </div>
                <div className="profile-details">
                    <h1>Erick Mongare</h1>
                    <p>Email: erickmongare@example.com</p>
                    <p>Location:     </p>
                    <p>Bio:          </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
