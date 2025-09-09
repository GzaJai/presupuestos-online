import React from "react";
import { useRef } from "react";

const ClientInfoForm = ({ setData }) => {
  const clientNameRef = useRef(null);
  const clientCuitRef = useRef(null);
  const clientDniRef = useRef(null);
  const clientAddressRef = useRef(null);
  const clientCategoryRef = useRef(null);
  const clientPhoneRef = useRef(null);
  const clientEmailRef = useRef(null);

  const handleOnChange = () => {
    const clientData = {
      name: clientNameRef.current.value,
      cuit: clientCuitRef.current.value,
      dni: clientDniRef.current.value,
      address: clientAddressRef.current.value,
      category: clientCategoryRef.current.value,
      phone: clientPhoneRef.current.value,
      email: clientEmailRef.current.value
    };

    setData(clientData);
  };

  return (
      <div className="p-[2rem] mx-auto rounded-lg flex flex-col gap-3 font-semibold text-lg">
         <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-cuit" className="text-sm font-semibold">
            CUIT del cliente:
          </label>
          <input
            ref={clientCuitRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="text"
            name="client-cuit"
            placeholder="CUIT"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-name" className="text-sm font-semibold">
            Nombre / Razón Social:
          </label>
          <input
            ref={clientNameRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="text"
            name="client-name"
            placeholder="Nombre / Razón Social"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-dni" className="text-sm font-semibold">
            DNI del cliente:
          </label>
          <input
            ref={clientDniRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="text"
            name="client-dni"
            placeholder="DNI"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-address" className="text-sm font-semibold">
            Domicilio del cliente:
          </label>
          <input
            ref={clientAddressRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="text"
            name="client-address"
            placeholder="Domicilio"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-category" className="text-sm font-semibold">
            Categoría del cliente:
          </label>
          <input
            ref={clientCategoryRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="text"
            name="client-category"
            placeholder="Categoría"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-phone" className="text-sm font-semibold">
            Teléfono del cliente:
          </label>
          <input
            ref={clientPhoneRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="text"
            name="client-phone"
            placeholder="Teléfono"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="client-email" className="text-sm font-semibold">
            Email del cliente:
          </label>
          <input
            ref={clientEmailRef}
            className="text-sm text-center flex-1 rounded border-[1.2px] border-custom-gray"
            type="email"
            name="client-email"
            placeholder="Email"
            onChange={handleOnChange}
          />
        </div>
      </div>
  );
};

export default ClientInfoForm;
