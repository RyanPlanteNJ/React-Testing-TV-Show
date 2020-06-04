import axios from 'axios';

export const formatSeasons = allEpisodes => {
  const seasons = {};
  allEpisodes.forEach((e) => {
    if (!seasons.hasOwnProperty(`Season ${e.season}`)) {
      seasons[`Season ${e.season}`] = [];
    }
    seasons[`Season ${e.season}`].push(e);
  });
  return seasons;
};


export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      formatSeasons(res.data._embedded.episodes);
      return res;
    })
    .catch(err => console.log(err));
  };