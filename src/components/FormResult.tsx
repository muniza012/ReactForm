import React from "react";
import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "../types/formTypes";

type FormResultProps = {
  data: FormValues;
  setData: Dispatch<SetStateAction<FormValues>>;

  setBtnState: Dispatch<SetStateAction<number>>;
}

function FormResult({ data, setBtnState, setData }: FormResultProps) {
  function handleClick() {
    setBtnState(1);
    setData({
      fullName: "",
      fatherName: "",
      contact: "",
      email: "",
      address: "",
    });
  }
  return(
  <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-gray-200 to-blue-500">
    <div className="flex flex-col w-[300px]  p-5 rounded-2xl bg-gray-200 gap-2  ">
      <p>FullName:{data.fullName}</p>
      <p>Father Name:{data.fatherName}</p>
      <p>Email:{data.email}</p>
      <p>Contact:{data.contact}</p>
      <p>Address:{data.address}</p>
      <button
          onClick={handleClick}
        className="inline-block bg-blue-500 rounded w-[80px] ms-auto text-white mt-2 font-medium py-1"
      >
        OK
      </button>
    </div>
    </div>
  )
}

export default FormResult;
