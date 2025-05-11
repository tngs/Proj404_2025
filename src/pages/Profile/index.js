import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { updateAccount } from "../../redux/actions/account";

const ProfilePage = () => {
  const user = useSelector((state) => state.account?.user);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    location: user?.location || "",
    bio: user?.bio || "",
    email: user?.email || "",
  });
  useEffect(() => {
    setFormData({
      name: user?.name || "",
      username: user?.username || "",
      location: user?.location || "",
      bio: user?.bio || "",
      email: user?.email || "",
    });
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const editButtonHandler = () => {
    setEditMode(true);
  };

  const cancelEditHandler = () => {
    setFormData({
      name: user?.name || "",
      username: user?.username || "",
      location: user?.location || "",
      bio: user?.bio || "",
      email: user?.email || "",
    });
    setEditMode(false);
  };

  const saveButtonHandler = () => {
    // Here you would normally dispatch an action to update the user in Redux
    // Example: dispatch(updateUserProfile(formData));
    console.log("Saved data:", formData);
    dispatch(updateAccount(formData));
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={user?.profilePic} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          {editMode ? (
            <>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <h2>{user?.name} {`(${user?.role})`}</h2>
              <p className="username">@{user?.username}</p>
              <p className="location">{user?.location}</p>
            </>
          )}
        </div>
      </div>

      <div className="profile-body">
        <h3>Bio</h3>
        {editMode ? (
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        ) : (
          <p>{user?.bio}</p>
        )}

        <div className="contact-info">
          <h3>Contact Information</h3>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          ) : (
            <p>
              Email: <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </p>
          )}
        </div>
      </div>

      <div className="profile-footer">
        {editMode ? (
          <>
            <button className="save-button" onClick={saveButtonHandler}>
              Save
            </button>
            <button className="edit-button" onClick={cancelEditHandler}>
              Cancel
            </button>
          </>
        ) : (
          <button className="edit-button" onClick={editButtonHandler}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
