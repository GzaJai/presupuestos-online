import React from "react";
import { useRef } from "react";

const ClientInfoForm = ({ setData }) => {
  const clientCuitRef = useRef(null);
  const clientNameRef = useRef(null);
  const clientIvaRef = useRef(null);
  const clientAddressRef = useRef(null);

  const handleOnChange = () => {
    const clientData = {
      cuit: clientCuitRef.current.value,
      name: clientNameRef.current.value,
      iva: clientIvaRef.current.value,
      address: clientAddressRef.current.value,
    };

    setData(clientData);
  };

  return (
    <div className="w-1/2 mx-auto p-5 pb-10 bg-blue-400 rounded-lg flex flex-col text-center gap-4 font-semibold text-lg">
      <label htmlFor="client-cuit" className="text-lg font-semibold">
        CUIT del cliente:
      </label>
      <input
        ref={clientCuitRef}
        className="input-center flex-1 p-2 rounded"
        type="number"
        name="client-cuit"
        placeholder="CUIT"
        onChange={handleOnChange}
      />

      <label htmlFor="client-name" className="text-lg font-semibold">
        Nombre / Razon Social:
      </label>
      <input
        ref={clientNameRef}
        className="input-center flex-1 p-2 rounded"
        type="text"
        name="client-name"
        placeholder="Nombre / Razon Social"
        onChange={handleOnChange}
      />

      <label htmlFor="client-iva" className="text-lg font-semibold">
        Condición frente al IVA:
      </label>
      <select
        id="iva-conditions"
        ref={clientIvaRef}
        className="text-center flex-1 p-2 rounded"
        name="client-iva"
        placeholder="Condición"
        onChange={handleOnChange}
      >
        <option value="Consumidor Final">Consumidor Final</option>
        <option value="Exento">Exento</option>
        <option value="Responsable Inscripto">Responsable Inscripto</option>
      </select>

      <label htmlFor="client-addres" className="text-lg font-semibold">
        Domicilio del cliente:
      </label>
      <input
        ref={clientAddressRef}
        className="input-center flex-1 p-2 rounded"
        type="text"
        name="client-addres"
        placeholder="Domicilio"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default ClientInfoForm;
