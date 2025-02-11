import React, { useState, useEffect } from "react";
import Team from "../Components/Team";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState(null);
  return (
    <>
      <section class="bg-[#040347] text-white lg:pt-[100px] lg:pb-[50px] py-[50px]">
        <div class="max-w-[1300px] mx-auto p-5 pt-[4.5rem]">
          <div class="flex lg:flex-row gap-[80px] flex-col">
            <div class="flex-1">
              <div>
                <h1 class="lg:text-[2.5rem] font-bold text-[1.8rem] pr-7">
                  The Most Securitized & Convenient Wallet To Store Cryptos &
                  NFT's
                </h1>
                <p class="lg:text-[18px]  text-[16px] mt-7 pr-7">
                  Buying cryptos doesn’t have to be hurtful. With BSECA, you
                  will experience a pain-free transaction as we keep the process
                  is simple. Safeguard your wallet and coins while paying the
                  lowest fees ever.
                </p>
                <div class="flex mt-3 md:flex-row flex-col lg:gap-2 gap-5 mt-[20px]">
                  {/* <a href=""
                                        class="px-6 button-g py-2 rounded-[15px] min-w-[150px] text-center  bg-gradient-to-r from-[#a42e9a] to-[#5951f6]">Claim
                                        Airdrop</a> */}
                  <a
                    href=""
                    class="px-6 button-g py-2 rounded-[15px] min-w-[300px]  text-center bg-gradient-to-r from-[#a42e9a] to-[#5951f6]"
                  >
                    Whitepaper
                  </a>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <img
                class="w-full h-[auto] "
                src={process.env.PUBLIC_URL + "assets/banner.gif"}
                width="100%"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-[#040347] text-white ">
        <div class="max-w-[1200px] mx-auto p-5">
          <div class="grid lg:grid-cols-4 grid-cols-2">
            <div class="text-center lg:mb-0 mb-[50px]">
              <span class="bg-[#5964da] w-[80px] h-[80px] flex justify-center items-center mx-auto mb-3 inline-block px-[20px] py-[20px] rounded-full">
                <i class="fas text-[30px] font-bold text-[#09090a] fa-chart-line"></i>
              </span>
              <p class="text-[15px] mb-3">Wallet</p>
              <p>Crypto Wallet</p>
            </div>
            <div class="text-center lg:mb-0 mb-[50px]">
              <span class="bg-[#5964da] w-[80px] h-[80px] flex justify-center items-center mx-auto mb-3 inline-block px-[20px] py-[20px] rounded-full">
                <i class="fas text-[30px] font-bold text-[#09090a] fa-user"></i>
              </span>
              <p class="text-[15px] mb-3">Exchange</p>
              <p>Built In Exchange</p>
            </div>
            <div class="text-center lg:mb-0 mb-[50px]">
              <span class="bg-[#5964da] w-[80px] h-[80px] flex justify-center items-center mx-auto mb-3 inline-block px-[20px] py-[20px] rounded-full">
                <i class="fas text-[30px] font-bold text-[#09090a] fa-globe"></i>
              </span>
              <p class="text-[15px] mb-3">Staking</p>
              <p>Stake & Earn</p>
            </div>
            <div class="text-center lg:mb-0 mb-[50px]">
              <span class="bg-[#5964da] w-[80px] h-[80px] flex justify-center items-center mx-auto mb-3 inline-block px-[20px] py-[20px] rounded-full">
                <i class="fas text-[30px] font-bold text-[#09090a] fa-credit-card"></i>
              </span>
              <p class="text-[15px] mb-3">Cards</p>
              <p>BSECA Master Cards</p>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-[#040347] text-white lg:py-[50px] pb-[50px]">
        <div class="max-w-[1200px] mx-auto p-5">
          <div class="flex lg:flex-row flex-col lg:gap-[150px] gap-[50px]">
            <div class="flex-1 flex justify-center items-center ">
              <img src="assets/banner-2.png" class=" w-full h-[auto] ball" />
            </div>
            <div class="flex-1">
              {/* <div className="">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="md:w-[30rem] w-full border rounded-lg shadow-lg relative flex flex-col w-full bg-[#000] outline-none focus:outline-none popmodel border-2 border-[#5CAAFF]">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-[#5CAAFF] rounded-t bg-[#040347]">
                                            <h3 className="text-3xl font-semibold text-white">
                                                Buy Token
                                            </h3>
                                            <button
                                                className="bg-transparent border-0 text-black float-right"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                                                    x
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <div className=" shadow-md rounded px-8 pt-6 pb-8 w-full">
                                                <label className="block text-wh text-sm font-bold mb-1 text-left mb-5">
                                                    Amount
                                                </label>
                                                <div className="flex gap-2 items-center ">
                                                    <input
                                                        type="number"
                                                        value={number}
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        disabled={isApprove}
                                                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                                    />
                                                    <span className="font-bold ">USDT</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-white border-2 border-[#5CAAFF]  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"

                                            onClick={isApprove ? Buy : Approve}
                                            >
                                                Approve
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

              <div>
                <h1 class="lg:text-[2.5rem] font-bold text-[2rem] pr-7">
                  Why Choose HCISS?
                </h1>
                <p class="lg:text-[18px]  text-[16px] mt-4 pr-7">
                  Health Blockchain Security Services is a Web 3 SECaaS that
                  specializes in the Blockchain Security space. HCISS provides
                  cybersecurity analytic solution services using its Chainlink
                  Decentralized Oracle Node Network called BSECAlink. HCISS was
                  founded with a vision to uplift trust and security throughout
                  the digital spectrum and with that, a group of technical and
                  marketing teams has been established in the USA, Africa and
                  Asia.
                </p>

                <a
                  href=""
                  onClick={() => setShowModal(false)}
                  class="buytoken px-6 py-2 text-white rounded-[15px] lg:min-w-[300px] min-w-[250px] text-center py-3 inline-block mt-[30px] px-[40px]  bg-gradient-to-r from-[#a42e9a] to-[#5951f6]"
                >
                  Buy Token
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lg:py-[100px] py-[50px]">
        <div class="max-w-[1300px] mx-auto p-5">
          <h3 class="lg:text-[25px] text-black text-[22px]  mb-[50px] text-center font-bold">
            What is BSECAlink
          </h3>
          <div class="grid lg:grid-cols-4 lg:gap-[80px] gap-[30px] grid-cols-1">
            <div class="text-center">
              <div class="bg-[#313a82] scale-100 hover:scale-110 hover:bg-[#0E34F0] cursor-pointer ease-in duration-500 text-white px-6 pt-8 pb-3 custom-shadow rounded-[20px] h-full md:w-full h-[22rem]">
                <img
                  src="assets/cybersecurity.webp"
                  class="h-[60px] mb-1 inline-block mx-auto"
                />
                <p class="mb-4 text-[20px]">Account Security</p>
                <p class="mb-4 text-[15px] flex text-center  justify-center">
                  Enhance your smart contract’s security by integrating it with
                  two-factor authorization. We enable your smart contracts with
                  an added layer of security to prevent unauthorized
                  transactions.
                </p>
              </div>
            </div>
            <div class="text-center">
              <div class="bg-[#313a82] scale-100 hover:scale-110 hover:bg-[#0E34F0] cursor-pointer ease-in duration-500 text-white px-6 pt-8 pb-3 custom-shadow rounded-[20px] h-full md:w-full h-[22rem]">
                <img
                  src="assets/smartcontract.webp"
                  class="h-[60px] mb-1 inline-block mx-auto"
                />
                <p class="mb-1 text-[20px]">
                  Smart Contract Automation and Audit Results
                </p>
                <p class="mb-2 text-[15px]">
                  Streamline user experience and decrease developer downtime by
                  automating your smart contracts with BSECAlink. Increase
                  security and peace of mind through our on-chain audit results.
                </p>
              </div>
            </div>
            <div class="text-center">
              <div class="bg-[#313a82] scale-100 hover:scale-110 hover:bg-[#0E34F0] cursor-pointer ease-in duration-500 text-white px-6 pt-8 pb-3 cutom-shadow rounded-[20px] h-full md:w-full h-[22rem]">
                <img
                  src="assets/NFTs.webp"
                  class="h-[60px] mb-1 inline-block mx-auto"
                />
                <p class="mb-3 text-[20px]">NFTs, Gaming, and Randomness</p>
                <p class="mb-4 text-[15px]">
                  Establish trust in your metaverse or NFT gaming project
                  through randomness. We make sure that your application remains
                  truly random, secure, and tamper-proof.
                </p>
              </div>
            </div>

            <div class="text-center">
              <div class="bg-[#313a82] scale-100 hover:scale-110 hover:bg-[#0E34F0] cursor-pointer ease-in duration-500 text-white px-6 pt-8 pb-3 cutom-shadow rounded-[20px] h-full md:w-full h-[22rem]">
                <img
                  src="assets/graph.webp"
                  class="h-[60px] mb-1 inline-block mx-auto"
                />
                <p class="mb-4 text-[20px]">
                  Graph Database Smart Contract Integration (Neo4J)
                </p>
                <p class="mb-4 text-[15px]">
                  Take your efficiency to the next level by integrating a graph
                  database into your smart contracts. BSECAlink is your link
                  between enterprise-grade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bg-[#040347] text-white pt-[90px] lg:pb-[70px]"
        id="value"
      >
        <div class="max-w-[900px] mx-auto p-5">
          <h4 class="text-white lg:text-[35px] text-[22px] text-center lg:mb-[50px] mb-[30px]">
            Our Core Values
          </h4>
          <div class="flex lg:flex-row flex-col py-[50px] items-center lg:gap-[150px] gap-[50px]">
            <div class="flex-1">
              <h1 class="lg:text-[2.5rem] lg:text-left text-center uppercase mb-[50px] font-bold text-[2rem] pr-7">
                OUR VISION
              </h1>
              <p class="lg:text-[18px] lg:text-left text-center  text-[16px] mt-4 lg:pr-7">
                BSECA has a vision to simplify fintech, by allowing Crypto to
                Fiat (BSA) transactions done instantaneously and with ease. We
                envision to give bank like features to people without bank
                access.
              </p>
            </div>
            <div class="flex-1">
              <img src="assets/rainbow.gif" class="lg:h-[300px] h-[250px]" />
            </div>
          </div>
          <div class="flex lg:flex-row flex-col items-center py-[50px] lg:gap-[150px] gap-[50px]">
            <div class="flex-1 lg:order-1 order-2">
              <img src="assets/mission1.gif" class="h-[300px]" />
            </div>
            <div class="flex-1 lg:order-2 order-1">
              <h1 class="lg:text-[2.5rem] lg:text-left text-center uppercase mb-[50px] font-bold text-[2rem] pr-7">
                OUR MISSION
              </h1>
              <p class="lg:text-[18px] lg:text-left text-center  text-[16px] mt-4 lg:pr-7">
                BSECA mission is to offer simple, transparent & fast
                transactions within an ecosystem that's created to give people
                the power to move digital value through traditional or crypto
                securely.
              </p>
            </div>
          </div>
          <div class="flex lg:flex-row items-center flex-col pt-[65px] lg:gap-[150px] gap-[50px]">
            <div class="flex-1  ">
              <h1 class="lg:text-[2.2rem]  lg:text-left text-center mb-[50px]  text-[2rem] pr-7">
                Inclusivity
              </h1>
              <p class="lg:text-[18px] lg:text-left text-center text-[16px] mt-4 lg:pr-7">
                At BSECA we put inclusivity at the center of our purpose.
              </p>
            </div>
            <div class="flex-1   ">
              <img src="assets/value.gif" class="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      {/* <section class="bg-[#040347] text-white pt-[30px] lg:pb-[50px]" id="team">
                <div className='max-w-[900px] mx-auto p-5'>
                    <Team />
                </div>
            </section> */}
      <section
        class="bg-[#040347] text-white pt-[6.9rem] lg:pb-[50px]"
        id="tokenomics"
      >
        <h1 className="flex justify-center m-auto text-3xl font-base mb-5 ">
          Tokenomics
        </h1>
        <div className="flex justify-center">
          <div className="w-[80rem] flex justify-center">
            <img
              src={process.env.PUBLIC_URL + "assets/chart.svg"}
              width="100%"
            ></img>
          </div>
        </div>
      </section>
      <section
        class="bg-[#040347] text-white pt-[6.9rem] lg:pb-[50px]"
        id="roadmap"
      >
        <h1 className="flex justify-center m-auto text-3xl font-base mb-5 ">
          Roadmap
        </h1>
        <div className="flex justify-center">
          <div className="w-[80rem] flex justify-center">
            <img
              src={process.env.PUBLIC_URL + "assets/roadmap.svg"}
              width="100%"
            ></img>
          </div>
        </div>
      </section>
      <section class="bg-[#040347] text-white pt-[30px] pb-[50px]">
        <div class="max-w-[1700px] mx-auto p-5">
          <h4 class="text-white lg:text-[35px] text-[22px] text-center lg:mb-[120px] mb-[60px] mb-[30px]">
            See Us At
          </h4>
          <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-6 sm:grid-cols-3 ">
            <div>
              <img src="assets/slide_1.png" class="w-[150px] mx-auto" />
            </div>
            <div>
              <img src="assets/slide_2.png" class="w-[150px] mx-auto" />
            </div>
            <div>
              <img src="assets/slide_3.png" class="w-[150px] mx-auto" />
            </div>
            <div>
              <img src="assets/slide_4.png" class="w-[150px] mx-auto" />
            </div>
            <div>
              <img src="assets/slide_5.png" class="w-[150px] mx-auto" />
            </div>
            <div>
              <img src="assets/slide_6.png" class="w-[150px] mx-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-[#040347] text-white md:pt-[30px] pt-0 md:pb-[50px] pb-[20px]">
        <div className=''>
            <img src="assets/phase.svg" class="w-full h-auto lg:block hidden">
            <img src="assets/mobile-phase.svg" class="w-full h-auto lg:hidden block">
        </div>
    </section> */}
    </>
  );
};

export default Home;
