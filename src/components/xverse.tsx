export default function Xverse() {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="flex justify-between space-x-4">
        <div className="flex flex-col pr-6">
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
      </div>
    </div>
  );
}
