import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import starWarsLogo from '../star.PNG'

const Movies = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
  
      fetch(`https://swapi.dev/api/films`)
              .then((response) => {
                  if (!response.ok) {
                      throw new Error(`This is an HTTP Error: The status is ${response.status}`)
                  }
                  return response.json()
              })
              .then((actualData) => {
                  setData(actualData.results)
                  setError(null)
              })
              .catch((error) => {
                  console.log(error)
                  setError(error)
                  setData(null)
              })
              .finally(() => {
                  setLoading(false)
              })
  
        }, [])
        
    return (
      <>
        <div style={{background:"black"}}>
          <img className='logo' src={starWarsLogo} alt='logo'/>
          {loading && <div>Data is loading. Please wait...</div>}
          {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
          <ul>
              {data && data.map((item) => {
                        return (
                            <li className='card' key={item.episode_id}>
                                <div>
                                  <div className='text'>
                                  <main>
                                      <nav>
                                        <Link style={{color:"#f2f2f2"}} to='/'>More Info</Link>
                                      </nav>
                                      <div><h>{item.description}</h></div>
                                      <div><p>{item.characters}</p></div>
                                      <div><p>{item.planets}</p></div>
                                      <div><p>{item.species}</p></div>
                                      <div><p>{item.starships}</p></div>
                                      <div><p>{item.vehicles}</p></div>
                                    </main>
                                  </div> 
                                </div>
                            </li>
                        )
                    })}
          </ul>
        </div>
      </>
    )
}

export default Movies