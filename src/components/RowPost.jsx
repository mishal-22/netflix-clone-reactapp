import React, { useEffect, useState } from "react";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants/constant";
import YouTube from "react-youtube";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlID, setUrlId] = useState("");
  const [searchTerm,setSearchTerm]=useState("")
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleOnClick = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
        } else {
          console.log("Not found");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
             
          return (
            <div className="movie-card">
               
              <img
                onClick={() => handleOnClick(obj.id)}
                className={
                  props.title == "Netflix Originals" ? "poster" : "smallPoster"
                }
                alt="poster"
                src={imageUrl + obj.backdrop_path}
              />
              
                  <h4>{obj.title?obj.title:"Netflix Original"}</h4>
                </div>
             
          );
        })}
      </div>
      {urlID && <YouTube videoId={urlID.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
