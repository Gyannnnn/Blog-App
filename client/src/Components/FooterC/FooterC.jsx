import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const FooterC = () => {
  return (
    <Footer container className="border-t-8 border-teal-500 flex flex-col items-start gap-2 p-4">
      <div className="w-full flex flex-col gap-5 justify-between md:flex-row">
        <div>
          <Link
            to="/"
            className="self-center whitespace-nowrap text-lg sm:text-xl dark:text-white font-semibold"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-zinc-500 to-pink-500 rounded-lg text-white text-lg">
              Gyan's
            </span>
            Blog
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10">
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Portfolio</Footer.Link>
              <Footer.Link href="#">Gyan Play</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">LinkedIn</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup>
              <Footer.Link href="#">Privacy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <Footer.Copyright by="Gyanaranjan" year={new Date().getFullYear()} />
        
      </div>
    </Footer>
  );
};

export default FooterC;
