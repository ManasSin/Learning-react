import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "6a698f83efmsh162562b7a14d4e3p157ce7jsn02cfe2ec6293",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFormAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// * using fetch.

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "6a698f83efmsh162562b7a14d4e3p157ce7jsn02cfe2ec6293",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFormAPI = async (url) => {
//   const response = await fetch(`${BASE_URL}/${url}`, options);
//   const data = await response.json();
//   return data;
// };
