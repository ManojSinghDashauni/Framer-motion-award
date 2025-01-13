import { Link } from "react-router";
import { NavLinks } from "../data/NavLinks";

const Navigation = () => {
  return (
    <nav className="w-screen h-screen uppercase flex flex-col justify-center items-center font-serif text-2xl bg-yellow-100">
      {NavLinks.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className="font-bold hover:text-red-400"
        >
          {item.Title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
