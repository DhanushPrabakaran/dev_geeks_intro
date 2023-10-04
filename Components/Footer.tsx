import React from "react";
import Image from "next/image";
import Logo from '@/public/devgeekslogo.jpg'
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
      <h1 className=" font-bold"><span className="text-secondary italic">Dev</span> Geeks</h1>
        <p>&copy;Copyright 2023-<a 
         className="btn-link text-sm "
          href="https://github.com/DhanushPrabakaran">@Dhanushprabakaran</a></p>
         
      </aside>
      
    </footer>
  );
};

export default Footer;
