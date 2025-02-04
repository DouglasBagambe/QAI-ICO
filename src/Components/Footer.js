// src/Components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-[#0d0d2b] pt-[50px]  pb-[30px] text-white body-font">
        <div class="max-w-[1300px] px-5 lg:pt-[50px] mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-0 mt-[30px]">
              <a href="index.html">
                <div className="spin"></div>
                <span class="flex m-auto text-center mt-2 inline-block text-xl ml-5 md:ml-[1.5rem]">
                  BSECA
                </span>
              </a>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-0 mt-[30px]">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Application
              </h2>
              <nav class="flex flex-col justify-center md:items-start items-center  list-none mb-10">
                <a href="" class="mb-2 inline-block">
                  <div class="flex items-center">
                    <img src="assets/app.png" class="h-5 w-5 mr-2 " />
                    <p>App Store</p>
                  </div>
                </a>
                <a href=" " class="mb-2 inline-block">
                  <div class="flex items-center">
                    <img src="assets/play.png" class="h-5 w-5 mr-2" />
                    <p>Play Store</p>
                  </div>
                </a>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-0 mt-[30px]">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Conditions
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Anti Fraud Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Terms of Credits
                  </a>
                </li>
                <li>
                  <a
                    href="javsscript:void(0);"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="javsscript:void(0);"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="javsscript:void(0);"
                    class="text-white hover:text-white cursor-pointer"
                  >
                    Terms of Exchange
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 lg:mt-0 mt-[30px]">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-5">
                Follow Us
              </h2>
              <div class="grid  xl:grid-cols-6  lg:grid-cols-5 md:grid-cols-5 grid-cols-4 mt-3 gap-2">
                <a href="" class="mb-2 mx-auto">
                  <div class="border border-[#952dc0] rounded-full w-[45px] h-[45px] flex items-center justify-center p-5">
                    <i class="fab fa-instagram text-white"></i>
                  </div>
                </a>
                <a href="" class="mb-2 mx-auto">
                  <div class="border border-[#952dc0] rounded-full w-[45px] h-[45px] flex items-center justify-center p-5">
                    <i class="fab fa-twitter"></i>
                  </div>
                </a>
                <a href="" class="mb-2 mx-auto">
                  <div class="border border-[#952dc0] rounded-full w-[45px] h-[45px] flex items-center justify-center p-5">
                    <i class="fab fa-facebook"></i>
                  </div>
                </a>
                <a href="" class="mb-2 mx-auto">
                  <div class="border border-[#952dc0] rounded-full w-[45px] h-[45px] flex items-center justify-center p-5">
                    <i class="fab fa-discord"></i>
                  </div>
                </a>
                <a href="" class="mb-2 mx-auto">
                  <div class="border border-[#952dc0] rounded-full w-[45px] h-[45px] flex items-center justify-center p-5">
                    <i class="fab fa-telegram"></i>
                  </div>
                </a>
                <a href="" class="mb-2 mx-auto">
                  <div class="border border-[#952dc0] rounded-full w-[45px] h-[45px] flex items-center justify-center p5">
                    <i class="fab fa-linkedin"></i>
                  </div>
                </a>
              </div>
              <div class="flex justify-center">
                <a
                  href=""
                  download
                  class="text-white border border-[#952dc0] rounded-full px-6 py-2 mt-8 inline-block"
                >
                  Download Whitepaper
                </a>
              </div>
            </div>
          </div>
          <p class="text-center text-white pt-[50px]">
            ©2023 BSECA. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
