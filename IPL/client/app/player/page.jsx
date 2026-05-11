"use client";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import axios from "axios";
import { BASE_URL } from "../Utils";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { InfinitySpin } from "react-loader-spinner";
import { IoIosArrowRoundBack } from "react-icons/io";
import Runs from "./Graphs/Runs";

const Player = () => {
  const [team, setTeam] = useState("Select");
  const [season, setSeason] = useState("All");
  const [players, setPlayers] = useState([]);
  const {
    teams,
    seasons,
    player,
    playerImg,
    loading,
    selectedPlayer,
    setSelectedPlayer,
    get_player_analysis,
    clickedTeam,
    setClickedTeam,
  } = useContext(Context);

  useEffect(() => {
    if (team != "Select") {
      axios
        .get(`${BASE_URL}/get_team_players?season=${season}&team=${team}`)
        .then((res) => {
          setPlayers(res.data["result"]);
        });
    }
  }, [season, team]);

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
            <option value="All">All Season</option>
            {seasons?.map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
          {players?.length > 0 && (
            <select
              value={selectedPlayer}
              onChange={(e) => {
                setSelectedPlayer(e.target.value);
              }}
              className="text-white bg-black text-lg px-4 py-2 mt-5 w-[80vw] md:w-[20vw] outline-none border rounded-lg"
            >
              <option value="Select">Select Player</option>
              {players
                ?.sort((a, b) => {
                  return a - b;
                })
                ?.map((e) => {
                  return (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  );
                })}
            </select>
          )}
          {team != "Select" && season && selectedPlayer != "Select" && (
            <button
              onClick={(e) => {
                get_player_analysis(team, season);
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
        player && (
          <div className="md:px-2 md:pt-0 pt-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <IoIosArrowRoundBack
                  className="text-5xl cursor-pointer mr-3"
                  onClick={(e) => {
                    setClickedTeam(false);
                  }}
                />
              </div>
              <p className="text-lg">Season {season}</p>
            </div>
            <div className="md:px-4 px-2">
              <div className="flex md:flex-row flex-col items-start">
                <Image
                  src={playerImg}
                  alt={selectedPlayer}
                  width={1000}
                  height={1000}
                  className="w-full md:w-[25vw] h-[25vh] rounded-lg border border-gray-600 object-cover object-top"
                />
                <div className="md:mt-0 mt-3 md:ml-5">
                  <h1 className="text-2xl font-semibold">{selectedPlayer}</h1>
                  <p className="text-lg font-semibold">{team}</p>
                  <li className="text-lg mt-1">
                    In a total of {player?.match_played} matches, He scored{" "}
                    {player?.runs} runs in {parseInt(player?.balls_played / 6)}.
                    {player?.balls_played -
                      parseInt(player?.balls_played / 6) * 6}{" "}
                    overs of play.
                  </li>
                  <li className="text-lg mt-0.5">
                    Achieved a total of {player?.wickets} wickets.
                  </li>
                  <li className="text-lg mt-0.5">
                    Hit a total of {player?.fours} fours and {player?.six}{" "}
                    sixes.
                  </li>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-5 mt-1">
                {player?.batting_history && (
                  <Runs
                    title="Runs Scored"
                    data={player?.batting_history.map((e) => e?.batsman_run)}
                    labels={player?.batting_history.map((e) => e?.Date)}
                    color="rgba(255,128,80, 1)"
                    border="rgba(255,128,80, 0.2)"
                  />
                )}
                {player?.bowling_history?.length > 0 && (
                  <Runs
                    title="Wickets Taken"
                    data={player?.bowling_history.map(
                      (e) => e?.isWicketDelivery
                    )}
                    labels={player?.bowling_history.map((e) => e?.Date)}
                    color="rgba(75, 192, 192, 1)"
                    border="rgba(75, 192, 192, 0.2)"
                  />
                )}
                {player?.fours_history && (
                  <Runs
                    title="Fours Hitted"
                    data={player?.fours_history.map((e) => e?.batsman_run / 4)}
                    labels={player?.fours_history.map((e) => e?.Date)}
                    color="rgba(230, 230, 250, 1)"
                    border="rgba(230, 230, 250, 0.2)"
                  />
                )}
                {player?.six_history && (
                  <Runs
                    title="Sixes Hitted"
                    data={player?.six_history.map((e) => e?.batsman_run / 6)}
                    labels={player?.six_history.map((e) => e?.Date)}
                    color="rgba(255,128,80, 1)"
                    border="rgba(255,128,80, 0.2)"
                  />
                )}
                {player?.dots?.length > 0 && (
                  <Runs
                    title="Dot Balls"
                    data={player?.dots.map((e) => e?.batsman_run)}
                    labels={player?.dots.map((e) => e?.Date)}
                    color="rgba(75, 192, 192, 1)"
                    border="rgba(75, 192, 192, 0.2)"
                  />
                )}
                {player?.catches?.length > 0 && (
                  <Runs
                    title="Catches Taken"
                    data={player?.catches.map((e) => e?.isWicketDelivery)}
                    labels={player?.catches.map((e) => e?.Date)}
                    color="rgba(230, 230, 250, 1)"
                    border="rgba(230, 230, 250, 0.2)"
                  />
                )}
                {player?.batting_history?.filter((e) => e?.batsman_run >= 50)
                  ?.length > 0 && (
                  <Runs
                    title="50 Scored"
                    data={player?.batting_history
                      ?.filter((e) => e?.batsman_run >= 50)
                      .map((e) => e?.batsman_run)}
                    labels={player?.batting_history
                      ?.filter((e) => e?.batsman_run >= 50)
                      .map((e) => e?.Date)}
                    color="rgba(255,128,80, 1)"
                    border="rgba(255,128,80, 0.2)"
                  />
                )}
                {player?.batting_history?.filter((e) => e?.batsman_run >= 100)
                  ?.length > 0 && (
                  <Runs
                    title="Century Scored"
                    data={player?.batting_history
                      ?.filter((e) => e?.batsman_run >= 100)
                      .map((e) => e?.batsman_run)}
                    labels={player?.batting_history
                      ?.filter((e) => e?.batsman_run >= 100)
                      .map((e) => e?.Date)}
                    color="rgba(75, 192, 192, 1)"
                    border="rgba(75, 192, 192, 0.2)"
                  />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Player;
