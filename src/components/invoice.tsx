export default function Invoice() {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="text-sm">
        Copy and paste your invoice key into a secure location:
      </div>
      <div className="text-sm text-white break-all">
        293e602f2312cb00df93a28dc690db16001286d003b2de9b6fa7378eaaf73d3a314923c3f23491b6e3c0a3a1ad6934b73b4f7bbb6aa76fc2198460a3b66bf8f7
      </div>
      <div className="text-sm break-word">
        You will need it to withdraw your funds if your browser cache resets or
        using private tabs.
      </div>
      <div className="text-sm break-word">
        Type the following sentence exactly in the box below to confirm you have
        saved your private key:
      </div>
      <div className="text-sm break-word font-bold text-white">
        If I lose my private key, I will lose access to my funds
      </div>
      <input
        type="text"
        id="paymentDisclaimer"
        name="paymentDisclaimer"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-oxbt-500 focus:border-oxbt-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-oxbt-500 dark:focus:border-oxbt-500 dark:shadow-sm-light"
      />
      <button
        type="button"
        className="flex text-center justify-center items-center rounded-md w-full bg-oxbt-600 px-3.5 py-2.5 font-semibold text-black shadow-sm hover:bg-oxbt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxbt-600 disabled:opacity-50"
        disabled
      >
        {" "}
        Continue{" "}
      </button>
    </div>
  );
}
