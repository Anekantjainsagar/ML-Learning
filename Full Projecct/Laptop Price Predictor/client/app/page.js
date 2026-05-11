"use client";
import React, { useContext, useState } from "react";
import Context from "./Context/Context";
import axios from "axios";
import { BASE_URL } from "./Utils";

const App = () => {
  const [result, setResult] = useState();
  const [data, setData] = useState({
    Company: "Apple",
    TypeName: "Ultrabook",
    Ram: "",
    Gpu: "AMD",
    OpSys: "Windows",
    Weight: "",
    TouchScreen: "",
    IPS: "",
    PPI: "",
    Cpu: "AMD Processor",
    SSD: "",
    HDD: "",
  });
  const { laptops } = useContext(Context);

  const getPrediction = () => {
    axios
      .post(`${BASE_URL}/laptop_predict`, {
        ...data,
        Ram: parseFloat(data?.Ram),
        PPI: parseFloat(data?.PPI),
        SSD: parseFloat(data?.SSD),
        HDD: parseFloat(data?.HDD),
        TouchScreen: data?.TouchScreen ? 1 : 0,
        IPS: data?.IPS ? 1 : 0,
        Weight: parseFloat(data?.Weight),
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl mb-6 font-semibold">Laptop Price Prediction</h1>
      <div className="flex flex-col items-center h-[60vh] overflow-y-auto pr-4">
        <div>
          <p className="mb-1">Company Name</p>
          <select
            value={data?.Company}
            onChange={(e) => {
              setResult("");
              setData({ ...data, Company: e.target.value });
            }}
            className="input"
          >
            {laptops?.laptopsData?.Company.map((e) => {
              return (
                <option key={e} className="bg-black">
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-1">Type Name</p>
          <select
            value={data?.TypeName}
            onChange={(e) => {
              setResult("");
              setData({ ...data, TypeName: e.target.value });
            }}
            className="input"
          >
            {laptops?.laptopsData?.TypeName.map((e) => {
              return (
                <option key={e} className="bg-black">
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-1">Ram</p>
          <input
            type="number"
            className="input px-4"
            placeholder="Expected Ram (in GB)"
            value={data?.Ram}
            onChange={(e) => {
              setResult("");
              setData({ ...data, Ram: e.target.value });
            }}
          />
        </div>
        <div>
          <p className="mb-1">GPU</p>
          <select
            value={data?.Gpu}
            onChange={(e) => {
              setResult("");
              setData({ ...data, Gpu: e.target.value });
            }}
            className="input"
          >
            {laptops?.laptopsData?.Gpu.map((e) => {
              return (
                <option key={e} className="bg-black">
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-1">Operating System</p>
          <select
            value={data?.OpSys}
            onChange={(e) => {
              setResult("");
              setData({ ...data, OpSys: e.target.value });
            }}
            className="input"
          >
            {laptops?.laptopsData?.OpSys.map((e) => {
              return (
                <option key={e} className="bg-black">
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-1">Weight</p>
          <input
            type="number"
            className="input px-4"
            placeholder="Expected Weight (in Kg)"
            value={data?.Weight}
            onChange={(e) => {
              setData({ ...data, Weight: e.target.value });
              setResult("");
            }}
          />
        </div>
        <div className="flex items-center justify-between w-[25vw]">
          <p className="mb-1">Touch Screen</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={data?.TouchScreen}
              onChange={(e) => {
                setResult("");
                setData({ ...data, TouchScreen: !data?.TouchScreen });
              }}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex items-center justify-between w-[25vw] my-3">
          <p className="mb-1">IPS Display</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={data?.IPS}
              onChange={(e) => {
                setData({ ...data, IPS: !data?.IPS });
                setResult("");
              }}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div>
          <p className="mb-1">PPI</p>
          <input
            type="number"
            className="input px-4"
            placeholder="Expected PPI"
            value={data?.PPI}
            onChange={(e) => {
              setData({ ...data, PPI: e.target.value });
              setResult("");
            }}
          />
        </div>
        <div>
          <p className="mb-1">SSD</p>
          <input
            type="number"
            className="input px-4"
            placeholder="Expected SSD (in GB)"
            value={data?.SSD}
            onChange={(e) => {
              setData({ ...data, SSD: e.target.value });
              setResult("");
            }}
          />
        </div>
        <div>
          <p className="mb-1">HDD</p>
          <input
            type="number"
            className="input px-4"
            placeholder="Expected HDD (in GB)"
            value={data?.HDD}
            onChange={(e) => {
              setData({ ...data, HDD: e.target.value });
              setResult("");
            }}
          />
        </div>
      </div>
      <button
        onClick={(e) => {
          if (data?.Company) {
            getPrediction();
          } else {
          }
        }}
        className="bg-white w-[28vw] text-lg font-semibold text-black py-1 rounded-lg border border-transparent transition-all hover:border-white hover:text-white hover:bg-transparent mt-4 mb-3"
      >
        Submit
      </button>
      {result && (
        <p className="text-lg">
          Estimated Laptop Price :{" "}
          <b className="ml-1">
            Rs. {new Intl.NumberFormat("en-IN").format(result)}
          </b>
        </p>
      )}
    </div>
  );
};

export default App;
