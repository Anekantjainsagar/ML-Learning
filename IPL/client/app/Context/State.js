"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";
import { BASE_URL } from "../Utils";

const B2BState = (props) => {
  const [overall_analysis, setOverall_analysis] = useState({
    batting: [
      {
        batsman_run: 6634,
        batter: "V Kohli",
      },
      {
        batsman_run: 6244,
        batter: "S Dhawan",
      },
      {
        batsman_run: 5883,
        batter: "DA Warner",
      },
      {
        batsman_run: 5881,
        batter: "RG Sharma",
      },
      {
        batsman_run: 5536,
        batter: "SK Raina",
      },
      {
        batsman_run: 5181,
        batter: "AB de Villiers",
      },
      {
        batsman_run: 4997,
        batter: "CH Gayle",
      },
      {
        batsman_run: 4978,
        batter: "MS Dhoni",
      },
      {
        batsman_run: 4954,
        batter: "RV Uthappa",
      },
      {
        batsman_run: 4377,
        batter: "KD Karthik",
      },
      {
        batsman_run: 4217,
        batter: "G Gambhir",
      },
      {
        batsman_run: 4190,
        batter: "AT Rayudu",
      },
      {
        batsman_run: 4074,
        batter: "AM Rahane",
      },
      {
        batsman_run: 3895,
        batter: "KL Rahul",
      },
      {
        batsman_run: 3880,
        batter: "SR Watson",
      },
      {
        batsman_run: 3657,
        batter: "MK Pandey",
      },
      {
        batsman_run: 3526,
        batter: "SV Samson",
      },
      {
        batsman_run: 3437,
        batter: "KA Pollard",
      },
      {
        batsman_run: 3403,
        batter: "F du Plessis",
      },
      {
        batsman_run: 3222,
        batter: "YK Pathan",
      },
      {
        batsman_run: 2882,
        batter: "BB McCullum",
      },
      {
        batsman_run: 2851,
        batter: "RR Pant",
      },
      {
        batsman_run: 2848,
        batter: "PA Patel",
      },
      {
        batsman_run: 2832,
        batter: "JC Buttler",
      },
      {
        batsman_run: 2780,
        batter: "SS Iyer",
      },
      {
        batsman_run: 2767,
        batter: "Q de Kock",
      },
      {
        batsman_run: 2754,
        batter: "Yuvraj Singh",
      },
      {
        batsman_run: 2728,
        batter: "V Sehwag",
      },
      {
        batsman_run: 2644,
        batter: "SA Yadav",
      },
      {
        batsman_run: 2619,
        batter: "M Vijay",
      },
      {
        batsman_run: 2502,
        batter: "RA Jadeja",
      },
      {
        batsman_run: 2495,
        batter: "SPD Smith",
      },
      {
        batsman_run: 2489,
        batter: "SE Marsh",
      },
      {
        batsman_run: 2455,
        batter: "DA Miller",
      },
      {
        batsman_run: 2427,
        batter: "JH Kallis",
      },
      {
        batsman_run: 2427,
        batter: "WP Saha",
      },
      {
        batsman_run: 2385,
        batter: "DR Smith",
      },
      {
        batsman_run: 2335,
        batter: "MA Agarwal",
      },
      {
        batsman_run: 2334,
        batter: "SR Tendulkar",
      },
      {
        batsman_run: 2320,
        batter: "GJ Maxwell",
      },
      {
        batsman_run: 2181,
        batter: "N Rana",
      },
      {
        batsman_run: 2174,
        batter: "R Dravid",
      },
      {
        batsman_run: 2105,
        batter: "KS Williamson",
      },
      {
        batsman_run: 2092,
        batter: "AJ Finch",
      },
      {
        batsman_run: 2069,
        batter: "AC Gilchrist",
      },
      {
        batsman_run: 2039,
        batter: "AD Russell",
      },
      {
        batsman_run: 2029,
        batter: "JP Duminy",
      },
      {
        batsman_run: 1977,
        batter: "MEK Hussey",
      },
      {
        batsman_run: 1972,
        batter: "HH Pandya",
      },
      {
        batsman_run: 1900,
        batter: "Shubman Gill",
      },
      {
        batsman_run: 1870,
        batter: "Ishan Kishan",
      },
      {
        batsman_run: 1808,
        batter: "DPMD Jayawardene",
      },
      {
        batsman_run: 1798,
        batter: "RA Tripathi",
      },
      {
        batsman_run: 1695,
        batter: "MK Tiwary",
      },
      {
        batsman_run: 1692,
        batter: "Mandeep Singh",
      },
      {
        batsman_run: 1687,
        batter: "KC Sangakkara",
      },
      {
        batsman_run: 1588,
        batter: "PP Shaw",
      },
      {
        batsman_run: 1560,
        batter: "DJ Bravo",
      },
      {
        batsman_run: 1554,
        batter: "NV Ojha",
      },
      {
        batsman_run: 1496,
        batter: "KK Nair",
      },
      {
        batsman_run: 1494,
        batter: "SS Tiwary",
      },
      {
        batsman_run: 1441,
        batter: "S Badrinath",
      },
      {
        batsman_run: 1406,
        batter: "EJG Morgan",
      },
      {
        batsman_run: 1400,
        batter: "BJ Hodge",
      },
      {
        batsman_run: 1349,
        batter: "SC Ganguly",
      },
      {
        batsman_run: 1329,
        batter: "CA Lynn",
      },
      {
        batsman_run: 1326,
        batter: "KH Pandya",
      },
      {
        batsman_run: 1322,
        batter: "DJ Hussey",
      },
      {
        batsman_run: 1291,
        batter: "JM Bairstow",
      },
      {
        batsman_run: 1260,
        batter: "D Padikkal",
      },
      {
        batsman_run: 1237,
        batter: "DJ Hooda",
      },
      {
        batsman_run: 1207,
        batter: "RD Gaikwad",
      },
      {
        batsman_run: 1196,
        batter: "KM Jadhav",
      },
      {
        batsman_run: 1153,
        batter: "TM Dilshan",
      },
      {
        batsman_run: 1150,
        batter: "IK Pathan",
      },
      {
        batsman_run: 1135,
        batter: "AR Patel",
      },
      {
        batsman_run: 1107,
        batter: "ML Hayden",
      },
      {
        batsman_run: 1079,
        batter: "LMP Simmons",
      },
      {
        batsman_run: 1073,
        batter: "M Vohra",
      },
      {
        batsman_run: 1070,
        batter: "MP Stoinis",
      },
      {
        batsman_run: 1025,
        batter: "SP Narine",
      },
      {
        batsman_run: 1017,
        batter: "LRPL Taylor",
      },
      {
        batsman_run: 1001,
        batter: "KP Pietersen",
      },
      {
        batsman_run: 1000,
        batter: "MC Henriques",
      },
      {
        batsman_run: 985,
        batter: "Y Venugopal Rao",
      },
      {
        batsman_run: 975,
        batter: "JA Morkel",
      },
      {
        batsman_run: 974,
        batter: "A Symonds",
      },
      {
        batsman_run: 971,
        batter: "CL White",
      },
      {
        batsman_run: 920,
        batter: "BA Stokes",
      },
      {
        batsman_run: 912,
        batter: "N Pooran",
      },
      {
        batsman_run: 910,
        batter: "MM Ali",
      },
      {
        batsman_run: 886,
        batter: "HH Gibbs",
      },
      {
        batsman_run: 880,
        batter: "STR Binny",
      },
      {
        batsman_run: 833,
        batter: "Harbhajan Singh",
      },
      {
        batsman_run: 831,
        batter: "SO Hetmyer",
      },
      {
        batsman_run: 798,
        batter: "MS Bisla",
      },
      {
        batsman_run: 795,
        batter: "Shakib Al Hasan",
      },
      {
        batsman_run: 768,
        batter: "ST Jayasuriya",
      },
      {
        batsman_run: 739,
        batter: "GC Smith",
      },
      {
        batsman_run: 738,
        batter: "R Tewatia",
      },
    ],
    biggest_score: [
      {
        ID: 598027,
        batsman_run: 175,
        batter: "CH Gayle",
      },
      {
        ID: 335982,
        batsman_run: 158,
        batter: "BB McCullum",
      },
      {
        ID: 1304112,
        batsman_run: 140,
        batter: "Q de Kock",
      },
      {
        ID: 829795,
        batsman_run: 133,
        batter: "AB de Villiers",
      },
      {
        ID: 1216510,
        batsman_run: 132,
        batter: "KL Rahul",
      },
      {
        ID: 980987,
        batsman_run: 129,
        batter: "AB de Villiers",
      },
      {
        ID: 1136602,
        batsman_run: 128,
        batter: "RR Pant",
      },
      {
        ID: 548372,
        batsman_run: 128,
        batter: "CH Gayle",
      },
      {
        ID: 419137,
        batsman_run: 127,
        batter: "M Vijay",
      },
      {
        ID: 1082627,
        batsman_run: 126,
        batter: "DA Warner",
      },
      {
        ID: 1254085,
        batsman_run: 124,
        batter: "JC Buttler",
      },
      {
        ID: 734047,
        batsman_run: 122,
        batter: "V Sehwag",
      },
      {
        ID: 501206,
        batsman_run: 120,
        batter: "PC Valthaty",
      },
      {
        ID: 501243,
        batsman_run: 119,
        batter: "V Sehwag",
      },
      {
        ID: 1254061,
        batsman_run: 119,
        batter: "SV Samson",
      },
      {
        ID: 335990,
        batsman_run: 117,
        batter: "A Symonds",
      },
      {
        ID: 1136620,
        batsman_run: 117,
        batter: "SR Watson",
      },
      {
        ID: 829785,
        batsman_run: 117,
        batter: "CH Gayle",
      },
      {
        ID: 335983,
        batsman_run: 116,
        batter: "MEK Hussey",
      },
      {
        ID: 1304080,
        batsman_run: 116,
        batter: "JC Buttler",
      },
      {
        ID: 734049,
        batsman_run: 115,
        batter: "WP Saha",
      },
      {
        ID: 336019,
        batsman_run: 115,
        batter: "SE Marsh",
      },
      {
        ID: 392236,
        batsman_run: 114,
        batter: "MK Pandey",
      },
      {
        ID: 336018,
        batsman_run: 114,
        batter: "ST Jayasuriya",
      },
      {
        ID: 1175366,
        batsman_run: 114,
        batter: "JM Bairstow",
      },
      {
        ID: 548380,
        batsman_run: 113,
        batter: "M Vijay",
      },
      {
        ID: 980999,
        batsman_run: 113,
        batter: "V Kohli",
      },
      {
        ID: 1312198,
        batsman_run: 112,
        batter: "RM Patidar",
      },
      {
        ID: 419139,
        batsman_run: 110,
        batter: "DPMD Jayawardene",
      },
      {
        ID: 548329,
        batsman_run: 109,
        batter: "DA Warner",
      },
      {
        ID: 548363,
        batsman_run: 109,
        batter: "RG Sharma",
      },
      {
        ID: 980987,
        batsman_run: 109,
        batter: "V Kohli",
      },
      {
        ID: 335994,
        batsman_run: 109,
        batter: "AC Gilchrist",
      },
      {
        ID: 980921,
        batsman_run: 108,
        batter: "Q de Kock",
      },
      {
        ID: 980969,
        batsman_run: 108,
        batter: "V Kohli",
      },
      {
        ID: 419131,
        batsman_run: 107,
        batter: "DA Warner",
      },
      {
        ID: 501244,
        batsman_run: 107,
        batter: "CH Gayle",
      },
      {
        ID: 1216541,
        batsman_run: 107,
        batter: "BA Stokes",
      },
      {
        ID: 1216546,
        batsman_run: 106,
        batter: "S Dhawan",
      },
      {
        ID: 1312199,
        batsman_run: 106,
        batter: "JC Buttler",
      },
      {
        ID: 1136577,
        batsman_run: 106,
        batter: "SR Watson",
      },
      {
        ID: 1216527,
        batsman_run: 106,
        batter: "MA Agarwal",
      },
      {
        ID: 501260,
        batsman_run: 106,
        batter: "AC Gilchrist",
      },
      {
        ID: 392189,
        batsman_run: 105,
        batter: "AB de Villiers",
      },
      {
        ID: 1178415,
        batsman_run: 105,
        batter: "AM Rahane",
      },
      {
        ID: 1136576,
        batsman_run: 104,
        batter: "CH Gayle",
      },
      {
        ID: 1082637,
        batsman_run: 104,
        batter: "HM Amla",
      },
      {
        ID: 829811,
        batsman_run: 104,
        batter: "SR Watson",
      },
      {
        ID: 1082612,
        batsman_run: 104,
        batter: "HM Amla",
      },
      {
        ID: 1304072,
        batsman_run: 103,
        batter: "KL Rahul",
      },
      {
        ID: 1304076,
        batsman_run: 103,
        batter: "JC Buttler",
      },
      {
        ID: 548324,
        batsman_run: 103,
        batter: "AM Rahane",
      },
      {
        ID: 1304083,
        batsman_run: 103,
        batter: "KL Rahul",
      },
      {
        ID: 1082629,
        batsman_run: 103,
        batter: "BA Stokes",
      },
      {
        ID: 548321,
        batsman_run: 103,
        batter: "KP Pietersen",
      },
      {
        ID: 1175363,
        batsman_run: 102,
        batter: "SV Samson",
      },
      {
        ID: 1082599,
        batsman_run: 102,
        batter: "SV Samson",
      },
      {
        ID: 501222,
        batsman_run: 102,
        batter: "CH Gayle",
      },
      {
        ID: 980949,
        batsman_run: 101,
        batter: "SPD Smith",
      },
      {
        ID: 1216509,
        batsman_run: 101,
        batter: "S Dhawan",
      },
      {
        ID: 1254073,
        batsman_run: 101,
        batter: "D Padikkal",
      },
      {
        ID: 598026,
        batsman_run: 101,
        batter: "SR Watson",
      },
      {
        ID: 598064,
        batsman_run: 101,
        batter: "DA Miller",
      },
      {
        ID: 1254089,
        batsman_run: 101,
        batter: "RD Gaikwad",
      },
      {
        ID: 1136606,
        batsman_run: 100,
        batter: "AT Rayudu",
      },
      {
        ID: 598041,
        batsman_run: 100,
        batter: "SK Raina",
      },
      {
        ID: 734025,
        batsman_run: 100,
        batter: "LMP Simmons",
      },
      {
        ID: 980937,
        batsman_run: 100,
        batter: "V Kohli",
      },
      {
        ID: 419107,
        batsman_run: 100,
        batter: "YK Pathan",
      },
      {
        ID: 501210,
        batsman_run: 100,
        batter: "SR Tendulkar",
      },
      {
        ID: 1304055,
        batsman_run: 100,
        batter: "JC Buttler",
      },
      {
        ID: 1178410,
        batsman_run: 100,
        batter: "V Kohli",
      },
      {
        ID: 1175366,
        batsman_run: 100,
        batter: "DA Warner",
      },
      {
        ID: 829711,
        batsman_run: 100,
        batter: "BB McCullum",
      },
      {
        ID: 1178399,
        batsman_run: 100,
        batter: "KL Rahul",
      },
      {
        ID: 1304092,
        batsman_run: 99,
        batter: "RD Gaikwad",
      },
      {
        ID: 1216537,
        batsman_run: 99,
        batter: "CH Gayle",
      },
      {
        ID: 598051,
        batsman_run: 99,
        batter: "SK Raina",
      },
      {
        ID: 1216547,
        batsman_run: 99,
        batter: "Ishan Kishan",
      },
      {
        ID: 1175365,
        batsman_run: 99,
        batter: "PP Shaw",
      },
      {
        ID: 1254086,
        batsman_run: 99,
        batter: "MA Agarwal",
      },
      {
        ID: 598054,
        batsman_run: 99,
        batter: "V Kohli",
      },
      {
        ID: 1178403,
        batsman_run: 99,
        batter: "CH Gayle",
      },
      {
        ID: 598032,
        batsman_run: 98,
        batter: "SR Watson",
      },
      {
        ID: 548309,
        batsman_run: 98,
        batter: "AM Rahane",
      },
      {
        ID: 392202,
        batsman_run: 98,
        batter: "SK Raina",
      },
      {
        ID: 829705,
        batsman_run: 98,
        batter: "RG Sharma",
      },
      {
        ID: 1254094,
        batsman_run: 98,
        batter: "KL Rahul",
      },
      {
        ID: 1178401,
        batsman_run: 97,
        batter: "S Dhawan",
      },
      {
        ID: 1216542,
        batsman_run: 97,
        batter: "JM Bairstow",
      },
      {
        ID: 1082632,
        batsman_run: 97,
        batter: "RR Pant",
      },
      {
        ID: 1178418,
        batsman_run: 97,
        batter: "KD Karthik",
      },
      {
        ID: 980991,
        batsman_run: 96,
        batter: "HM Amla",
      },
      {
        ID: 1082640,
        batsman_run: 96,
        batter: "SS Iyer",
      },
      {
        ID: 1178416,
        batsman_run: 96,
        batter: "SR Watson",
      },
      {
        ID: 1304077,
        batsman_run: 96,
        batter: "F du Plessis",
      },
      {
        ID: 829713,
        batsman_run: 96,
        batter: "CH Gayle",
      },
      {
        ID: 1304062,
        batsman_run: 96,
        batter: "Shubman Gill",
      },
      {
        ID: 1178430,
        batsman_run: 96,
        batter: "F du Plessis",
      },
      {
        ID: 598024,
        batsman_run: 95,
        batter: "V Sehwag",
      },
    ],
    bowling: [
      {
        bowler: "DJ Bravo",
        isWicketDelivery: 183,
      },
      {
        bowler: "SL Malinga",
        isWicketDelivery: 170,
      },
      {
        bowler: "YS Chahal",
        isWicketDelivery: 166,
      },
      {
        bowler: "A Mishra",
        isWicketDelivery: 166,
      },
      {
        bowler: "R Ashwin",
        isWicketDelivery: 157,
      },
      {
        bowler: "PP Chawla",
        isWicketDelivery: 157,
      },
      {
        bowler: "B Kumar",
        isWicketDelivery: 154,
      },
      {
        bowler: "SP Narine",
        isWicketDelivery: 152,
      },
      {
        bowler: "Harbhajan Singh",
        isWicketDelivery: 150,
      },
      {
        bowler: "JJ Bumrah",
        isWicketDelivery: 148,
      },
      {
        bowler: "UT Yadav",
        isWicketDelivery: 135,
      },
      {
        bowler: "RA Jadeja",
        isWicketDelivery: 132,
      },
      {
        bowler: "Sandeep Sharma",
        isWicketDelivery: 114,
      },
      {
        bowler: "Rashid Khan",
        isWicketDelivery: 112,
      },
      {
        bowler: "A Nehra",
        isWicketDelivery: 106,
      },
      {
        bowler: "R Vinay Kumar",
        isWicketDelivery: 105,
      },
      {
        bowler: "Z Khan",
        isWicketDelivery: 103,
      },
      {
        bowler: "K Rabada",
        isWicketDelivery: 102,
      },
      {
        bowler: "AR Patel",
        isWicketDelivery: 101,
      },
      {
        bowler: "Mohammed Shami",
        isWicketDelivery: 99,
      },
      {
        bowler: "HV Patel",
        isWicketDelivery: 97,
      },
      {
        bowler: "DW Steyn",
        isWicketDelivery: 97,
      },
      {
        bowler: "CH Morris",
        isWicketDelivery: 96,
      },
      {
        bowler: "SR Watson",
        isWicketDelivery: 92,
      },
      {
        bowler: "TA Boult",
        isWicketDelivery: 92,
      },
      {
        bowler: "MM Sharma",
        isWicketDelivery: 92,
      },
      {
        bowler: "JD Unadkat",
        isWicketDelivery: 92,
      },
      {
        bowler: "RP Singh",
        isWicketDelivery: 90,
      },
      {
        bowler: "P Kumar",
        isWicketDelivery: 90,
      },
      {
        bowler: "AD Russell",
        isWicketDelivery: 89,
      },
      {
        bowler: "PP Ojha",
        isWicketDelivery: 89,
      },
      {
        bowler: "DS Kulkarni",
        isWicketDelivery: 86,
      },
      {
        bowler: "JA Morkel",
        isWicketDelivery: 85,
      },
      {
        bowler: "Imran Tahir",
        isWicketDelivery: 82,
      },
      {
        bowler: "SN Thakur",
        isWicketDelivery: 82,
      },
      {
        bowler: "IK Pathan",
        isWicketDelivery: 80,
      },
      {
        bowler: "M Morkel",
        isWicketDelivery: 77,
      },
      {
        bowler: "L Balaji",
        isWicketDelivery: 76,
      },
      {
        bowler: "MM Patel",
        isWicketDelivery: 74,
      },
      {
        bowler: "I Sharma",
        isWicketDelivery: 72,
      },
      {
        bowler: "MJ McClenaghan",
        isWicketDelivery: 71,
      },
      {
        bowler: "R Bhatia",
        isWicketDelivery: 71,
      },
      {
        bowler: "AB Dinda",
        isWicketDelivery: 69,
      },
      {
        bowler: "KA Pollard",
        isWicketDelivery: 69,
      },
      {
        bowler: "SK Trivedi",
        isWicketDelivery: 65,
      },
      {
        bowler: "JH Kallis",
        isWicketDelivery: 65,
      },
      {
        bowler: "M Muralitharan",
        isWicketDelivery: 64,
      },
      {
        bowler: "Shakib Al Hasan",
        isWicketDelivery: 63,
      },
      {
        bowler: "MG Johnson",
        isWicketDelivery: 62,
      },
      {
        bowler: "Kuldeep Yadav",
        isWicketDelivery: 61,
      },
      {
        bowler: "JP Faulkner",
        isWicketDelivery: 61,
      },
      {
        bowler: "KH Pandya",
        isWicketDelivery: 61,
      },
      {
        bowler: "Mohammed Siraj",
        isWicketDelivery: 60,
      },
      {
        bowler: "KV Sharma",
        isWicketDelivery: 60,
      },
      {
        bowler: "DL Chahar",
        isWicketDelivery: 59,
      },
      {
        bowler: "S Kaul",
        isWicketDelivery: 58,
      },
      {
        bowler: "RD Chahar",
        isWicketDelivery: 57,
      },
      {
        bowler: "SK Warne",
        isWicketDelivery: 57,
      },
      {
        bowler: "M Prasidh Krishna",
        isWicketDelivery: 50,
      },
      {
        bowler: "HH Pandya",
        isWicketDelivery: 50,
      },
      {
        bowler: "JO Holder",
        isWicketDelivery: 49,
      },
      {
        bowler: "S Gopal",
        isWicketDelivery: 49,
      },
      {
        bowler: "KK Ahmed",
        isWicketDelivery: 49,
      },
      {
        bowler: "Avesh Khan",
        isWicketDelivery: 48,
      },
      {
        bowler: "NM Coulter-Nile",
        isWicketDelivery: 48,
      },
      {
        bowler: "S Nadeem",
        isWicketDelivery: 48,
      },
      {
        bowler: "SB Jakati",
        isWicketDelivery: 47,
      },
      {
        bowler: "JC Archer",
        isWicketDelivery: 46,
      },
      {
        bowler: "Mustafizur Rahman",
        isWicketDelivery: 46,
      },
      {
        bowler: "TG Southee",
        isWicketDelivery: 45,
      },
      {
        bowler: "A Kumble",
        isWicketDelivery: 45,
      },
      {
        bowler: "S Aravind",
        isWicketDelivery: 45,
      },
      {
        bowler: "PJ Cummins",
        isWicketDelivery: 45,
      },
      {
        bowler: "RJ Harris",
        isWicketDelivery: 45,
      },
      {
        bowler: "VR Aaron",
        isWicketDelivery: 44,
      },
      {
        bowler: "A Nortje",
        isWicketDelivery: 43,
      },
      {
        bowler: "MC Henriques",
        isWicketDelivery: 42,
      },
      {
        bowler: "AJ Tye",
        isWicketDelivery: 42,
      },
      {
        bowler: "CV Varun",
        isWicketDelivery: 42,
      },
      {
        bowler: "YK Pathan",
        isWicketDelivery: 42,
      },
      {
        bowler: "S Sreesanth",
        isWicketDelivery: 41,
      },
      {
        bowler: "Arshdeep Singh",
        isWicketDelivery: 40,
      },
      {
        bowler: "Iqbal Abdulla",
        isWicketDelivery: 40,
      },
      {
        bowler: "R Sharma",
        isWicketDelivery: 40,
      },
      {
        bowler: "P Awana",
        isWicketDelivery: 39,
      },
      {
        bowler: "DT Christian",
        isWicketDelivery: 38,
      },
      {
        bowler: "LH Ferguson",
        isWicketDelivery: 38,
      },
      {
        bowler: "PJ Sangwan",
        isWicketDelivery: 38,
      },
      {
        bowler: "T Natarajan",
        isWicketDelivery: 38,
      },
      {
        bowler: "DE Bollinger",
        isWicketDelivery: 38,
      },
      {
        bowler: "Ravi Bishnoi",
        isWicketDelivery: 37,
      },
      {
        bowler: "MS Gony",
        isWicketDelivery: 37,
      },
      {
        bowler: "Yuvraj Singh",
        isWicketDelivery: 36,
      },
      {
        bowler: "P Negi",
        isWicketDelivery: 35,
      },
      {
        bowler: "M Ashwin",
        isWicketDelivery: 35,
      },
      {
        bowler: "MA Starc",
        isWicketDelivery: 34,
      },
      {
        bowler: "MP Stoinis",
        isWicketDelivery: 34,
      },
      {
        bowler: "Washington Sundar",
        isWicketDelivery: 33,
      },
      {
        bowler: "KK Cooper",
        isWicketDelivery: 33,
      },
      {
        bowler: "R Tewatia",
        isWicketDelivery: 33,
      },
    ],
    catches: [
      {
        fielders_involved: "MS Dhoni",
        isWicketDelivery: 135,
      },
      {
        fielders_involved: "KD Karthik",
        isWicketDelivery: 133,
      },
      {
        fielders_involved: "AB de Villiers",
        isWicketDelivery: 120,
      },
      {
        fielders_involved: "SK Raina",
        isWicketDelivery: 106,
      },
      {
        fielders_involved: "KA Pollard",
        isWicketDelivery: 97,
      },
      {
        fielders_involved: "RG Sharma",
        isWicketDelivery: 96,
      },
      {
        fielders_involved: "S Dhawan",
        isWicketDelivery: 93,
      },
      {
        fielders_involved: "V Kohli",
        isWicketDelivery: 93,
      },
      {
        fielders_involved: "RV Uthappa",
        isWicketDelivery: 92,
      },
      {
        fielders_involved: "RA Jadeja",
        isWicketDelivery: 84,
      },
      {
        fielders_involved: "WP Saha",
        isWicketDelivery: 79,
      },
      {
        fielders_involved: "MK Pandey",
        isWicketDelivery: 78,
      },
      {
        fielders_involved: "DA Warner",
        isWicketDelivery: 76,
      },
      {
        fielders_involved: "SV Samson",
        isWicketDelivery: 73,
      },
      {
        fielders_involved: "F du Plessis",
        isWicketDelivery: 71,
      },
      {
        fielders_involved: "PA Patel",
        isWicketDelivery: 69,
      },
      {
        fielders_involved: "DJ Bravo",
        isWicketDelivery: 69,
      },
      {
        fielders_involved: "Q de Kock",
        isWicketDelivery: 65,
      },
      {
        fielders_involved: "NV Ojha",
        isWicketDelivery: 65,
      },
      {
        fielders_involved: "RR Pant",
        isWicketDelivery: 64,
      },
      {
        fielders_involved: "DA Miller",
        isWicketDelivery: 64,
      },
      {
        fielders_involved: "AM Rahane",
        isWicketDelivery: 63,
      },
      {
        fielders_involved: "AT Rayudu",
        isWicketDelivery: 62,
      },
      {
        fielders_involved: "KL Rahul",
        isWicketDelivery: 59,
      },
      {
        fielders_involved: "SA Yadav",
        isWicketDelivery: 58,
      },
      {
        fielders_involved: "SPD Smith",
        isWicketDelivery: 54,
      },
      {
        fielders_involved: "HH Pandya",
        isWicketDelivery: 52,
      },
      {
        fielders_involved: "AC Gilchrist",
        isWicketDelivery: 51,
      },
      {
        fielders_involved: "AR Patel",
        isWicketDelivery: 51,
      },
      {
        fielders_involved: "MA Agarwal",
        isWicketDelivery: 51,
      },
      {
        fielders_involved: "M Vijay",
        isWicketDelivery: 48,
      },
      {
        fielders_involved: "MK Tiwary",
        isWicketDelivery: 47,
      },
      {
        fielders_involved: "KC Sangakkara",
        isWicketDelivery: 45,
      },
      {
        fielders_involved: "JC Buttler",
        isWicketDelivery: 43,
      },
      {
        fielders_involved: "DJ Hooda",
        isWicketDelivery: 42,
      },
      {
        fielders_involved: "DR Smith",
        isWicketDelivery: 41,
      },
      {
        fielders_involved: "YK Pathan",
        isWicketDelivery: 41,
      },
      {
        fielders_involved: "GJ Maxwell",
        isWicketDelivery: 40,
      },
      {
        fielders_involved: "KS Williamson",
        isWicketDelivery: 39,
      },
      {
        fielders_involved: "SS Iyer",
        isWicketDelivery: 39,
      },
      {
        fielders_involved: "SR Watson",
        isWicketDelivery: 38,
      },
      {
        fielders_involved: "BB McCullum",
        isWicketDelivery: 38,
      },
      {
        fielders_involved: "Mandeep Singh",
        isWicketDelivery: 38,
      },
      {
        fielders_involved: "Harbhajan Singh",
        isWicketDelivery: 38,
      },
      {
        fielders_involved: "R Ashwin",
        isWicketDelivery: 36,
      },
      {
        fielders_involved: "EJG Morgan",
        isWicketDelivery: 36,
      },
      {
        fielders_involved: "CH Morris",
        isWicketDelivery: 36,
      },
      {
        fielders_involved: "PP Chawla",
        isWicketDelivery: 35,
      },
      {
        fielders_involved: "V Sehwag",
        isWicketDelivery: 34,
      },
      {
        fielders_involved: "Ishan Kishan",
        isWicketDelivery: 33,
      },
      {
        fielders_involved: "DPMD Jayawardene",
        isWicketDelivery: 33,
      },
      {
        fielders_involved: "R Vinay Kumar",
        isWicketDelivery: 32,
      },
      {
        fielders_involved: "UT Yadav",
        isWicketDelivery: 32,
      },
      {
        fielders_involved: "JH Kallis",
        isWicketDelivery: 30,
      },
      {
        fielders_involved: "Shubman Gill",
        isWicketDelivery: 30,
      },
      {
        fielders_involved: "CH Gayle",
        isWicketDelivery: 30,
      },
      {
        fielders_involved: "KM Jadhav",
        isWicketDelivery: 30,
      },
      {
        fielders_involved: "KH Pandya",
        isWicketDelivery: 30,
      },
      {
        fielders_involved: "JP Duminy",
        isWicketDelivery: 30,
      },
      {
        fielders_involved: "R Parag",
        isWicketDelivery: 29,
      },
      {
        fielders_involved: "RA Tripathi",
        isWicketDelivery: 29,
      },
      {
        fielders_involved: "MC Henriques",
        isWicketDelivery: 29,
      },
      {
        fielders_involved: "AJ Finch",
        isWicketDelivery: 29,
      },
      {
        fielders_involved: "Yuvraj Singh",
        isWicketDelivery: 29,
      },
      {
        fielders_involved: "IK Pathan",
        isWicketDelivery: 28,
      },
      {
        fielders_involved: "G Gambhir",
        isWicketDelivery: 28,
      },
      {
        fielders_involved: "DT Christian",
        isWicketDelivery: 28,
      },
      {
        fielders_involved: "R Tewatia",
        isWicketDelivery: 27,
      },
      {
        fielders_involved: "V Shankar",
        isWicketDelivery: 27,
      },
      {
        fielders_involved: "RP Singh",
        isWicketDelivery: 27,
      },
      {
        fielders_involved: "Rashid Khan",
        isWicketDelivery: 26,
      },
      {
        fielders_involved: "KK Nair",
        isWicketDelivery: 26,
      },
      {
        fielders_involved: "MEK Hussey",
        isWicketDelivery: 26,
      },
      {
        fielders_involved: "SE Marsh",
        isWicketDelivery: 26,
      },
      {
        fielders_involved: "SS Tiwary",
        isWicketDelivery: 25,
      },
      {
        fielders_involved: "DJ Hussey",
        isWicketDelivery: 25,
      },
      {
        fielders_involved: "B Kumar",
        isWicketDelivery: 24,
      },
      {
        fielders_involved: "TA Boult",
        isWicketDelivery: 24,
      },
      {
        fielders_involved: "SR Tendulkar",
        isWicketDelivery: 23,
      },
      {
        fielders_involved: "R Bhatia",
        isWicketDelivery: 23,
      },
      {
        fielders_involved: "AD Russell",
        isWicketDelivery: 23,
      },
      {
        fielders_involved: "DW Steyn",
        isWicketDelivery: 22,
      },
      {
        fielders_involved: "SC Ganguly",
        isWicketDelivery: 22,
      },
      {
        fielders_involved: "BJ Hodge",
        isWicketDelivery: 22,
      },
      {
        fielders_involved: "HH Gibbs",
        isWicketDelivery: 22,
      },
      {
        fielders_involved: "CL White",
        isWicketDelivery: 22,
      },
      {
        fielders_involved: "SN Thakur",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "TM Dilshan",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "Mohammed Siraj",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "K Rabada",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "TG Southee",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "N Rana",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "BA Stokes",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "YS Chahal",
        isWicketDelivery: 21,
      },
      {
        fielders_involved: "MS Bisla",
        isWicketDelivery: 20,
      },
      {
        fielders_involved: "D Padikkal",
        isWicketDelivery: 20,
      },
      {
        fielders_involved: "Gurkeerat Singh",
        isWicketDelivery: 20,
      },
      {
        fielders_involved: "A Symonds",
        isWicketDelivery: 20,
      },
      {
        fielders_involved: "M Manhas",
        isWicketDelivery: 20,
      },
      {
        fielders_involved: "Z Khan",
        isWicketDelivery: 20,
      },
    ],
    dots: [
      {
        batsman_run: 1385,
        bowler: "B Kumar",
      },
      {
        batsman_run: 1377,
        bowler: "R Ashwin",
      },
      {
        batsman_run: 1363,
        bowler: "SP Narine",
      },
      {
        batsman_run: 1263,
        bowler: "Harbhajan Singh",
      },
      {
        batsman_run: 1150,
        bowler: "A Mishra",
      },
      {
        batsman_run: 1144,
        bowler: "SL Malinga",
      },
      {
        batsman_run: 1140,
        bowler: "PP Chawla",
      },
      {
        batsman_run: 1090,
        bowler: "UT Yadav",
      },
      {
        batsman_run: 1084,
        bowler: "JJ Bumrah",
      },
      {
        batsman_run: 1075,
        bowler: "P Kumar",
      },
      {
        batsman_run: 1037,
        bowler: "RA Jadeja",
      },
      {
        batsman_run: 1019,
        bowler: "DW Steyn",
      },
      {
        batsman_run: 1001,
        bowler: "YS Chahal",
      },
      {
        batsman_run: 998,
        bowler: "DJ Bravo",
      },
      {
        batsman_run: 956,
        bowler: "Sandeep Sharma",
      },
      {
        batsman_run: 873,
        bowler: "Z Khan",
      },
      {
        batsman_run: 852,
        bowler: "Rashid Khan",
      },
      {
        batsman_run: 842,
        bowler: "AR Patel",
      },
      {
        batsman_run: 842,
        bowler: "I Sharma",
      },
      {
        batsman_run: 835,
        bowler: "IK Pathan",
      },
      {
        batsman_run: 803,
        bowler: "SR Watson",
      },
      {
        batsman_run: 800,
        bowler: "Mohammed Shami",
      },
      {
        batsman_run: 798,
        bowler: "A Nehra",
      },
      {
        batsman_run: 763,
        bowler: "R Vinay Kumar",
      },
      {
        batsman_run: 751,
        bowler: "TA Boult",
      },
      {
        batsman_run: 744,
        bowler: "RP Singh",
      },
      {
        batsman_run: 742,
        bowler: "DS Kulkarni",
      },
      {
        batsman_run: 708,
        bowler: "M Morkel",
      },
      {
        batsman_run: 668,
        bowler: "CH Morris",
      },
      {
        batsman_run: 667,
        bowler: "PP Ojha",
      },
      {
        batsman_run: 646,
        bowler: "JA Morkel",
      },
      {
        batsman_run: 643,
        bowler: "MM Sharma",
      },
      {
        batsman_run: 627,
        bowler: "JD Unadkat",
      },
      {
        batsman_run: 627,
        bowler: "AB Dinda",
      },
      {
        batsman_run: 601,
        bowler: "JH Kallis",
      },
      {
        batsman_run: 600,
        bowler: "M Muralitharan",
      },
      {
        batsman_run: 590,
        bowler: "MM Patel",
      },
      {
        batsman_run: 568,
        bowler: "DL Chahar",
      },
      {
        batsman_run: 566,
        bowler: "K Rabada",
      },
      {
        batsman_run: 562,
        bowler: "SN Thakur",
      },
      {
        batsman_run: 553,
        bowler: "HV Patel",
      },
      {
        batsman_run: 537,
        bowler: "L Balaji",
      },
      {
        batsman_run: 535,
        bowler: "MG Johnson",
      },
      {
        batsman_run: 534,
        bowler: "Mohammed Siraj",
      },
      {
        batsman_run: 529,
        bowler: "KH Pandya",
      },
      {
        batsman_run: 507,
        bowler: "MJ McClenaghan",
      },
      {
        batsman_run: 504,
        bowler: "Shakib Al Hasan",
      },
      {
        batsman_run: 493,
        bowler: "AD Russell",
      },
      {
        batsman_run: 492,
        bowler: "SK Trivedi",
      },
      {
        batsman_run: 475,
        bowler: "M Prasidh Krishna",
      },
      {
        batsman_run: 453,
        bowler: "S Nadeem",
      },
      {
        batsman_run: 437,
        bowler: "Imran Tahir",
      },
      {
        batsman_run: 436,
        bowler: "R Bhatia",
      },
      {
        batsman_run: 435,
        bowler: "TG Southee",
      },
      {
        batsman_run: 426,
        bowler: "RD Chahar",
      },
      {
        batsman_run: 426,
        bowler: "SK Warne",
      },
      {
        batsman_run: 407,
        bowler: "KV Sharma",
      },
      {
        batsman_run: 405,
        bowler: "KA Pollard",
      },
      {
        batsman_run: 399,
        bowler: "S Sreesanth",
      },
      {
        batsman_run: 399,
        bowler: "JP Faulkner",
      },
      {
        batsman_run: 393,
        bowler: "YK Pathan",
      },
      {
        batsman_run: 387,
        bowler: "VR Aaron",
      },
      {
        batsman_run: 387,
        bowler: "S Kaul",
      },
      {
        batsman_run: 382,
        bowler: "M Kartik",
      },
      {
        batsman_run: 377,
        bowler: "JC Archer",
      },
      {
        batsman_run: 375,
        bowler: "Mustafizur Rahman",
      },
      {
        batsman_run: 374,
        bowler: "A Kumble",
      },
      {
        batsman_run: 374,
        bowler: "B Lee",
      },
      {
        batsman_run: 368,
        bowler: "NM Coulter-Nile",
      },
      {
        batsman_run: 364,
        bowler: "RJ Harris",
      },
      {
        batsman_run: 359,
        bowler: "HH Pandya",
      },
      {
        batsman_run: 358,
        bowler: "Kuldeep Yadav",
      },
      {
        batsman_run: 348,
        bowler: "MS Gony",
      },
      {
        batsman_run: 346,
        bowler: "CV Varun",
      },
      {
        batsman_run: 344,
        bowler: "PJ Cummins",
      },
      {
        batsman_run: 337,
        bowler: "SB Jakati",
      },
      {
        batsman_run: 336,
        bowler: "Avesh Khan",
      },
      {
        batsman_run: 334,
        bowler: "R Sharma",
      },
      {
        batsman_run: 331,
        bowler: "Iqbal Abdulla",
      },
      {
        batsman_run: 319,
        bowler: "PJ Sangwan",
      },
      {
        batsman_run: 318,
        bowler: "Washington Sundar",
      },
      {
        batsman_run: 311,
        bowler: "KK Ahmed",
      },
      {
        batsman_run: 310,
        bowler: "Ravi Bishnoi",
      },
      {
        batsman_run: 307,
        bowler: "S Gopal",
      },
      {
        batsman_run: 306,
        bowler: "MC Henriques",
      },
      {
        batsman_run: 299,
        bowler: "LH Ferguson",
      },
      {
        batsman_run: 296,
        bowler: "DT Christian",
      },
      {
        batsman_run: 293,
        bowler: "P Awana",
      },
      {
        batsman_run: 290,
        bowler: "S Aravind",
      },
      {
        batsman_run: 285,
        bowler: "DP Nannes",
      },
      {
        batsman_run: 281,
        bowler: "JO Holder",
      },
      {
        batsman_run: 280,
        bowler: "M Ashwin",
      },
      {
        batsman_run: 280,
        bowler: "SK Raina",
      },
      {
        batsman_run: 275,
        bowler: "A Nortje",
      },
      {
        batsman_run: 270,
        bowler: "DL Vettori",
      },
      {
        batsman_run: 263,
        bowler: "Navdeep Saini",
      },
      {
        batsman_run: 258,
        bowler: "Yuvraj Singh",
      },
      {
        batsman_run: 257,
        bowler: "R Tewatia",
      },
      {
        batsman_run: 254,
        bowler: "Shivam Mavi",
      },
      {
        batsman_run: 254,
        bowler: "Arshdeep Singh",
      },
    ],
    fours: [
      {
        batsman_run: 2804,
        batter: "S Dhawan",
      },
      {
        batsman_run: 2324,
        batter: "V Kohli",
      },
      {
        batsman_run: 2308,
        batter: "DA Warner",
      },
      {
        batsman_run: 2076,
        batter: "RG Sharma",
      },
      {
        batsman_run: 2024,
        batter: "SK Raina",
      },
      {
        batsman_run: 1968,
        batter: "G Gambhir",
      },
      {
        batsman_run: 1924,
        batter: "RV Uthappa",
      },
      {
        batsman_run: 1724,
        batter: "AM Rahane",
      },
      {
        batsman_run: 1704,
        batter: "KD Karthik",
      },
      {
        batsman_run: 1656,
        batter: "AB de Villiers",
      },
      {
        batsman_run: 1632,
        batter: "CH Gayle",
      },
      {
        batsman_run: 1508,
        batter: "SR Watson",
      },
      {
        batsman_run: 1460,
        batter: "PA Patel",
      },
      {
        batsman_run: 1396,
        batter: "AT Rayudu",
      },
      {
        batsman_run: 1384,
        batter: "MS Dhoni",
      },
      {
        batsman_run: 1336,
        batter: "V Sehwag",
      },
      {
        batsman_run: 1308,
        batter: "KL Rahul",
      },
      {
        batsman_run: 1272,
        batter: "MK Pandey",
      },
      {
        batsman_run: 1260,
        batter: "F du Plessis",
      },
      {
        batsman_run: 1184,
        batter: "SR Tendulkar",
      },
      {
        batsman_run: 1172,
        batter: "BB McCullum",
      },
      {
        batsman_run: 1136,
        batter: "SA Yadav",
      },
      {
        batsman_run: 1116,
        batter: "SV Samson",
      },
      {
        batsman_run: 1112,
        batter: "JC Buttler",
      },
      {
        batsman_run: 1108,
        batter: "Q de Kock",
      },
      {
        batsman_run: 1076,
        batter: "R Dravid",
      },
      {
        batsman_run: 1076,
        batter: "SE Marsh",
      },
      {
        batsman_run: 1052,
        batter: "YK Pathan",
      },
      {
        batsman_run: 1048,
        batter: "RR Pant",
      },
      {
        batsman_run: 1020,
        batter: "JH Kallis",
      },
      {
        batsman_run: 988,
        batter: "M Vijay",
      },
      {
        batsman_run: 980,
        batter: "DR Smith",
      },
      {
        batsman_run: 956,
        batter: "AC Gilchrist",
      },
      {
        batsman_run: 952,
        batter: "SS Iyer",
      },
      {
        batsman_run: 924,
        batter: "WP Saha",
      },
      {
        batsman_run: 912,
        batter: "MA Agarwal",
      },
      {
        batsman_run: 904,
        batter: "SPD Smith",
      },
      {
        batsman_run: 884,
        batter: "KA Pollard",
      },
      {
        batsman_run: 872,
        batter: "Yuvraj Singh",
      },
      {
        batsman_run: 856,
        batter: "AJ Finch",
      },
      {
        batsman_run: 800,
        batter: "DPMD Jayawardene",
      },
      {
        batsman_run: 792,
        batter: "GJ Maxwell",
      },
      {
        batsman_run: 792,
        batter: "MEK Hussey",
      },
      {
        batsman_run: 780,
        batter: "KC Sangakkara",
      },
      {
        batsman_run: 768,
        batter: "PP Shaw",
      },
      {
        batsman_run: 760,
        batter: "N Rana",
      },
      {
        batsman_run: 752,
        batter: "Shubman Gill",
      },
      {
        batsman_run: 732,
        batter: "KS Williamson",
      },
      {
        batsman_run: 728,
        batter: "RA Jadeja",
      },
      {
        batsman_run: 704,
        batter: "RA Tripathi",
      },
      {
        batsman_run: 704,
        batter: "Mandeep Singh",
      },
      {
        batsman_run: 676,
        batter: "DA Miller",
      },
      {
        batsman_run: 664,
        batter: "Ishan Kishan",
      },
      {
        batsman_run: 644,
        batter: "KK Nair",
      },
      {
        batsman_run: 624,
        batter: "MK Tiwary",
      },
      {
        batsman_run: 616,
        batter: "S Badrinath",
      },
      {
        batsman_run: 584,
        batter: "HH Pandya",
      },
      {
        batsman_run: 560,
        batter: "TM Dilshan",
      },
      {
        batsman_run: 552,
        batter: "AD Russell",
      },
      {
        batsman_run: 548,
        batter: "SC Ganguly",
      },
      {
        batsman_run: 544,
        batter: "D Padikkal",
      },
      {
        batsman_run: 532,
        batter: "JM Bairstow",
      },
      {
        batsman_run: 528,
        batter: "CA Lynn",
      },
      {
        batsman_run: 504,
        batter: "JP Duminy",
      },
      {
        batsman_run: 488,
        batter: "BJ Hodge",
      },
      {
        batsman_run: 484,
        batter: "KH Pandya",
      },
      {
        batsman_run: 484,
        batter: "NV Ojha",
      },
      {
        batsman_run: 484,
        batter: "ML Hayden",
      },
      {
        batsman_run: 480,
        batter: "DJ Bravo",
      },
      {
        batsman_run: 452,
        batter: "RD Gaikwad",
      },
      {
        batsman_run: 448,
        batter: "SP Narine",
      },
      {
        batsman_run: 448,
        batter: "EJG Morgan",
      },
      {
        batsman_run: 444,
        batter: "SS Tiwary",
      },
      {
        batsman_run: 436,
        batter: "LMP Simmons",
      },
      {
        batsman_run: 412,
        batter: "M Vohra",
      },
      {
        batsman_run: 404,
        batter: "KM Jadhav",
      },
      {
        batsman_run: 376,
        batter: "GC Smith",
      },
      {
        batsman_run: 372,
        batter: "MS Bisla",
      },
      {
        batsman_run: 364,
        batter: "KP Pietersen",
      },
      {
        batsman_run: 360,
        batter: "DJ Hussey",
      },
      {
        batsman_run: 352,
        batter: "IK Pathan",
      },
      {
        batsman_run: 348,
        batter: "MC Henriques",
      },
      {
        batsman_run: 336,
        batter: "ST Jayasuriya",
      },
      {
        batsman_run: 332,
        batter: "HH Gibbs",
      },
      {
        batsman_run: 332,
        batter: "MP Stoinis",
      },
      {
        batsman_run: 316,
        batter: "Harbhajan Singh",
      },
      {
        batsman_run: 316,
        batter: "BA Stokes",
      },
      {
        batsman_run: 308,
        batter: "Y Venugopal Rao",
      },
      {
        batsman_run: 308,
        batter: "DJ Hooda",
      },
      {
        batsman_run: 304,
        batter: "MM Ali",
      },
      {
        batsman_run: 304,
        batter: "CL White",
      },
      {
        batsman_run: 296,
        batter: "A Symonds",
      },
      {
        batsman_run: 292,
        batter: "Shakib Al Hasan",
      },
      {
        batsman_run: 276,
        batter: "JD Ryder",
      },
      {
        batsman_run: 268,
        batter: "AR Patel",
      },
      {
        batsman_run: 264,
        batter: "LRPL Taylor",
      },
      {
        batsman_run: 264,
        batter: "STR Binny",
      },
      {
        batsman_run: 256,
        batter: "Abhishek Sharma",
      },
      {
        batsman_run: 248,
        batter: "YBK Jaiswal",
      },
      {
        batsman_run: 248,
        batter: "E Lewis",
      },
    ],
    most_wickets: [
      {
        ID: 1178394,
        bowler: "AS Joseph",
        isWicketDelivery: 6,
      },
      {
        ID: 336005,
        bowler: "Sohail Tanvir",
        isWicketDelivery: 6,
      },
      {
        ID: 598056,
        bowler: "DJG Sammy",
        isWicketDelivery: 6,
      },
      {
        ID: 980979,
        bowler: "A Zampa",
        isWicketDelivery: 6,
      },
      {
        ID: 980963,
        bowler: "AD Russell",
        isWicketDelivery: 6,
      },
      {
        ID: 1254058,
        bowler: "HV Patel",
        isWicketDelivery: 6,
      },
      {
        ID: 729315,
        bowler: "JP Faulkner",
        isWicketDelivery: 5,
      },
      {
        ID: 548323,
        bowler: "SP Narine",
        isWicketDelivery: 5,
      },
      {
        ID: 392190,
        bowler: "Kamran Khan",
        isWicketDelivery: 5,
      },
      {
        ID: 548319,
        bowler: "AD Mascarenhas",
        isWicketDelivery: 5,
      },
      {
        ID: 1304086,
        bowler: "Umran Malik",
        isWicketDelivery: 5,
      },
      {
        ID: 548311,
        bowler: "RA Jadeja",
        isWicketDelivery: 5,
      },
      {
        ID: 1304103,
        bowler: "Rashid Khan",
        isWicketDelivery: 5,
      },
      {
        ID: 1082609,
        bowler: "B Kumar",
        isWicketDelivery: 5,
      },
      {
        ID: 501258,
        bowler: "BJ Hodge",
        isWicketDelivery: 5,
      },
      {
        ID: 1254062,
        bowler: "AD Russell",
        isWicketDelivery: 5,
      },
      {
        ID: 729303,
        bowler: "MM Sharma",
        isWicketDelivery: 5,
      },
      {
        ID: 1254065,
        bowler: "DL Chahar",
        isWicketDelivery: 5,
      },
      {
        ID: 501251,
        bowler: "MM Patel",
        isWicketDelivery: 5,
      },
      {
        ID: 1254075,
        bowler: "CH Morris",
        isWicketDelivery: 5,
      },
      {
        ID: 1304076,
        bowler: "YS Chahal",
        isWicketDelivery: 5,
      },
      {
        ID: 501229,
        bowler: "I Sharma",
        isWicketDelivery: 5,
      },
      {
        ID: 980979,
        bowler: "A Nehra",
        isWicketDelivery: 5,
      },
      {
        ID: 1304074,
        bowler: "Umran Malik",
        isWicketDelivery: 5,
      },
      {
        ID: 501221,
        bowler: "Harbhajan Singh",
        isWicketDelivery: 5,
      },
      {
        ID: 392184,
        bowler: "RP Singh",
        isWicketDelivery: 5,
      },
      {
        ID: 392183,
        bowler: "DL Vettori",
        isWicketDelivery: 5,
      },
      {
        ID: 1082603,
        bowler: "AJ Tye",
        isWicketDelivery: 5,
      },
      {
        ID: 1136600,
        bowler: "AJ Tye",
        isWicketDelivery: 5,
      },
      {
        ID: 336013,
        bowler: "L Balaji",
        isWicketDelivery: 5,
      },
      {
        ID: 598054,
        bowler: "JD Unadkat",
        isWicketDelivery: 5,
      },
      {
        ID: 1304102,
        bowler: "JJ Bumrah",
        isWicketDelivery: 5,
      },
      {
        ID: 598032,
        bowler: "JP Faulkner",
        isWicketDelivery: 5,
      },
      {
        ID: 1304100,
        bowler: "PWH de Silva",
        isWicketDelivery: 5,
      },
      {
        ID: 336020,
        bowler: "A Mishra",
        isWicketDelivery: 5,
      },
      {
        ID: 1304106,
        bowler: "HV Patel",
        isWicketDelivery: 5,
      },
      {
        ID: 1216497,
        bowler: "CV Varun",
        isWicketDelivery: 5,
      },
      {
        ID: 1136599,
        bowler: "TG Southee",
        isWicketDelivery: 5,
      },
      {
        ID: 598065,
        bowler: "JP Faulkner",
        isWicketDelivery: 5,
      },
      {
        ID: 1136585,
        bowler: "AS Rajpoot",
        isWicketDelivery: 5,
      },
      {
        ID: 1082634,
        bowler: "JD Unadkat",
        isWicketDelivery: 5,
      },
      {
        ID: 336032,
        bowler: "VY Mahesh",
        isWicketDelivery: 5,
      },
      {
        ID: 597998,
        bowler: "SP Narine",
        isWicketDelivery: 5,
      },
      {
        ID: 548380,
        bowler: "R Ashwin",
        isWicketDelivery: 5,
      },
      {
        ID: 1216512,
        bowler: "LH Ferguson",
        isWicketDelivery: 5,
      },
      {
        ID: 1216517,
        bowler: "JJ Bumrah",
        isWicketDelivery: 5,
      },
      {
        ID: 1178406,
        bowler: "SL Malinga",
        isWicketDelivery: 5,
      },
      {
        ID: 548357,
        bowler: "SP Narine",
        isWicketDelivery: 5,
      },
      {
        ID: 392182,
        bowler: "A Kumble",
        isWicketDelivery: 5,
      },
      {
        ID: 734037,
        bowler: "KV Sharma",
        isWicketDelivery: 5,
      },
      {
        ID: 336012,
        bowler: "CRD Fernando",
        isWicketDelivery: 5,
      },
      {
        ID: 419121,
        bowler: "J Theron",
        isWicketDelivery: 5,
      },
      {
        ID: 501201,
        bowler: "SL Malinga",
        isWicketDelivery: 5,
      },
      {
        ID: 419123,
        bowler: "R Vinay Kumar",
        isWicketDelivery: 5,
      },
      {
        ID: 1136614,
        bowler: "M Prasidh Krishna",
        isWicketDelivery: 5,
      },
      {
        ID: 419115,
        bowler: "A Kumble",
        isWicketDelivery: 5,
      },
      {
        ID: 1254111,
        bowler: "Arshdeep Singh",
        isWicketDelivery: 5,
      },
      {
        ID: 980919,
        bowler: "MM Sharma",
        isWicketDelivery: 4,
      },
      {
        ID: 1216522,
        bowler: "CH Morris",
        isWicketDelivery: 4,
      },
      {
        ID: 1216521,
        bowler: "TA Boult",
        isWicketDelivery: 4,
      },
      {
        ID: 419134,
        bowler: "A Mishra",
        isWicketDelivery: 4,
      },
      {
        ID: 980917,
        bowler: "MJ McClenaghan",
        isWicketDelivery: 4,
      },
      {
        ID: 548365,
        bowler: "A Chandila",
        isWicketDelivery: 4,
      },
      {
        ID: 1216519,
        bowler: "K Rabada",
        isWicketDelivery: 4,
      },
      {
        ID: 392220,
        bowler: "RG Sharma",
        isWicketDelivery: 4,
      },
      {
        ID: 1304092,
        bowler: "Mukesh Choudhary",
        isWicketDelivery: 4,
      },
      {
        ID: 1254115,
        bowler: "SP Narine",
        isWicketDelivery: 4,
      },
      {
        ID: 336036,
        bowler: "Sohail Tanvir",
        isWicketDelivery: 4,
      },
      {
        ID: 548369,
        bowler: "UT Yadav",
        isWicketDelivery: 4,
      },
      {
        ID: 548370,
        bowler: "SP Narine",
        isWicketDelivery: 4,
      },
      {
        ID: 1304094,
        bowler: "K Rabada",
        isWicketDelivery: 4,
      },
      {
        ID: 336035,
        bowler: "Umar Gul",
        isWicketDelivery: 4,
      },
      {
        ID: 980913,
        bowler: "A Mishra",
        isWicketDelivery: 4,
      },
      {
        ID: 548374,
        bowler: "M Morkel",
        isWicketDelivery: 4,
      },
      {
        ID: 1216518,
        bowler: "JO Holder",
        isWicketDelivery: 4,
      },
      {
        ID: 419134,
        bowler: "S Narwal",
        isWicketDelivery: 4,
      },
      {
        ID: 336040,
        bowler: "JA Morkel",
        isWicketDelivery: 4,
      },
      {
        ID: 1216511,
        bowler: "JJ Bumrah",
        isWicketDelivery: 4,
      },
      {
        ID: 392185,
        bowler: "M Muralitharan",
        isWicketDelivery: 4,
      },
      {
        ID: 1136584,
        bowler: "DJ Bravo",
        isWicketDelivery: 4,
      },
      {
        ID: 548346,
        bowler: "SL Malinga",
        isWicketDelivery: 4,
      },
      {
        ID: 1082647,
        bowler: "SN Thakur",
        isWicketDelivery: 4,
      },
      {
        ID: 1304065,
        bowler: "Kuldeep Yadav",
        isWicketDelivery: 4,
      },
      {
        ID: 1216530,
        bowler: "PJ Cummins",
        isWicketDelivery: 4,
      },
      {
        ID: 980931,
        bowler: "KW Richardson",
        isWicketDelivery: 4,
      },
      {
        ID: 419141,
        bowler: "SK Warne",
        isWicketDelivery: 4,
      },
      {
        ID: 419109,
        bowler: "AD Mathews",
        isWicketDelivery: 4,
      },
      {
        ID: 980929,
        bowler: "B Kumar",
        isWicketDelivery: 4,
      },
      {
        ID: 419141,
        bowler: "SK Trivedi",
        isWicketDelivery: 4,
      },
      {
        ID: 980927,
        bowler: "JJ Bumrah",
        isWicketDelivery: 4,
      },
      {
        ID: 548354,
        bowler: "RJ Harris",
        isWicketDelivery: 4,
      },
      {
        ID: 548355,
        bowler: "SL Malinga",
        isWicketDelivery: 4,
      },
      {
        ID: 1304091,
        bowler: "Mohsin Khan",
        isWicketDelivery: 4,
      },
      {
        ID: 419132,
        bowler: "SL Malinga",
        isWicketDelivery: 4,
      },
      {
        ID: 419128,
        bowler: "AB McDonald",
        isWicketDelivery: 4,
      },
      {
        ID: 392235,
        bowler: "Harbhajan Singh",
        isWicketDelivery: 4,
      },
      {
        ID: 598026,
        bowler: "JP Faulkner",
        isWicketDelivery: 4,
      },
      {
        ID: 1216493,
        bowler: "K Rabada",
        isWicketDelivery: 4,
      },
      {
        ID: 392239,
        bowler: "A Kumble",
        isWicketDelivery: 4,
      },
      {
        ID: 1304052,
        bowler: "PWH de Silva",
        isWicketDelivery: 4,
      },
    ],
    sixes: [
      {
        batsman_run: 2154,
        batter: "CH Gayle",
      },
      {
        batsman_run: 1518,
        batter: "AB de Villiers",
      },
      {
        batsman_run: 1446,
        batter: "RG Sharma",
      },
      {
        batsman_run: 1374,
        batter: "MS Dhoni",
      },
      {
        batsman_run: 1344,
        batter: "KA Pollard",
      },
      {
        batsman_run: 1314,
        batter: "V Kohli",
      },
      {
        batsman_run: 1296,
        batter: "DA Warner",
      },
      {
        batsman_run: 1224,
        batter: "SK Raina",
      },
      {
        batsman_run: 1140,
        batter: "SR Watson",
      },
      {
        batsman_run: 1092,
        batter: "RV Uthappa",
      },
      {
        batsman_run: 1050,
        batter: "AD Russell",
      },
      {
        batsman_run: 984,
        batter: "AT Rayudu",
      },
      {
        batsman_run: 984,
        batter: "KL Rahul",
      },
      {
        batsman_run: 966,
        batter: "YK Pathan",
      },
      {
        batsman_run: 948,
        batter: "SV Samson",
      },
      {
        batsman_run: 894,
        batter: "Yuvraj Singh",
      },
      {
        batsman_run: 822,
        batter: "S Dhawan",
      },
      {
        batsman_run: 810,
        batter: "JC Buttler",
      },
      {
        batsman_run: 804,
        batter: "KD Karthik",
      },
      {
        batsman_run: 780,
        batter: "BB McCullum",
      },
      {
        batsman_run: 774,
        batter: "RR Pant",
      },
      {
        batsman_run: 762,
        batter: "GJ Maxwell",
      },
      {
        batsman_run: 702,
        batter: "DR Smith",
      },
      {
        batsman_run: 678,
        batter: "DA Miller",
      },
      {
        batsman_run: 666,
        batter: "HH Pandya",
      },
      {
        batsman_run: 666,
        batter: "N Rana",
      },
      {
        batsman_run: 654,
        batter: "F du Plessis",
      },
      {
        batsman_run: 636,
        batter: "MK Pandey",
      },
      {
        batsman_run: 636,
        batter: "V Sehwag",
      },
      {
        batsman_run: 636,
        batter: "Q de Kock",
      },
      {
        batsman_run: 594,
        batter: "SS Iyer",
      },
      {
        batsman_run: 552,
        batter: "AC Gilchrist",
      },
      {
        batsman_run: 546,
        batter: "MA Agarwal",
      },
      {
        batsman_run: 546,
        batter: "M Vijay",
      },
      {
        batsman_run: 540,
        batter: "RA Jadeja",
      },
      {
        batsman_run: 510,
        batter: "Ishan Kishan",
      },
      {
        batsman_run: 504,
        batter: "SA Yadav",
      },
      {
        batsman_run: 480,
        batter: "AM Rahane",
      },
      {
        batsman_run: 474,
        batter: "JP Duminy",
      },
      {
        batsman_run: 474,
        batter: "NV Ojha",
      },
      {
        batsman_run: 468,
        batter: "AJ Finch",
      },
      {
        batsman_run: 468,
        batter: "SE Marsh",
      },
      {
        batsman_run: 456,
        batter: "WP Saha",
      },
      {
        batsman_run: 408,
        batter: "RA Tripathi",
      },
      {
        batsman_run: 396,
        batter: "CA Lynn",
      },
      {
        batsman_run: 396,
        batter: "DJ Bravo",
      },
      {
        batsman_run: 390,
        batter: "N Pooran",
      },
      {
        batsman_run: 384,
        batter: "KS Williamson",
      },
      {
        batsman_run: 384,
        batter: "EJG Morgan",
      },
      {
        batsman_run: 378,
        batter: "SP Narine",
      },
      {
        batsman_run: 360,
        batter: "DJ Hussey",
      },
      {
        batsman_run: 360,
        batter: "SPD Smith",
      },
      {
        batsman_run: 354,
        batter: "G Gambhir",
      },
      {
        batsman_run: 336,
        batter: "DJ Hooda",
      },
      {
        batsman_run: 330,
        batter: "JA Morkel",
      },
      {
        batsman_run: 330,
        batter: "PP Shaw",
      },
      {
        batsman_run: 330,
        batter: "JM Bairstow",
      },
      {
        batsman_run: 324,
        batter: "AR Patel",
      },
      {
        batsman_run: 318,
        batter: "MM Ali",
      },
      {
        batsman_run: 312,
        batter: "MEK Hussey",
      },
      {
        batsman_run: 312,
        batter: "SO Hetmyer",
      },
      {
        batsman_run: 300,
        batter: "SS Tiwary",
      },
      {
        batsman_run: 300,
        batter: "KH Pandya",
      },
      {
        batsman_run: 294,
        batter: "PA Patel",
      },
      {
        batsman_run: 288,
        batter: "MP Stoinis",
      },
      {
        batsman_run: 282,
        batter: "Shubman Gill",
      },
      {
        batsman_run: 276,
        batter: "LRPL Taylor",
      },
      {
        batsman_run: 264,
        batter: "ML Hayden",
      },
      {
        batsman_run: 264,
        batter: "JH Kallis",
      },
      {
        batsman_run: 264,
        batter: "LMP Simmons",
      },
      {
        batsman_run: 258,
        batter: "BJ Hodge",
      },
      {
        batsman_run: 258,
        batter: "RD Gaikwad",
      },
      {
        batsman_run: 258,
        batter: "M Vohra",
      },
      {
        batsman_run: 252,
        batter: "SC Ganguly",
      },
      {
        batsman_run: 252,
        batter: "Harbhajan Singh",
      },
      {
        batsman_run: 246,
        batter: "A Symonds",
      },
      {
        batsman_run: 240,
        batter: "DPMD Jayawardene",
      },
      {
        batsman_run: 240,
        batter: "LS Livingstone",
      },
      {
        batsman_run: 240,
        batter: "KM Jadhav",
      },
      {
        batsman_run: 240,
        batter: "MK Tiwary",
      },
      {
        batsman_run: 240,
        batter: "KP Pietersen",
      },
      {
        batsman_run: 234,
        batter: "ST Jayasuriya",
      },
      {
        batsman_run: 234,
        batter: "KK Nair",
      },
      {
        batsman_run: 228,
        batter: "CL White",
      },
      {
        batsman_run: 228,
        batter: "IK Pathan",
      },
      {
        batsman_run: 228,
        batter: "S Dube",
      },
      {
        batsman_run: 222,
        batter: "Mandeep Singh",
      },
      {
        batsman_run: 222,
        batter: "Y Venugopal Rao",
      },
      {
        batsman_run: 216,
        batter: "E Lewis",
      },
      {
        batsman_run: 216,
        batter: "D Padikkal",
      },
      {
        batsman_run: 210,
        batter: "CH Morris",
      },
      {
        batsman_run: 210,
        batter: "R Tewatia",
      },
      {
        batsman_run: 210,
        batter: "STR Binny",
      },
      {
        batsman_run: 192,
        batter: "BA Stokes",
      },
      {
        batsman_run: 186,
        batter: "HH Gibbs",
      },
      {
        batsman_run: 186,
        batter: "CJ Anderson",
      },
      {
        batsman_run: 174,
        batter: "SR Tendulkar",
      },
      {
        batsman_run: 174,
        batter: "AD Mathews",
      },
      {
        batsman_run: 168,
        batter: "R Dravid",
      },
      {
        batsman_run: 168,
        batter: "S Badrinath",
      },
    ],
  });
  const [overall_season, setOverall_season] = useState("All");
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [teamAnalysis, setTeamAnalysis] = useState();
  const [teamWinners, setTeamWinners] = useState();
  const [teamLossers, setTeamLossers] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState("Select");
  const [player, setPlayer] = useState();
  const [playerImg, setPlayerImg] = useState();
  const [clickedTeam, setClickedTeam] = useState(false);

  const get_overall_analysis = () => {
    setLoading(true);
    setOverall_analysis();
    axios
      .get(`${BASE_URL}/overall_analysis?season=${overall_season}`)
      .then((res) => {
        setOverall_analysis(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get_overall_analysis();
  }, [overall_season]);

  const get_team_analysis = (s, y) => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/get_team_analysis?team=${s}&season=${y}`)
      .then((res) => {
        let response = res.data;
        setTeamAnalysis(response);
      });
    axios.get(`${BASE_URL}/get_winners?team=${s}&season=${y}`).then((resp) => {
      let response1 = resp.data;
      setTeamWinners(response1["winners"]);
    });
    axios.get(`${BASE_URL}/get_loosers?team=${s}&season=${y}`).then((respo) => {
      setTeamLossers(respo.data["lossers"]);
      setLoading(false);
    });
  };

  const get_player_analysis = (t, y) => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}/get_player_analysis?player=${selectedPlayer}&season=${y}&team=${t}`
      )
      .then((res) => {
        setPlayer(res.data);
      });
    axios.get(`${BASE_URL}/get_img?player=${selectedPlayer}`).then((res) => {
      setPlayerImg(res.data["images"]);
      setLoading(false);
    });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/get_seasons`).then((res) => {
      setSeasons(res.data["result"]);
    });
    axios.get(`${BASE_URL}/get_teams`).then((res) => {
      setTeams(res.data["result"]);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        overall_analysis,
        setOverall_analysis,
        default_image:
          "https://scores.iplt20.com/ipl/images/default-player-statsImage.png?v=2",
        get_overall_analysis,
        setOverall_season,
        overall_season,
        seasons,
        loading,
        setLoading,
        teams,
        teamAnalysis,
        teamWinners,
        teamLossers,
        get_team_analysis,
        selectedPlayer,
        setSelectedPlayer,
        get_player_analysis,
        playerImg,
        player,
        clickedTeam,
        setClickedTeam,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
