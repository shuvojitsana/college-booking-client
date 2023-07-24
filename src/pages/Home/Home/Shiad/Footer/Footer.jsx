import React from "react";



const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div >
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-[75px]"
              src="https://i.ibb.co/cJLcRzW/logo-2x.png"
              alt=""
            />
            <h2 className="text-3xl">BL College</h2>
          </div>
          <p>There are many variations of <br /> passg  of Lorem Ipsum available,<br />  but thmajority have suffered altem.</p>
         
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Shuvojit Kumar Sana</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
