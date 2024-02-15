import { useEffect , useState } from "react"
import MovieStatus from "./MovieStatus"

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KWY
const imageBase = "https://image.tmdb.org/t/p/w500/"


interface DataProps {
  id : number,
  adult : boolean,
  backdrop_path : string,
  title : string,
  original_title : string
  overview : string,
  vote_average : number,
  release_date : string

}

export default function BestMovies(){

  const [ topMovies , setTopMovies ] = useState<DataProps[] | null>(null)
  const getTopRatedMovies = async(url:string) => {
    const res = await fetch(url)
    const data = await res.json()
    const movieObj = data.results
    setTopMovies(movieObj)
    console.log(movieObj)
  }


    useEffect(()=>{
      const topRatedUrl = `${movieURL}top_rated?${apiKey}`
      getTopRatedMovies(topRatedUrl)
    },[])

  return(  
    <>
      <div className="h-10 w-auto p-5 prose">
        <h1>Melhores Filmes</h1>
        { 
        // verifica se topMovies é vazio ou nao
            topMovies &&
          // Inicia a renderização condicional
          // para cada elemento na lista , faz uma ação
            topMovies.map((movie)=>{
              return( 
                <>
                  <h3>{movie.title}</h3>
                  <img className="w-4/5 h-auto" src={`${imageBase}${movie.backdrop_path}`} alt="" />
                  <p>{movie.overview}</p>
                  <MovieStatus rating={movie.vote_average} release={movie.release_date} /> 

                </>
              )
            })
        }
      </div>
      </>
  )
}