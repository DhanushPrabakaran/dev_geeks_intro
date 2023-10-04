import Image from "next/image";

import Innovation from "@/public/Innovation.gif";

import UIux from "@/public/UIUXdesign.gif";

export default function Home() {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content justify-center font-mono">
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
            <p className="py-6 text-center italic text-secondary">
             Dev geeks platform is a vibrant hub for developers of all backgrounds and expertise levels to come together and create, learn, and grow. Whether you{`'`}re a seasoned coder or just starting your programming journey, you{`'`}ll find a welcoming and supportive community eager to help you achieve your goals.
            <br />
            Dev geeks is your go-to destination for collaboration, learning, and networking in the world of technology
            
            {/* 🌐 Connect and Collaborate */}
            </p>
            <a href="https://chat.whatsapp.com/JSdV7cqWtv0AmGY95dqS3g">
              <button className="btn btn-secondary w-fit font-extrabold italic">
                Join Here
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
            <h1 className="text-5xl font-bold italic text-primary my-4 text-center ">
              Invite Links
            </h1>
            <div className="w-fit flex flex-wrap justify-center font-mono">
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
      {/* < do's and donts/> */}
      <div className="hero  bg-base-200">
        <div className="hero-content text-center flex flex-col w-fit flex-wrap">
          <div className=" border-dashed border-2 border-neutral flex sm:flex-col flex-row  justify-evenly rounded-md">
            <div className=" border-dashed border-2 border-neutral m-1 p-1 rounded-md text-center">
              <h1 className=" text-primary font-bold text-center">Do{`'`}s</h1>
              <div className="w-full border border-neutral  "></div> 
              <h1 className=" text-start">Share your knowledge & Queries</h1>
              <h1 className=" text-start">Do Collaborate</h1>
              <h1 className=" text-start">Showcase your talent & engage in discussions</h1>
              <h1 className=" text-start">give credit</h1>
              <h1 className=" text-start">provide context and report issues</h1>
              <h1 className=" text-start">help beginners & Learn more</h1>
            </div>
            <div className=" border-dashed border-2  border-neutral m-1 p-1 rounded-md text-center">
            <h1 className="font-bold text-error">Dont{`'`}s</h1>
              <div className="w-full border border-neutral  "></div> 
            <h1 className=" text-start">Don{`'`}t Troll or Flame:</h1>
            <h1 className=" text-start">Don{`'`}t share irrelevant topics or details</h1>
            <h1 className=" text-start">Don{`'`}t assume authority</h1>
            <h1 className=" text-start">Don{`'`}t be impatient</h1>
            {/* <h1>Share content relaetes to development and learning</h1> */}
            </div>
          </div>
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
