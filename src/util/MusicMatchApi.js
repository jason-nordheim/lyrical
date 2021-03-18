import axios from "axios";
const origin = `${window.location.protocol}//${window.location.host}`;

const baseUri = process.env.REACT_APP_MM_BASE_URI;
const apiKey = process.env.REACT_APP_MM_KEY;

/**
 * Documentation: https://developer.musixmatch.com/documentation/api-reference/track-chart-get
 * @param {String} country 2 letters country code (default US). Set XW as worldwide
 * @param {Number} page the page number for paginated results
 * @param {"top"|"hot"|"mxmweekly"|"mxmweekly_new"} chartName Select among available charts: top, hot,
 * @param {Number} pageSize page size for paginated results. Range is 1 to 100.
 * @param {"1"|"0"} hasLyrics When set, filter only contents with lyrics
 * @returns
 */
export const getTopTracks = (
  country = "us",
  page = 1,
  pageSize = 10,
  chartName = "top",
  hasLyrics = "1"
) => {
  return fetch(
    `${baseUri}chart.tracks.get?chart_name=${chartName}&page=${page}&page_size=${pageSize}&country=${country}&f_has_lyrics=${hasLyrics}&apiKey=${apiKey}`
  ).then((res) => console.log(res));
};

//   return fetch(
//     `${baseUri}chart.tracks.get?chart_name=${chartName}&page=${page}&page_size=${pageSize}&country=${country}&f_has_lyrics=${hasLyrics}&apiKey=${apiKey}`,
//     {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//     }
// //   ).then((res) => res.json());
// "https://api.musixmatch.com/ws/1.1/format=json&callback=callback&country=us&apikey=3529ef854d1facd897407ba3f44bccb1",
//     {
//       method: "GET",
//       headers: {
//         Accept: true,
//         "access-control-allow-origin": "*",
//         "content-type": "text/plain;charset=UTF-8",
//         "accept-language": "en-us,en;q=0.5",
//       },
//       credentials: "include",
//       redirect: "follow",
//     }
