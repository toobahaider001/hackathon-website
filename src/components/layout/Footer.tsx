import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Footer Content */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-[30px] bg-[#FFFFFF] mt-10 px-4 py-6 md:py-8">
        {/* Company Info */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="text-[16px] text-[#252B42] font-bold">Company Info</div>
          <div className="text-[14px] text-[#737373] font-bold">About Us</div>
          <div className="text-[14px] text-[#737373] font-bold">Carrier</div>
          <div className="text-[14px] text-[#737373] font-bold">We are hiring</div>
          <div className="text-[14px] text-[#737373] font-bold">Blog</div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="text-[16px] text-[#252B42] font-bold">Legal</div>
          <div className="text-[14px] text-[#737373] font-bold">Carrier</div>
          <div className="text-[14px] text-[#737373] font-bold">Center</div>
          <div className="text-[14px] text-[#737373] font-bold">We are hiring</div>
          <div className="text-[14px] text-[#737373] font-bold">Blog</div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="text-[16px] text-[#252B42] font-bold">Features</div>
          <div className="text-[14px] text-[#737373] font-bold">Business Marketing</div>
          <div className="text-[14px] text-[#737373] font-bold">User Analytic</div>
          <div className="text-[14px] text-[#737373] font-bold">Live Chat</div>
          <div className="text-[14px] text-[#737373] font-bold">Unlimited Support</div>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="text-[16px] text-[#252B42] font-bold">Resources</div>
          <div className="text-[14px] text-[#737373] font-bold">IOS & Android</div>
          <div className="text-[14px] text-[#737373] font-bold">Watch a Demo</div>
          <div className="text-[14px] text-[#737373] font-bold">Customers</div>
          <div className="text-[14px] text-[#737373] font-bold">API</div>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="text-[16px] text-[#252B42] font-bold">Get In Touch</div>
          <div className="flex">
            <input
              type="text"
              placeholder="Your Email"
              className="h-[50px] w-full md:w-auto rounded-l-[2px] bg-[#F9F9F9] border border-[#E0E0E0] px-4 text-sm text-[#737373]"
            />
            <button className="h-[50px] px-4 md:w-[117px] items-center flex justify-center rounded-r-[2px] bg-[#23A6F0] text-white">
              Subscribe
            </button>
          </div>
          <div className="text-[12px] -mt-3 text-[#737373]">
            Lorem ipsum sum dolor Amit
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="h-auto bg-[#FAFAFA] flex flex-wrap items-center justify-center text-center py-4 text-sm text-[#737373] font-bold">
        Made With Love By Finland. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
