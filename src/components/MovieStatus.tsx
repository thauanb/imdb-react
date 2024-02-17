import {StarFilledIcon as StarIcon , CalendarIcon as CalenderIcon} from "@radix-ui/react-icons"

interface MovieStatusProps{
  rating: number;
  release : string;
}

function toDate(date:string){
  const d = new Date(date)
  return d.getFullYear()
}

export default function MovieStatus(props : MovieStatusProps) {
  return(
    <div className="text-xl   w-[100%] h-12 flex align-middle justify-normal gap-3 p-2 m-4 bg-zinc-100 border-2 rounded-md">
      <div className="flex align-middle justify-normal gap-2">
        <StarIcon className="w-[30px] h-[30px] text-yellow-400"/>
        <span className="font-bold">{props.rating.toFixed(2)}</span>
      </div>
      <div className="flex align-middle justify-normal gap-2">
        <CalenderIcon className="w-[30px] h-[30px] text-yellow-400"/>
        <span className="font-bold">{toDate(props.release)}</span>
      </div>

    </div>
  )
}