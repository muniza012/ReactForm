import { useState } from "react";
import "./App.css";
import FirstStepForm from "./components/FirstStepForm";
import SecStepForm from "./components/SecStepForm";
import ThirdStepForm from "./components/ThirdStepForm";
import type { FormValues } from "./types/formTypes";
import FormResult from "./components/FormResult";

function App() {
  const [btnState, setBtnState] = useState<number>(1);
  const [data, setData] = useState<FormValues>({
    fullName: "",
    fatherName: "",
    contact: "",
    email: "",
    address: "",
  });

  return (
    <>
      {btnState === 1 && (
        <FirstStepForm
          setBtnState={setBtnState}
          setData={setData}
          data={data}
        />
      )}
      {btnState === 2 && (
        <SecStepForm setBtnState={setBtnState} setData={setData} data={data} />
      )}
      {btnState === 3 && (
        <ThirdStepForm
          setBtnState={setBtnState}
          setData={setData}
          data={data}
        />
      )}
      {btnState === 4 && (
        <FormResult data={data} setBtnState={setBtnState} setData={setData} />
      )}
    </>
  );
}

export default App;
