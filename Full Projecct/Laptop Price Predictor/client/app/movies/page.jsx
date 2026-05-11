"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../Utils";

const Movies = () => {
  const [exp, setExp] = useState();
  const [options, setOptions] = useState();
  const [salary, setSalary] = useState();
  const [selected, setSelected] = useState();

  const getSalary = (selected) => {
    if (selected) {
      axios
        .post(`${BASE_URL}/movie_predict?movie=${selected}`)
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

  const getMovie = () => {
    axios.get(`${BASE_URL}/get_movies?movie=${exp}`).then((res) => {
      setOptions(res.data);
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
      <Toaster />
      <h1 className="text-3xl font-semibold mb-6">Movies Recommendation</h1>
      <div>
        <p className="mb-1">Movie Name</p>
        <div className="flex items-start">
          <input
            type="text"
            className="input px-4"
            placeholder="Your favorite Movie Name"
            value={exp}
            onChange={(e) => {
              setSalary("");
              setExp(e.target.value);
              setOptions([]);
            }}
          />
          <button
            onClick={(e) => {
              getMovie();
            }}
            className="bg-white px-3 font-semibold text-black py-1 rounded-lg border border-transparent transition-all hover:border-white hover:text-white hover:bg-transparent ml-4"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-[28vw] max-h-[30vh] overflow-y-auto mx-auto flex items-center justify-center flex-wrap">
        {options &&
          options.map((e, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  setSelected(e);
                  getSalary(e);
                  setExp("");
                  setOptions([]);
                }}
                className="px-4 border py-1 rounded-md mx-1.5 my-1 cursor-pointer hover:text-gray-200 hover:border-gray-200"
              >
                {e}
              </p>
            );
          })}
      </div>
      {salary && (
        <div className="text-lg mt-2">
          <p className="text-gray-300">
            Movies simillar to{" "}
            <span className="font-bold text-white">{selected}</span> are:{" "}
          </p>
          <div className="">
            {salary?.map((e, i) => {
              return (
                <li
                  key={i}
                  className="text-start hover:underline cursor-pointer"
                  onClick={() => {
                    window.open(e?.wiki_link);
                  }}
                >
                  {e?.title}
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
