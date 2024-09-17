import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur">
          <div className="relative z-50 m-auto min-h-[300px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <IoMdClose
                onClick={onClose}
                className="self-end cursor-pointer text-2xl"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          ></div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
