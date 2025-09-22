import React from "react";

const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-mukta">
      <div className="bg-white rounded-lg shadow-lg w-2/4 max-w-[30rem] p-[2rem]">

        <h2 className="text-xl font-bold pb-[1rem]">{title}</h2>
        <p className="">{description}</p>
        <div className="flex mt-6 mx-auto items-center justify-end gap-5">
            <button className="btn-custom-confirm bg-yui-900 p-2" onClick={onCancel}>Cancelar</button>
            <button className="btn-custom-confirm p-2" onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
