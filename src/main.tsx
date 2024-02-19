import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "../pages/Home"
import Search from "../pages/Search"
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Search" element={<Search/>} ></Route>

    </Routes>
    </BrowserRouter>
)
