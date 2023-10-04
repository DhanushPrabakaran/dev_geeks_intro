import React from "react";
import Image from "next/image";
import UIux from "@/public/UI-UX design.gif"
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-center align-middle">
        <div
        className="items-center flex flex-col flex-wrap">
          <h1 className="text-5xl font-bold italic text-primary text-center">A community Platform</h1>
          <p className="py-6 text-center ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary w-fit font-extrabold italic">Get Started</button>
        </div>
        
        <Image src={UIux} alt={""} />
      </div>
    </div>
  );
};

export default Hero;
