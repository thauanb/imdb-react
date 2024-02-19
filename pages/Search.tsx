import Navbar from '../src/components/Navbar'
import MovieStatus from '../src/components/MovieStatus'
import {useState , useEffect} from "react"
import { useLocation } from 'react-router'

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

const movieSearchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
const imageBase = "https://image.tmdb.org/t/p/original/"


export default function Search(){
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const [ movies , setTopMovies ] = useState<DataProps[] | null>(null)
  const getMovies = async(url:string) => {
    const res = await fetch(url)
    const data = await res.json()
    // renderiza apenas os que tem imagem
    const movieObj = data.results.filter((movie: DataProps) => movie.backdrop_path);     
    setTopMovies(movieObj)
    console.log(movieObj)
  }

  useEffect(()=>{
    const searchWithQueryURL = `${movieSearchURL}?&query=${query}&${apiKey}`
    getMovies(searchWithQueryURL)
  },[query])

  return(
    <>
      <Navbar/>

      <>
      <h1 className="text-4xl font-bold p-5 text-center">Resultados para <span className='font-bold text-yellow-400'>{query}</span></h1>
      <div className="p-5  flex justify-evenly flex-wrap gap-7">
      
        { 
        // verifica se topMovies é vazio ou nao
        movies &&
          // Inicia a renderização condicional
          // para cada elemento na lista , faz uma ação
          movies.map((movie)=>{
            
              return( 
                <>
                  <div className="prose flex w-[450px] h-[600px] flex-col  items-center  rounded-lg  border-[6px] border-zinc-200  p-5">
                    <h3 className=" text-2xl font-bold text-wrap">{movie.title}</h3>
                    <img className="w-auto h-[300px] rounded" src={`${imageBase}${movie.backdrop_path}`} alt="" />
                    <div className="w-[400px] h-[150px] text-left overflow-y-auto p-1 ">{movie.overview}</div>
                    <MovieStatus rating={movie.vote_average} release={movie.release_date} /> 

                  </div>


                </>
              )
            })
        }
      </div>

      </>
    
    </>
  )
}