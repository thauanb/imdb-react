import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "../pages/Home"
import Movie from "../pages/Movie"
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="movies" element={<Movie/>} ></Route>

    </Routes>
    </BrowserRouter>
)
