"use client";
import React, { useContext, useEffect, useState } from "react";
import Context from "./Context/Context";
import axios from "axios";
import { BASE_URL } from "./Utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InfinitySpin } from "react-loader-spinner";

const App = () => {
  const {
    overall_analysis,
    setOverall_season,
    seasons,
    overall_season,
    loading,
  } = useContext(Context);
  const [batting, setBatting] = useState();
  const [bowling, setBowling] = useState();
  const [biggestScore, setBiggestScore] = useState();
  const [biggestWickets, setBiggestWickets] = useState();
  const [fours, setFours] = useState();
  const [sixes, setSixes] = useState();
  const [dots, setDots] = useState();
  const [catches, setCatches] = useState();

  useEffect(() => {
    if (overall_analysis?.batting) {
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.batting[0]["batter"]}`
        )
        .then((res) => {
          setBatting(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.bowling[0]["bowler"]}`
        )
        .then((res) => {
          setBowling(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.biggest_score[0]["batter"]}`
        )
        .then((res) => {
          setBiggestScore(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.most_wickets[0]["bowler"]}`
        )
        .then((res) => {
          setBiggestWickets(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.fours[0]["batter"]}`
        )
        .then((res) => {
          setFours(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.sixes[0]["batter"]}`
        )
        .then((res) => {
          setSixes(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.catches[0]["fielders_involved"]}`
        )
        .then((res) => {
          setCatches(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${overall_analysis?.dots[0]["bowler"]}`
        )
        .then((res) => {
          setDots(res.data.images);
        });
    }
  }, [overall_analysis]);

  return (
    <div className="px-5 md:mt-20 mt-28">
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
        overall_analysis?.batting && (
          <div className="px-1 md:px-2">
            <div className="flex mb-4 justify-between items-center">
              <h1 className="font-bold text-2xl">{overall_season} Season</h1>
              <select
                value={overall_season}
                className="outline-none rounded-lg border px-4 py-1 bg-black text-white"
                onChange={(e) => {
                  setBatting("");
                  setBowling("");
                  setCatches("");
                  setBiggestScore("");
                  setBiggestWickets("");
                  setDots("");
                  setFours("");
                  setSixes("");
                  setOverall_season(e.target.value);
                }}
              >
                <option value="All">All Season Analysis</option>
                {seasons?.map((e) => {
                  return (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid grid-cols-1 pb-8 md:grid-cols-4 md:px-4 gap-x-8 gap-y-7">
              {[
                {
                  name: overall_analysis?.batting[0]["batter"],
                  value: overall_analysis?.batting[0]["batsman_run"],
                  span: "Runs",
                  img: batting,
                  title: "Orange Cap",
                  route: "/batting",
                },
                {
                  title: "Purple Cap",
                  name: overall_analysis?.bowling[0]["bowler"],
                  img: bowling,
                  value: overall_analysis?.bowling[0]["isWicketDelivery"],
                  span: "Wickets",
                  route: "/bowling",
                },
                {
                  title: "Biggest Score (inning)",
                  name: overall_analysis?.biggest_score[0]["batter"],
                  img: biggestScore,
                  value: overall_analysis?.biggest_score[0]["batsman_run"],
                  span: "Runs",
                  route: "/biggest_score",
                },
                {
                  title: "Most Wickets (inning)",
                  name: overall_analysis?.most_wickets[0]["bowler"],
                  img: biggestWickets,
                  value: overall_analysis?.most_wickets[0]["isWicketDelivery"],
                  span: "Wickets",
                  route: "/most_wickets",
                },
                {
                  title: "Most Fours",
                  name: overall_analysis?.fours[0]["batter"],
                  img: fours,
                  value: overall_analysis?.fours[0]["batsman_run"] / 4,
                  span: "Fours",
                  route: "/fours",
                },
                {
                  title: "Most Sixes",
                  name: overall_analysis?.sixes[0]["batter"],
                  img: sixes,
                  value: overall_analysis?.sixes[0]["batsman_run"] / 6,
                  span: "Sixes",
                  route: "/sixes",
                },
                {
                  title: "Most Catches",
                  name: overall_analysis?.catches[0]["fielders_involved"],
                  img: catches,
                  value: overall_analysis?.catches[0]["isWicketDelivery"],
                  span: "Catches",
                  route: "/catches",
                },
                {
                  title: "Most Dot Balls",
                  name: overall_analysis?.dots[0]["bowler"],
                  img: dots,
                  value: overall_analysis?.dots[0]["batsman_run"],
                  span: "Balls",
                  route: "/dots",
                },
              ].map((e, i) => {
                return (
                  <Block
                    title={e?.title}
                    name={e?.name}
                    img={e?.img}
                    value={e?.value}
                    span={e?.span}
                    key={i}
                    route={e?.route}
                  />
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
};

const Block = ({ title, name, value, span, img, route }) => {
  const { default_image } = useContext(Context);
  const history = useRouter();

  return (
    <div
      className="overall_block cursor-pointer"
      onClick={(e) => {
        console.log(route);
        history.push(route);
      }}
    >
      <h1>{title}</h1>
      <div className="mt-4 flex items-start mx-2">
        <Image
          src={img ? img : default_image}
          alt="Batting"
          width={1000}
          height={1000}
          className="image"
        />
        <div className="ml-5">
          <h1 className="text-2xl">{name}</h1>
          <p className="text-3xl mt-2 font-bold">
            {value}
            <span>{span}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
