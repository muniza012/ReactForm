import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "../types/formTypes";
type SecStepProp = {
  setBtnState: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<FormValues>>;
  data: FormValues;
};

function SecStepForm({ setBtnState, setData, data }: SecStepProp) {
  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => (
      {
        ...prev,
        contact:e.target.value
      }
    ))
  
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-gray-200 to-blue-500">
      <div className="form-1 flex flex-col w-[300px]  p-5 rounded-2xl bg-gray-200 gap-2  ">
        <label className="font-medium text-gray-800" htmlFor="contact">
          Contact:
        </label>
        <input
          className=" border border-gray-500 rounded bg-amber-50 outline-none"
          type="number"
          name="contact"
          id="contact"
          value={data.contact}
          onChange={handleContact}
        />

        <label className="font-medium text-gray-800" htmlFor="fatherName">
          Email:
        </label>
        <input
          className=" border border-gray-500 rounded bg-amber-50 outline-none"
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={(e)=>setData(prev=>({...prev,email:e.target.value}))}
        />
        <div className="btns flex justify-between items-center">
          <button
            onClick={() => setBtnState((prev) => prev - 1)}
            className="inline-block bg-blue-500 rounded w-[80px]  text-white mt-2 font-medium py-1"
          >
            Previous
          </button>
          <button
            onClick={() => setBtnState((prev) => prev + 1)}
            className="inline-block bg-blue-500 rounded w-[80px]  text-white mt-2 font-medium py-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecStepForm;
