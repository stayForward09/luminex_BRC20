export default function Unisat() {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="warning-section text-sm border-red-500 border rounded p-4">
        <p className="warning-text">
          {" "}
          ⚠️ Please note: After depositing funds, you need to{" "}
          <b>click the mint button to initiate the minting process.</b> It will
          not be minted automatically.{" "}
        </p>
      </div>
      <div className="flex justify-between space-x-4">
        <div className="flex flex-col pr-6">
          <div className="break-all pb-6">
            <span className="text-gray-300">BTC Deposit Address:</span>
            <br></br>
            <span>
              bc1p0s83c3n4nulxz5xt9mfsjmzxacchjk6p9m8m65us2c87djv0uvxsse5sak
            </span>
          </div>
          <div className="flex space-x-4">
            <div className="break-word">
              <span className="text-gray-300">Deposit Amount:</span>
              <br></br>
              <span>- BTC</span>
            </div>
            <div className="break-word">
              <span className="text-gray-300">Current Balance:</span>
              <br></br>
              <span>0 BTC</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <canvas
            width="130"
            height="130"
            style={{ width: "130px", height: "130px" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}
