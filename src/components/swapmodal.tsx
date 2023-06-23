import React, { useEffect, useRef } from "react";

interface SwapmodalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Swapmodal = ({ showModal, setShowModal }: SwapmodalProps) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showModal &&
        modalRef.current &&
        !(modalRef.current as Node).contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="vfm__content vfm--outline-none flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
              ref={modalRef}
            >
              <div className="text-center text-xl text-white">Swap</div>
              <div className="flex flex-col space-y-4 break-all">
                <iframe
                  id="simpleswap-frame"
                  name="SimpleSwap Widget"
                  width="300px"
                  height="392px"
                  src="https://simpleswap.io/widget/f714cdd9-8287-4992-ae96-76cf3510e70c"
                ></iframe>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Swapmodal;
