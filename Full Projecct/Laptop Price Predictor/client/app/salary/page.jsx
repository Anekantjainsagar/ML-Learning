"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../Utils";

const App = () => {
  const [exp, setExp] = useState();
  const [salary, setSalary] = useState();

  const getSalary = () => {
    if (exp) {
      axios
        .post(`${BASE_URL}/salary_predict`, { value: exp })
        .then((res) => {
          setSalary(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please enter the experience value");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
      <Toaster />
      <h1 className="text-3xl font-semibold mb-6">Salary Prediction</h1>
      <input
        type="number"
        value={exp}
        onChange={(e) => {
          setExp(e.target.value);
          setSalary("");
        }}
        placeholder="Enter your work experience"
        className="input"
      />
      <button
        onClick={(e) => {
          getSalary();
        }}
        className="bg-white w-[25vw] text-lg font-semibold text-black py-1 rounded-lg border border-transparent transition-all hover:border-white hover:text-white hover:bg-transparent mt-2 mb-3"
      >
        Submit
      </button>
      {salary && (
        <p className="text-lg">
          Your predicted salary :
          <b className="ml-1">
            Rs. {new Intl.NumberFormat("en-IN").format(salary)}
          </b>
        </p>
      )}
    </div>
  );
};

export default App;
