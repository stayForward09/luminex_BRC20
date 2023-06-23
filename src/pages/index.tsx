import React, { useState } from "react";
import { Inter } from "next/font/google";
import Unisat from "@/components/unisat";
import Invoice from "@/components/invoice";
import Xverse from "@/components/xverse";
import Swapmodal from "@/components/swapmodal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectTab, setSelectTab] = useState("unisat");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if(showModal == false) setShowModal(true)
    else setShowModal(false)
  }
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-4/5 xl:w-[70%] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start md:pr-0 leading-8 md:mt-14 -mt-14">
          <div className="flex justify-center items-center">
            <img
              src="/logomini-no-margin.png"
              className="hidden md:block mt-2 mb-10 mx-auto w-20 h-20 -pl-2 mr-8"
            />
            <img
              src="/luminexpng.png"
              className="md:hidden w-40 h-auto mx-auto lg:ml-auto"
            />
          </div>
          <div className="flex flex-row md:flex-col justify-start md:justify-end md:w-[300px] ml-0 md:ml-8">
            <div className="flex flex-column flex-wrap justify-center md:justify-start mb-8 space-y-4">
              <div className="flex flex-row md:flex-col justify-start md:justify-center lg:mt-0">
                <div className="flex flex-row items-center mt-2 pr-5 justify-start">
                  <img
                    src="/oxbt.png"
                    className="hidden md:flex h-auto mb-1 w-12 mr-2 rounded-full"
                  />
                  <h1 className="text-4xl text-oxbt-200 font-medium -top-1 text-yellow-200 text-center md:text-left">
                    $OXBT
                  </h1>
                </div>
                <div className="text-gray-500 font-semibold">
                  ▇▇▇▇ the ▇▇▇▇ on Bitcoin powered by the BRC-20 OXBT
                </div>
                <div className="flex justify-start items-center space-x-4 mt-3 mb-3 pr-3 md:pr-0">
                  <a
                    href="https://twitter.com/redactedbtcNFT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:bg-transparent hover:text-oxbt-500 cursor-pointer"
                  >
                    <svg
                      className="svg-inline--fa fa-twitter w-5 h-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        className=""
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-row space-x-4 md:space-x-0 md:flex-col items-between md:justify-start lg:mt-0">
                <h3 className="flex flex-row flex-wrap md:text-left text-center mb-1">
                  <div className="font-bold pr-2 text-gray-300">
                    Pending Supply Minted:
                  </div>
                  <div className="text-gray-500">0 (0%) </div>
                </h3>
                <h3 className="flex flex-row flex-wrap md:text-left text-center mb-1">
                  <div className="font-bold pr-2 text-gray-300">
                    Need to convert ETH/SOL to BTC?
                  </div>
                  <div className="cursor-pointer ">
                    <a href="#" className="text-yellow-400" onClick={() => toggleModal()}>Open Swap</a>
                  </div>
                </h3>
                <h3 className="flex flex-row flex-wrap md:text-left text-center mb-1">
                  <div className="font-bold pr-2 text-gray-300">
                    Need Help Minting?
                  </div>
                  <div className="text-yellow-400">
                    <a
                      href="https://medium.com/@luminexio/mint-oxbt-brc-20-on-luminex-a-step-by-step-tutorial-1cbffdfd6446"
                      target="_blank"
                    >
                      Read this
                    </a>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <Swapmodal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div className="text-gray-500">
          <div>
            <div className="flex-1 ml-0 md:ml-4 pt-15 pb-10 md:mt-14">
              <div className="mb-6">
                <label
                  htmlFor="receiver"
                  className="flex justify-between mb-2 font-medium text-gray-900 dark:text-white"
                >
                  <span>BRC20 Receiver Address</span>
                </label>
                <input
                  type="text"
                  name="receiver"
                  id="receiver"
                  placeholder="Address to receive token to"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-oxbt-500 focus:border-oxbt-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-oxbt-500 dark:focus:border-oxbt-500 dark:shadow-sm-light"
                />
              </div>
              <div className="mb-6">
                <div className="flex w-full space-x-6">
                  <div className="w-full">
                    <label
                      htmlFor="amount"
                      className="block mb-2 font-medium text-gray-900 dark:text-white"
                    >
                      Minting Amount
                    </label>
                  </div>
                </div>
                <div className="flex text-sm mt-4">
                  Currently minting: <span>0 / 0 OXBT</span>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="breakdown"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  Breakdown
                </label>
                <div className="mt-2">
                  Mint Price: <span className="font-bold">FREE</span>
                </div>
                <div className="my-1"> Network Fee: - BTC </div>
                <div className="my-1"> Service Fee: - BTC </div>
                <div className="my-1"> Total: - BTC </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Select Payment Method
                  <span className="ml-3 bg-oxbt-600 text-yellow-400">
                    (Public Mint Activated)
                  </span>
                </label>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px font-medium text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                      <a
                        href="#"
                        className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                          selectTab == "xverse" &&
                          "active border-b-2 border-oxbt-600"
                        }`}
                        onClick={() => setSelectTab("xverse")}
                      >
                        <svg
                          className="w-4 h-5 mr-2 text-oxbt-600 dark:text-oxbt-600 pt-1"
                          width="300"
                          height="300"
                          viewBox="0 0 300 300"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M298.418 293.613V239.294C298.418 237.14 297.562 235.086 296.036 233.56L64.9159 2.43899C63.3897 0.912729 61.3354 0.0568848 59.1816 0.0568848H4.86405C2.1824 0.0568848 0 2.23929 0 4.92093V55.3873C0 57.5412 0.855845 59.5951 2.3821 61.1214L85.3421 144.081C87.2391 145.979 87.2391 149.06 85.3421 150.957L1.42641 234.872C0.513507 235.785 0 237.026 0 238.31V293.613C0 296.292 2.1824 298.477 4.86405 298.477H95.6263C98.308 298.477 100.49 296.292 100.49 293.613V261.033C100.49 259.749 101.004 258.508 101.917 257.595L146.934 212.577C148.831 210.68 151.912 210.68 153.81 212.577L237.34 296.109C238.866 297.635 240.92 298.491 243.074 298.491H293.54C296.222 298.491 298.404 296.307 298.404 293.627L298.418 293.613Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M177.345 71.9901H222.805C225.5 71.9901 227.697 74.1868 227.697 76.8827V122.342C227.697 126.707 232.975 128.89 236.056 125.794L298.418 63.332C299.33 62.4189 299.846 61.1781 299.846 59.88V5.1772C299.846 2.48131 297.661 0.284639 294.952 0.284639L239.436 0.213318C238.139 0.213318 236.898 0.726824 235.97 1.63973L173.879 63.6314C170.798 66.7124 172.98 71.9901 177.331 71.9901H177.345Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Xverse
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                          selectTab == "invoice" &&
                          "active border-b-2 border-oxbt-600"
                        }`}
                        onClick={() => setSelectTab("invoice")}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 mr-2 text-oxbt-600 dark:text-oxbt-600 pt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        Invoice
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                          selectTab == "unisat" &&
                          "active border-b-2 border-oxbt-600"
                        }`}
                        onClick={() => setSelectTab("unisat")}
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-oxbt-600 dark:text-oxbt-600 pt-1"
                          fill="currentColor"
                          id="_fig_2"
                          data-name="fig 2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 115.77 147.7"
                        >
                          <defs>
                            <linearGradient
                              id="_linerGrad_5"
                              data-name="linerGrad 5"
                              x1="3379.03"
                              y1="-2102"
                              x2="3415.48"
                              y2="-2198.11"
                              gradientTransform="translate(3978.36 952.03) rotate(-134.73)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#201c1b"></stop>
                              <stop offset=".36" stopColor="#77390d"></stop>
                              <stop offset=".67" stopColor="#ea8101"></stop>
                              <stop offset="1" stopColor="#f4b852"></stop>
                            </linearGradient>
                            <linearGradient
                              id="_linerGrad_4"
                              data-name="linerGrad 4"
                              x1="3384.23"
                              y1="-2231.42"
                              x2="3330.64"
                              y2="-2131.29"
                              gradientTransform="translate(3978.36 952.03) rotate(-134.73)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#1f1d1c"></stop>
                              <stop offset=".37" stopColor="#77390d"></stop>
                              <stop offset=".67" stopColor="#ea8101"></stop>
                              <stop offset="1" stopColor="#f4fb52"></stop>
                            </linearGradient>
                            <radialGradient
                              id="_linerGrad_6"
                              data-name="linerGrad 6"
                              cx="53.01"
                              cy="45.84"
                              fx="53.01"
                              fy="45.84"
                              r="11.13"
                              gradientTransform="translate(0 0)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#f4b852"></stop>
                              <stop offset=".33" stopColor="#ea8101"></stop>
                              <stop offset=".64" stopColor="#77390d"></stop>
                              <stop offset="1" stopColor="#211c1d"></stop>
                            </radialGradient>
                          </defs>
                          <g id="_fig_1-2" data-name="fig 1">
                            <g>
                              <path
                                className="cls-2"
                                d="M81.66,13.29l30.31,30.02c2.58,2.55,3.85,5.13,3.81,7.73-.04,2.6-1.15,4.97-3.32,7.12-2.27,2.25-4.72,3.39-7.34,3.44-2.62,.04-5.22-1.22-7.8-3.77l-31-30.7c-3.52-3.49-6.92-5.96-10.19-7.41-3.27-1.45-6.71-1.68-10.31-.68-3.61,.99-7.48,3.54-11.63,7.64-5.72,5.67-8.45,10.99-8.17,15.96,.28,4.97,3.12,10.13,8.51,15.46l31.25,30.96c2.61,2.58,3.89,5.16,3.85,7.72-.04,2.57-1.16,4.94-3.37,7.13-2.2,2.18-4.63,3.32-7.27,3.41-2.64,.09-5.27-1.16-7.87-3.74l-30.31-30.02c-4.93-4.88-8.49-9.5-10.68-13.86-2.19-4.36-3.01-9.29-2.44-14.79,.51-4.71,2.02-9.27,4.54-13.69,2.51-4.42,6.11-8.94,10.78-13.57,5.56-5.51,10.87-9.73,15.93-12.67C43.99,2.04,48.88,.41,53.6,.07c4.73-.34,9.39,.6,14,2.82,4.61,2.22,9.29,5.68,14.05,10.4Z"
                              ></path>
                              <path
                                className="cls-3"
                                d="M34.11,134.42L3.81,104.4C1.23,101.84-.04,99.27,0,96.67c.04-2.6,1.15-4.97,3.32-7.12,2.27-2.25,4.72-3.39,7.34-3.44,2.62-.04,5.22,1.21,7.8,3.77l30.99,30.7c3.53,3.49,6.92,5.96,10.19,7.41,3.27,1.45,6.71,1.67,10.32,.68,3.61-.99,7.48-3.54,11.63-7.65,5.72-5.67,8.45-10.99,8.17-15.96-.28-4.97-3.12-10.13-8.51-15.47l-16.65-16.35c-2.61-2.58-3.89-5.16-3.85-7.72,.04-2.57,1.16-4.94,3.37-7.13,2.2-2.18,4.63-3.32,7.27-3.41,2.64-.09,5.27,1.16,7.87,3.74l15.7,15.41c4.93,4.88,8.49,9.5,10.68,13.86,2.19,4.36,3.01,9.29,2.44,14.79-.51,4.71-2.02,9.27-4.54,13.69-2.51,4.42-6.11,8.94-10.78,13.57-5.56,5.51-10.87,9.73-15.93,12.67-5.06,2.94-9.95,4.58-14.68,4.92-4.73,.34-9.39-.6-14-2.82-4.61-2.22-9.29-5.68-14.05-10.4Z"
                              ></path>
                              <circle
                                className="cls-1"
                                cx="53.01"
                                cy="45.83"
                                r="11.13"
                              ></circle>
                            </g>
                          </g>
                        </svg>
                        Unisat
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group"
                  >
                    Withdraw
                  </a>
                </div>
                {selectTab == "unisat" ? (
                  <Unisat />
                ) : selectTab == "invoice" ? (
                  <Invoice />
                ) : (
                  <Xverse />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
