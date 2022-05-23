import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [jobData, setJobData] = useState({
    type: "none",
  });
  const calculate = (data) => {
    setJobData(data);
  };

  return (
    <section className="form">
      <Form sendData={calculate} />
      <Table data={jobData} />
    </section>
  );
}

export default App;
