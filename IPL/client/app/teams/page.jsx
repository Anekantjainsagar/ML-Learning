"use client";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import axios from "axios";
import { BASE_URL } from "../Utils";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { InfinitySpin } from "react-loader-spinner";
import { IoIosArrowRoundBack } from "react-icons/io";

const Teams = () => {
  const [team, setTeam] = useState("Select");
  const [season, setSeason] = useState("Select");
  const [clickedTeam, setClickedTeam] = useState(false);
  const history = useRouter();
  const {
    teams,
    seasons,
    get_team_analysis,
    teamAnalysis,
    loading,
    teamWinners,
    teamLossers,
  } = useContext(Context);
  const [batting, setBatting] = useState();
  const [bowling, setBowling] = useState();
  const [biggestWickets, setBiggestWickets] = useState();
  const [catches, setCatches] = useState();

  useEffect(() => {
    if (teamAnalysis?.batting?.length > 1) {
      axios
        .get(`${BASE_URL}/get_img?player=${teamAnalysis?.batting[0]["batter"]}`)
        .then((res) => {
          setBatting(res.data.images);
        });
      axios
        .get(`${BASE_URL}/get_img?player=${teamAnalysis?.bowling[0]["bowler"]}`)
        .then((res) => {
          setBowling(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${teamAnalysis?.catches[0]["fielders_involved"]}`
        )
        .then((res) => {
          setCatches(res.data.images);
        });
      axios
        .get(
          `${BASE_URL}/get_img?player=${teamAnalysis?.most_wickets[0]["bowler"]}`
        )
        .then((res) => {
          setBiggestWickets(res.data.images);
        });
    }
  }, [teamAnalysis]);

  return (
    <div className="px-5 mt-20">
      {!clickedTeam ? (
        <div className="h-[80vh] flex flex-col items-center justify-center">
          <select
            value={team}
            onChange={(e) => {
              setTeam(e.target.value);
            }}
            className="text-white bg-black text-lg px-4 py-2 w-[80vw] md:w-[20vw] outline-none border rounded-lg"
          >
            <option value="Select">Select Team</option>
            {teams?.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <select
            value={season}
            className="text-white bg-black text-lg px-4 py-2 w-[80vw] md:w-[20vw] mt-4 outline-none border rounded-lg"
            onChange={(e) => {
              setSeason(e.target.value);
            }}
          >
            <option value="Select">Select Season</option>
            {seasons?.map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
          {season != "Select" && team != "Select" && (
            <button
              onClick={(e) => {
                get_team_analysis(team, season);
                setClickedTeam(true);
              }}
              className="py-1 text-black bg-white border-black hover:text-white hover:bg-black hover:border-white mt-4 w-[80vw] md:w-[20vw] border text-lg rounded-lg"
            >
              Show Analysis
            </button>
          )}
        </div>
      ) : loading ? (
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
        teamAnalysis?.batting && (
          <div className="md:px-2 md:pt-0 pt-2">
            <div className="flex items-end md:items-center justify-between mb-2">
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <IoIosArrowRoundBack
                  className="text-5xl md:mb-0 mb-3 md:text-5xl cursor-pointer mr-3"
                  onClick={(e) => {
                    setClickedTeam(false);
                  }}
                />
                <h1 className="text-2xl font-bold">{team}</h1>
              </div>
              <p className="text-lg">Season {season}</p>
            </div>
            <div className="grid grid-cols-1 md:px-2 pb-5 md:grid-cols-4 gap-x-8 gap-y-7">
              {teamAnalysis?.batting &&
                [
                  {
                    name: teamAnalysis?.batting[0]["batter"],
                    value: teamAnalysis?.batting[0]["batsman_run"],
                    span: "Runs",
                    img: batting,
                    title: "Most Runs",
                    route: "/batting",
                  },
                  {
                    title: "Most Wickets",
                    name: teamAnalysis?.bowling[0]["bowler"],
                    img: bowling,
                    value: teamAnalysis?.bowling[0]["isWicketDelivery"],
                    span: "Wickets",
                    route: "/biggest_score",
                  },
                  {
                    title: "Most Catches",
                    name: teamAnalysis?.catches[0]["fielders_involved"],
                    img: catches,
                    value: teamAnalysis?.catches[0]["isWicketDelivery"],
                    span: "Catches",
                    route: "/catches",
                  },
                  {
                    title: "Most Wickets",
                    name: teamAnalysis?.most_wickets[0]["bowler"],
                    img: biggestWickets,
                    value: teamAnalysis?.most_wickets[0]["isWicketDelivery"],
                    span: "Wickets",
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
            <div className="pb-5">
              <h1 className="text-2xl font-bold">
                Matches Won ({teamWinners?.length})
              </h1>
              <div className="grid md:grid-cols-3 md:items-start md:px-2 mt-2 gap-x-7 gap-y-5">
                {teamWinners?.map((e, i) => {
                  return (
                    <div key={i} className="border px-4 py-4 h-full rounded-lg">
                      <div className="flex items-start justify-between">
                        <h1 className="text-lg font-semibold w-5/12">
                          {e["Team"]}
                        </h1>
                        <p className="w-6/12 text-end">
                          {" "}
                          <span className="mr-1">{e["MatchNumber"]}</span>
                          Match of Season {e.Season} on
                          <span className="ml-1">
                            {new Date(e?.Date).toString().slice(4, 10)}
                          </span>
                        </p>
                      </div>
                      <div className="text-base mt-2">
                        {e?.Last == "Batter" ? (
                          <h1>
                            <b>{e?.LastMan}</b> Hitted {e?.LastRun} Runs and Won
                            the Match by {e?.Margin} {e?.WonBy} on {e["Over"]}.
                            {e["Ball"]} Overs
                          </h1>
                        ) : (
                          <h1>
                            {" "}
                            <b>{e?.LastMan}</b> Took the Last Wicket and Won the
                            Match by {e?.Margin} {e?.WonBy} on {e["Over"]}.
                            {e["Ball"]} Overs
                          </h1>
                        )}
                      </div>
                      <div>
                        <p></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pb-5">
              <h1 className="text-2xl font-bold">
                Match Lost ({teamLossers?.length})
              </h1>
              <div className="grid md:grid-cols-3 md:items-start md:px-2 mt-2 gap-x-7 gap-y-5">
                {teamLossers?.map((e, i) => {
                  return (
                    <div key={i} className="border px-4 py-4 h-full rounded-lg">
                      <div className="flex items-start justify-between">
                        <h1 className="text-lg font-semibold w-5/12">
                          {e["Team"]}
                        </h1>
                        <p className="w-6/12 text-end">
                          {" "}
                          <span className="mr-1">{e["MatchNumber"]}</span>
                          Match of Season {e.Season} on
                          <span className="ml-1">
                            {new Date(e?.Date).toString().slice(4, 10)}
                          </span>
                        </p>
                      </div>
                      <div className="text-base mt-2">
                        Lost by {e["Margin"]} {e["LossBy"]}
                      </div>
                      <div>
                        <p></p>
                      </div>
                    </div>
                  );
                })}
              </div>
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

export default Teams;
