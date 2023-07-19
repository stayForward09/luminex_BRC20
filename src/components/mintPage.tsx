import React, { useState } from "react";


export default function MintPage({setMintPageStatus} : {setMintPageStatus:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [selectMintMethod, setMethod] = useState<String>("files");
  const [feeRate, setFeeRate] = useState<number>(0);
  const [feeRatedSelected, setFeeSelected] = useState<String>("min");

  const [textContent, setTextContent] = useState<String>('');
  const [textRepeat, setTextRepeat] = useState<number>(0);
  const [fileContent, setFileContent] = useState<String>('');
  const [brcDeployTicker, setBrcDeployTicker] = useState<String>('');
  const [brcDeploySupply, setBrcDeploySupply] = useState<number>(0);
  const [brcDeployLimit, setBrcDeployLimit] = useState<number>(0);
  const [brcMintTicker, setBrcMintTicker] = useState<String>('');
  const [brcMintAmount, setBrcMintAmount] = useState<number>(0);
  const [brcMintRepeat, setBrcMintRepeat] = useState<number>(0);

  
  const handleFeeRate = (fee: number, feeSelected: String) => {
    setFeeRate(fee);
    setFeeSelected(feeSelected);
  };

  const inscribe = () => {
    // run(false);
  }

  return (
    <>
      <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 mb-6">
        <ul className="flex flex-wrap -mb-px font-medium text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                selectMintMethod == "files" &&
                "active border-b-2 border-oxbt-600"
              }`}
              onClick={() => setMethod("files")}
            >
              Files
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                selectMintMethod == "text" &&
                "active border-b-2 border-oxbt-600"
              }`}
              onClick={() => setMethod("text")}
            >
              Text
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                selectMintMethod == "brcDeploy" &&
                "active border-b-2 border-oxbt-600"
              }`}
              onClick={() => setMethod("brcDeploy")}
            >
              BRC-20 Deploy
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={`flex justify-start p-3 pl-2 text-oxbt-600 rounded-t-lg dark:text-oxbt-600 dark:border-oxbt-600 group ${
                selectMintMethod == "brcMint" &&
                "active border-b-2 border-oxbt-600"
              }`}
              onClick={() => setMethod("brcMint")}
            >
              BRC-20 Mint
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
      {selectMintMethod == "text" ? (
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex justify-between space-x-4">
            <textarea
              className="text_area w-full h-[75px] bg-[#374151] border border-gray-600 rounded-md text-white"
              placeholder=" add some text"
              value={textContent.toString()}
              onChange={(e)=>setTextContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between space-x-4">
            <span className="">Repeat</span>
            <input
              className="bg-[#374151] border border-gray-600 rounded-sm w-screen leading-7 text-white"
              id="text-repeat"
              type="text"
              value={textRepeat}
              onChange={(e)=>setTextRepeat(Number(e.target.value))}
              placeholder="e.g. 10 to mint ten times"
            />
          </div>
        </div>
      ) : selectMintMethod == "files" ? (
        <div className="flex flex-col space-y-4 mb-6">
          <input type="file" className="form border border-gray-600 text-white-600" multiple />

          <button
            className="mt-4 bg-slate-300 leading-8 rounded-sm"
            id="bytes_checker"
            type="button"
          >
            Check if file(s) are inscribed already
          </button>
        </div>
      ) : selectMintMethod == "brcDeploy" ? (
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex justify-between space-x-4">
            <label>Ticker</label>
            <input
              className="bg-[#374151] border text-white border-gray-600 rounded-sm leading-7 w-3/4"
              id="brc20-deploy-ticker"
              type="text"
              maxLength={4}
              value={brcDeployTicker.toString()}
              onChange={(e) => setBrcDeployTicker(e.target.value)}
              placeholder=" e.g. ordi"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <label>Supply</label>
            <input
              className="bg-[#374151] border border-gray-600 rounded-sm  w-3/4 leading-7 text-white"
              id="brc20-deploy-max"
              type="text"
              value={brcDeploySupply}
              onChange={(e) => setBrcDeploySupply(Number(e.target.value))}
              placeholder=" e.g. 21000000"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <label>Limit per mint</label>
            <input
              className="bg-[#374151] border border-gray-600 rounded-sm  w-3/4 leading-7 text-white"
              id="brc20-deploy-lim"
              type="text"
              value={brcDeployLimit}
              onChange={(e) => setBrcDeployLimit(Number(e.target.value))}
              placeholder=" e.g. 1000"
            />
          </div>
        </div>
      ) : selectMintMethod == "brcMint" ? (
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex justify-between space-x-4">
            <label>Ticker</label>
            <input
              className="bg-[#374151] border border-gray-600 rounded-sm leading-7 w-3/4 text-white"
              id="brc20-mint-ticker"
              type="text"
              maxLength={4}
              value={brcMintTicker.toString()}
              onChange={(e) => setBrcMintTicker(e.target.value)}
              placeholder=" e.g. ordi"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <label>Amount</label>
            <input
              className="bg-[#374151] border border-gray-600 rounded-sm  w-3/4 leading-7 text-white"
              id="brc20-mint-amount"
              type="text"
              value={brcMintAmount}
              onChange={(e) => setBrcMintAmount(Number(e.target.value))}
              placeholder=" e.g. 21000000"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <label>Repeat</label>
            <input
              className="bg-[#374151] border border-gray-600 rounded-sm  w-3/4 leading-7 text-white"
              id="brc20-mint-repeat"
              type="text"
              value={brcMintRepeat}
              onChange={(e) => setBrcMintRepeat(Number(e.target.value))}
              placeholder=" e.g. 1000"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="mb-6">
        <div className="flex w-full space-x-6">
          <div className="w-full">
            <label
              htmlFor="feerate"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Select a feerate (sats/vB)
            </label>
          </div>
        </div>
        <div className="flex justify-around  space-x-4 text-sm mt-4">
          <div className="fee minfee">
            <div
              className={`num rounded cursor-pointer w-20 text-white text-center align-middle leading-8
            ${feeRatedSelected == "min" ? "bg-slate-700" : "bg-slate-400"}`}
              onClick={() => handleFeeRate(3, "min")}
            >
              {" "}
              3{" "}
            </div>
            <div className="name  text-center">Min</div>
          </div>
          <div className="fee midfee">
            <div
              className={`num rounded cursor-pointer w-20 text-white text-center align-middle leading-8
            ${feeRatedSelected == "mid" ? "bg-slate-700" : "bg-slate-400"}`}
              onClick={() => handleFeeRate(6, "mid")}
            >
              {" "}
              6{" "}
            </div>
            <div className="name text-center">Mid</div>
          </div>
          <div className="fee maxfee">
            <div
              className={`num rounded cursor-pointer w-20 text-white text-center align-middle leading-8
            ${feeRatedSelected == "max" ? "bg-slate-700" : "bg-slate-400"}`}
              onClick={() => handleFeeRate(10, "max")}
            >
              {" "}
              10{" "}
            </div>
            <div className="name text-center">Max</div>
          </div>
        </div>
        <div className="flex text-sm mt-4">
          <div className="mt-1" id="sliderange">
            <label id="sats_range" className="font-medium text-[16px]">
              sats/vB: <span id="sats_per_byte">{feeRate}</span>
            </label>
          </div>
        </div>
        <div className="flex text-sm mt-2">
          <input
            className="form-range w-screen text-white"
            id="sats_range"
            type="range"
            min="1"
            max="500"
            onChange={(e) => setFeeRate(Number(e.target.value))}
            value={feeRate}
          />
        </div>
        <div className="flex text-sm mt-6">
          <button
            type="button"
            className="flex text-center justify-center bg-yellow-600 text-white items-center rounded-md w-full bg-oxbt-600 px-3.5 py-2.5 font-semibold shadow-sm hover:bg-oxbt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxbt-600 disabled:opacity-50"
            onClick={() => setMintPageStatus(false)}
          >
            Reset Wallet Address
          </button>
        </div>
        <div className="flex text-sm mt-1">
          <button
            type="button"
            className="flex text-center justify-center bg-yellow-600 text-white items-center rounded-md w-full bg-oxbt-600 px-3.5 py-2.5 font-semibold shadow-sm hover:bg-oxbt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxbt-600 disabled:opacity-50"
            onClick={() => inscribe()}
          >
            Inscribe
          </button>
        </div>
      </div>
    </>
  );
}
