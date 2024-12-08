import React from 'react';
import Logo from '../shared/Logo';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Ban = () => {
  return (
    <div className="h-[142px] mt-36 bg-[#FAFAFA] flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-[590px] px-4">
      {/* Logo Section */}
      <div>
        <Logo />
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 md:gap-[20px]">
        <FaFacebook color="blue" size={20} />
        <FaInstagram color="blue" size={20} />
        <FaTwitter color="blue" size={20} />
      </div>
    </div>
  );
};

export default Ban;
