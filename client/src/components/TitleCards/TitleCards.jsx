import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData ] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM1NTA5YThmODEyZTEyMDNhY2VhNDE5ZjUyNTgyMiIsIm5iZiI6MTcxOTM5MjM1Ny4wODk0MzIsInN1YiI6IjY2N2JkMTI4MWNhZGQ0NDE1NmQyMmQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sqIaBlYHbaDxK1nhqszvdA7sLCG7Bha_4knmWCatvFI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  }, [])
  
  return (
    <div className='title-cards'>
      <h2>{title ? title:"Popular on Netflix"}</h2>
      <div className='card-list'>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w300`+card.backdrop_path} alt="" />
            <p>
              {card.original_title}
            </p>
          </Link>

        })}
      </div>
      
    </div>
  )
}

export default TitleCards;
