import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "../types/formTypes";

type FirstStepProp = {
  setBtnState: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<FormValues>>;
  data: FormValues;
};

function FirstStepForm({ setBtnState, setData, data }: FirstStepProp) {
function handleAllData() {
  setBtnState(5)
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-b from-gray-200 to-blue-500">
      <div className="form-1 flex flex-col w-[300px]  p-5 rounded-2xl bg-gray-200 gap-2  ">
        <label className="font-medium text-gray-800" htmlFor="fullName">
          Full Name:{" "}
        </label>
        <input
          className=" border border-gray-500 rounded bg-amber-50 outline-none"
          type="text"
          name="fullName"
          id="fullName"
          value={data.fullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData((prev) => ({ ...prev, fullName: e.target.value }))
          }
        />

        <label className="font-medium text-gray-800" htmlFor="fatherName">
          Father Name:{" "}
        </label>
        <input
          className=" border border-gray-500 rounded bg-amber-50 outline-none"
          type="text"
          name="fatherName"
          id="fatherName"
          value={data.fatherName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData((prev) => ({ ...prev, fatherName: e.target.value }))
          }
        />
        <div className="btns flex justify-between items-center">
          <button
            onClick={handleAllData}
            className="inline-block bg-blue-500 rounded w-[100px] text-white mt-2 font-medium py-1"
          >
            See All data
          </button>
          <button
            onClick={() => setBtnState((prev) => prev + 1)}
            className="inline-block bg-blue-500 rounded w-[80px] ms-auto text-white mt-2 font-medium py-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstStepForm;
