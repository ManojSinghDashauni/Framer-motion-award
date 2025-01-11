import { Link } from "react-router"


const Navigation = () => {
  return (
         <nav className="w-screen h-screen uppercase flex flex-col justify-center items-center font-serif text-2xl bg-yellow-100">
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
        <Link
          to="/trackingEyes"
          className="font-bold hover:text-red-400"
        >
          Tracking Eyes
        </Link>
        <Link
          to="/tilt"
          className="font-bold hover:text-red-400"
        >
          Tilt Effect
        </Link>
      </nav>
  )
}

export default Navigation