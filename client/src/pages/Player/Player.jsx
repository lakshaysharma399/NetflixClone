import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM1NTA5YThmODEyZTEyMDNhY2VhNDE5ZjUyNTgyMiIsIm5iZiI6MTcxOTM5MjM1Ny4wODk0MzIsInN1YiI6IjY2N2JkMTI4MWNhZGQ0NDE1NmQyMmQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sqIaBlYHbaDxK1nhqszvdA7sLCG7Bha_4knmWCatvFI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  }, [])
  
  return (

    
    <div className="player">
      <img src={back_arrow_icon} alt="Back Arrow" className="back-arrow" onClick={() => {navigate(-2)}} />
      <iframe 
        width="90%" 
        height="90%" 
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <div className='player-info'>
        <p>Published Date: <span>{apiData.published_at}</span></p>
        <p>Name: <span>{apiData.name}</span></p>
        <p>Type: <span>{apiData.type}</span></p>
      </div>
    </div>
  );
};

export default Player;

