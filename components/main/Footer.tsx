import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-row items-center justify-start space-x-8">
                    {/* <div className="font-bold text-[16px]">Community</div> */}
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxEnvelopeClosed />
                        <span className="text-[15px] ml-[6px]">Mail</span>    
                    </p> */}
                    <a
                    href="mailto:adwaitmahadar@gmail.com"
                    className="flex flex-row items-center my-[15px] cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <RxEnvelopeClosed />
                        <span className="text-[15px] ml-[6px]">Mail</span>
                    </a>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p> */}
                    <a
                    href="https://github.com/your-profile"
                    className="flex flex-row items-center my-[15px] cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>
                    </a>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                    </p> */}
                    <a
                    href="https://linkedin.com/in/your-profile"
                    className="flex flex-row items-center my-[15px] cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>
                    </a>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; adwaitmahdar@gmail.com {getCurrentYear()} All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer