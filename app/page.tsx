import Image from "next/image";

import Innovation from "@/public/Innovation.gif";

import UIux from "@/public/UIUXdesign.gif";

export default function Home() {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content justify-center">
        <h1 className="text-3xl font-bold">
          <span className="text-secondary pr-1 italic">Dev </span> Geeks
        </h1>
      </div>
      {/*  <Hero /> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-center align-middle">
          <div className="items-center flex flex-col flex-wrap">
            <h1 className="text-5xl font-bold italic text-primary text-center">
              A community Platform
            </h1>
            <p className="py-6 text-center ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="https://chat.whatsapp.com/JSdV7cqWtv0AmGY95dqS3g">
            <button className="btn btn-secondary w-fit font-extrabold italic">
              Get Started
            </button>
            </a>
          </div>

          <Image src={UIux} alt={""} />
        </div>
      </div>
      {/* <Groups /> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-center align-middle">
          <div className="items-center flex flex-col flex-wrap lg:w-2/4 ">
            <h1 className="text-5xl font-bold italic text-primary text-center">
              Invite Links
            </h1>
            <div className="w-fit flex flex-wrap justify-center">
              <a href="https://chat.whatsapp.com/HeUKZYFR9uTLMsT5j4vpSH">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center  duration-300 font-bold hover:text-secondary">
                    Web Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/HwiOLeTOPkf3JMKqlzO0aB">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md  text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    UI/UX Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/BFwJD4JTiI21dNjoGihm56">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Competitive Programmers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/CLNXOWhgN9a5HSkxkUDAZD">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    IOT Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/EweFjcij8L79sIlHiXa7X1">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Opensource Contributors
                  </h1>
                </div>
              </a>

              {/* <a href="">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Buiness quiz
                  </h1>
                </div>
              </a> */}

              <a href="https://chat.whatsapp.com/LgoPwR7E1aE5ODVzedAcUC">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    AL / ML Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/Lmpn8KjIIN7G0WHbKKTyx5">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Devops Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/Hx3Q5hUah55GQDJyvwaWtp">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Blockchain Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/JmQ1GpETnBIHwVQfoTVSpr">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    App Developers
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/EDhxs3WUe6EArDt0D3xzo4">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Soft Skills
                  </h1>
                </div>
              </a>

              <a href="https://chat.whatsapp.com/HLn5hRFZGFmGTOTiU0mHol">
                <div className=" relative w-fit p-2 h-12 bg-cover hover:bg-primary hover:border-primary-focus hover:border-2 border-primary-content  border-2 rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]">
                  <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
                  <h1 className=" z-10 inline-block text-center   duration-300 font-bold hover:text-secondary">
                    Buiness Systems
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <Image src={Innovation} alt={""} />
        </div>
      </div>
      {/* <Footer /> */}
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <h1 className=" font-bold">
            <span className="text-secondary italic">Dev</span> Geeks
          </h1>
          <p>
            &copy;Copyright 2023-
            <a
              className="btn-link text-sm "
              href="https://github.com/DhanushPrabakaran"
            >
              @Dhanushprabakaran
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}
