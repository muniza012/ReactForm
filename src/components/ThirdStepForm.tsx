import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "../types/formTypes";

type ThirdStepProp = {
  setBtnState: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<FormValues>>;
  data: FormValues;
};




function ThirdStepForm({ setBtnState, setData, data }: ThirdStepProp) {
  
const handleSubmit=()=>{
  setBtnState(4)

 

}

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-gray-200 to-blue-500">
      <div className="form-1 flex flex-col w-[300px]  p-5 rounded-2xl bg-gray-200 gap-2  ">
        <label className="font-medium text-gray-800" htmlFor="address">
          Address:
        </label>
        <input
          className=" border border-gray-500 rounded bg-amber-50 outline-none"
          type="text"
          name="Address"
          id="Address"
          value={data.address}
          onChange={(e) =>
            setData((prev) => ({ ...prev, address: e.target.value }))
          }
        />

        <div className="btns flex justify-between items-center">
          <button
            onClick={() => setBtnState((prev) => prev - 1)}
            className="inline-block bg-blue-500 rounded w-[80px]  text-white mt-2 font-medium py-1"
          >
            Previous
          </button>
          <button onClick={handleSubmit} className="inline-block bg-blue-500 rounded w-[80px]  text-white mt-2 font-medium py-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdStepForm;
