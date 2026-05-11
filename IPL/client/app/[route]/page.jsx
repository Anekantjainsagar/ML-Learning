"use client";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import { BASE_URL } from "../Utils";
import Image from "next/image";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const Route = ({ params }) => {
  let route = params?.route;
  const {
    overall_analysis,
    default_image,
    loading,
    setSelectedPlayer,
    setClickedTeam,
  } = useContext(Context);
  const [show, setShow] = useState(1);
  const [images, setImages] = useState([]);
  const history = useRouter();

  let temp = [
    {
      span: "Runs",
      title: "Most Runs",
      route: "/batting",
      target: "batter",
      value: "batsman_run",
    },
    {
      title: "Biggest Score",
      span: "Runs",
      target: "batter",
      value: "batsman_run",
      route: "/biggest_score",
    },
    {
      title: "Most Wickets",
      span: "Wickets",
      route: "/bowling",
      target: "bowler",
      value: "isWicketDelivery",
    },
    {
      title: "Biggest Wickets",
      span: "Wickets",
      route: "/most_wickets",
      target: "bowler",
      value: "isWicketDelivery",
    },
    {
      title: "Most Fours",
      span: "Fours",
      route: "/fours",
      target: "batter",
      value: "batsman_run",
    },
    {
      title: "Most Sixes",
      span: "Sixes",
      route: "/sixes",
      target: "batter",
      value: "batsman_run",
    },
    {
      title: "Most Catches",
      span: "Catches",
      route: "/catches",
      target: "fielders_involved",
      value: "isWicketDelivery",
    },
    {
      title: "Most Dot Balls",
      target: "bowler",
      value: "batsman_run",
      span: "Balls",
      route: "/dots",
    },
  ];

  useEffect(() => {
    if (overall_analysis && overall_analysis[route]?.length > 0) {
      setImages([]);
      const tempo = [];
      const fetchDetails = async () => {
        for (
          let i = 0;
          i < overall_analysis[route]?.slice(0, show * 10).length;
          i++
        ) {
          try {
            const response = await axios.get(
              `${BASE_URL}/get_img?player=${
                overall_analysis[route][i][
                  temp?.find((e) => e?.route?.includes(route))["target"]
                ]
              }`
            );
            tempo.push(response.data["images"]);
          } catch (error) {
            console.error("Error fetching movie details:", error);
          }
        }
        setImages(tempo);
      };
      fetchDetails();
    }
  }, [route, show]);

  return (
    <div className="px-5 md:mt-20 mt-24">
      {loading ? (
        <div className="flex h-[80vh] items-center justify-center">
          <InfinitySpin
            height="200"
            width="200"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4">
            {route == "batting"
              ? "Most Runs"
              : route == "biggest_score"
              ? "Most Runs Scored"
              : route == "bowling"
              ? "Most Wickets"
              : route == "most_wickets"
              ? "Most Wickets Took"
              : route == "fours"
              ? "Most Fours"
              : route == "sixes"
              ? "Most Sixes"
              : route == "catches"
              ? "Most Catches"
              : "Most Dots Balls"}
          </h1>
          {overall_analysis[route]?.slice(0, show * 10)?.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setSelectedPlayer(
                    e[temp?.find((e) => e?.route?.includes(route))["target"]]
                  );
                  setClickedTeam(true);
                  history.push("/player");
                  // get_player_analysis(team,   "All");
                }}
                className="mb-4 border border-gray-500 pl-2 pr-5 md:pr-8 py-2 rounded-full cursor-pointer hover:bg-gray-900 hover:border-white transition-all flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Image
                    src={images[i] ? images[i] : default_image}
                    alt="Image"
                    className="w-[12vw] md:w-[4vw] rounded-full aspect-square object-cover object-top"
                    width={1000}
                    height={1000}
                  />
                  <h1 className="text-xl ml-3">
                    {e[temp?.find((e) => e?.route?.includes(route))["target"]]}
                  </h1>
                </div>
                <p className="text-xl font-semibold">
                  {e[temp?.find((e) => e?.route?.includes(route))["value"]]}
                  <span className="ml-1 text-base font-normal">
                    {temp?.find((e) => e?.route?.includes(route))["span"]}
                  </span>
                </p>
              </div>
            );
          })}
          {show * 10 < overall_analysis[route].length && (
            <p
              onClick={(e) => {
                setShow(show + 1);
              }}
              className="text-center cursor-pointer pb-8 bg-black text-white underline mx-auto"
            >
              Show more...
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Route;
