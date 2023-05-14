import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import starWarsLogo from '../star.PNG'
import axios from "axios"

const Details = () => {
   
  const {id} = useParams();
  const [film, setFilm] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  let API = [
    `https://swapi.dev/api/films/${id}`
  ];

  Promise.all(
    API.map(async (api) => {
      const res = await axios.get(api);
        console.log(res);
    })
  )
  useEffect(() => {

    const getFilmData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/films/${id}`);
            const filmData = response.data;

            const [characters, planets, species, starships, vehicles] =
            await Promise.all([
              fetchData(filmData.characters),
              fetchData(filmData.planets),
              fetchData(filmData.species),
              fetchData(filmData.starships),
              fetchData(filmData.vehicles),
            ]);
            setFilm({
              ...filmData,
              characters,
              planets,
              species,
              starships,
              vehicles,
            });
        
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setFilm(null);
        } finally {
            setLoading(false);
        }
    };

    getFilmData();
}, [id])
        
    return (
      <div>
         <img className='logo' src={starWarsLogo} alt='logo'/>
          {loading && <div>Data is loading. Please wait...</div>}
            {error && <div>{`There is a problem fetching your data - ${error}`}</div>}(
          <div>
            {film && ( 
            <>
              <header>
            <nav>
                <Link style={{color:"grey"}} to=''>Back to list</Link>
            </nav>

              <h2>{film.title}</h2>
              <p>Director: {film.director}</p>
              <p>Producer: {film.producer}</p>
            </header>
            <div>
              <h4>Description</h4>
              <p>{film.opening_crawl}</p>
            </div>
            <div>
              <h4>characters</h4>
              <ul>
                {film.characters.map((character) => (
                  <li key={character.url}>{character.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>planets</h4>
              <ul>
                {film.planets.map((planet) => (
                  <li key={planet.url}>{planet.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>species</h4>
                <ul>
                  {film.species.map((specie) => (
                    <li key={specie.url}>{specie.name}</li>
                  ))}
                </ul>
            </div>
            <div>
              <h4>starships</h4>
                <ul>
                  {film.starships.map((starship) => (
                    <li key={starship.url}>{starship.name}</li>
                  ))}
                </ul>
            </div>
            <div>
              <h4>Vehicles</h4>
                <ul>
                  {film.vehicles.map((vehicle) => (
                    <li key={vehicle.url}>{vehicle.name}</li>
                  ))}
                </ul>
            </div>
            </>)}
            
          </div>
         )

         

      </div>
    )
}

export default Details