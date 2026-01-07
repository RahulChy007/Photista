import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    photo: "", // 👈 profile picture (base64)
  });

  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  // Save profile
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile updated successfully ✅");
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        photo: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-4 sm:px-8 py-8"
    >
      <h1 className="text-2xl font-semibold mb-6">
        My Profile
      </h1>

      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={
                profile.photo ||
                "https://ui-avatars.com/api/?name=User&background=6366F1&color=fff"
              }
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border"
            />

            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/90">
                ✎
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <div>
            <p className="text-lg font-medium">
              {profile.name || "Your Name"}
            </p>
            <p className="text-sm text-gray-500">
              {profile.email || "your@email.com"}
            </p>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Your name"
            className={`w-full mt-1 border rounded-lg p-3 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="you@example.com"
            className={`w-full mt-1 border rounded-lg p-3 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Phone number"
            className={`w-full mt-1 border rounded-lg p-3 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="City, Country"
            className={`w-full mt-1 border rounded-lg p-3 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MyProfile;
