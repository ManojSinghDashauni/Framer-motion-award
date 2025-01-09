import { Link } from "react-router"


const Navigation = () => {
  return (
         <nav className="w-screen h-screen p-4 uppercase flex flex-col justify-center items-center font-serif text-2xl">
        <Link
          to="/home"
          className="font-bold hover:text-red-400"
        >
          stack nav
        </Link>
        <Link
          to="/hover"
          className="font-bold hover:text-red-400"
        >
          Hover Effect
        </Link>
      </nav>
  )
}

export default Navigation