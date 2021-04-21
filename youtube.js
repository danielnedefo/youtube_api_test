// function loadClient() {
//     gapi.client.setApiKey("AIzaSyB6db_bd6qNpLAYe3C0yGFQYI82Q-WLPbs");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
// }
//   function execute() {
//     return gapi.client.youtube.search.list({
//       "part": [
//         "snippet"
//       ],
//       "q": "Transformers",
//       "maxResults": "1"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");
// const youtubeApi = fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB6db_bd6qNpLAYe3C0yGFQYI82Q-WLPbs&q=Titanic&maxResults=1')
//   .then(response => response.json())
// .then(result => console.log(result))
const trailerOptins = {
    endpoint: '/search?part=snippet',
    options: {
      maxResults: 1,
      q: ""
    }
};
axios.defaults.baseURL = 'https://youtube.googleapis.com/youtube/v3'
const axios = require("axios")
const youTubeUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB6db_bd6qNpLAYe3C0yGFQYI82Q-WLPbs&q=Titanic&maxResults=1'
//moviehttp сервис должен вернуть название фильма
const youTubeLink = 'https://www.youtube.com/watch?v=VbfpW0pbvaU'
class YouTubeApi {
  static BASE_YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3';
  static YOUTUBE_LINK_FOR_TRAILER = 'https://www.youtube.com';
  static YOUTUBE_API_KEY = 'AIzaSyB6db_bd6qNpLAYe3C0yGFQYI82Q-WLPbs'
  async getId(endpoint,options) {
    const getFilmLink = await axios.get(endpoint,options)
    console.log(getFilmLink)
}
}
const api = new YouTubeApi();
api.getId(trailerOptins)