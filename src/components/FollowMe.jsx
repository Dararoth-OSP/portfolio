import React from "react";
import { FaFacebook, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className="text-red-600 text-3xl flex gap-x-4">
      <a href="https://www.facebook.com/dararoth.ferrari/" target="_blank">
        <FaFacebook />
      </a>
      <a href="https://github.com/Dararoth-OSP" target="_blank">
        <FaGithub />
      </a>
      <a href="https://t.me/Sorphoan_Dararoth" target="_blank">
        <FaTelegram />
      </a>
      <a
        href="https://www.linkedin.com/in/sorphandararath-ouk-2a7070239/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default FollowMe;
