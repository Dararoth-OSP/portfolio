import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className="text-red-600 text-3xl flex gap-x-4">
      <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaTelegram />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default FollowMe;
