"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";
import { BASE_URL } from "../Utils";

const State = (props) => {
  const [laptopsData, setLaptopsData] = useState();

  const get_laptops_data = () => {
    axios
      .get(`${BASE_URL}/get_laptops_data`)
      .then((res) => {
        setLaptopsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    get_laptops_data();
  }, []);

  return (
    <Context.Provider value={{ laptops: { get_laptops_data, laptopsData } }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
