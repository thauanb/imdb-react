import {HomeIcon} from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {  useNavigate } from "react-router-dom";

export default function Navbar(){
  const [search , setSearch] = useState('')
  const navigate = useNavigate();

 const handleSubmit = function(e){

    e.preventDefault()
    if (!search) return
    navigate(`/search?q=${search}`,{ replace : true})

  }

  return(
    <div className="flex items-center justify-between w-full h-20 gap-10 p-6 border rounded">
    <a href="/" target="_blank" >
      <HomeIcon className="h-[32px] w-[32px]"/>
    </a>
    <form>
      <Input 
          className="w-auto  px-5 h-auto" 
          type="text" 
          placeholder="Digite o filme"
          onChange={e=>setSearch(e.target.value)}
          onKeyDown={(e)=>{
            if (e.key == "Enter"){
              handleSubmit(e)
            }
          }}
          value={search}
          />

    </form>

          </div>

  )
}