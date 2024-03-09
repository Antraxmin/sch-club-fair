import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-white py-6 ">
      <div className="container mx-auto px-4  ">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">
              순천향대학교 IT 서비스 개발 동아리 COMING SOON
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://github.com">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
            {/* <p className="text-xs">
              {new Date().getFullYear()} Copyright ⓒ ComingSoon 1th. All Rights
              Reserved.
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
