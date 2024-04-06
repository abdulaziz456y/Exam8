import React from "react";

export const Modal = ({  closeModal, children }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.className === "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50")
          closeModal();
      }}
    >
      <div className="bg-white rounded-lg p-8 w-96">
        <div
          className="flex justify-end text-2xl"
          onClick={() => closeModal()}
        >
          <p className="cursor-pointer">&times;</p>
        </div>
        <div className="mb-8">{children}</div>
        <div className="flex justify-evenly">
        </div>
      </div>
    </div>
  );
};
