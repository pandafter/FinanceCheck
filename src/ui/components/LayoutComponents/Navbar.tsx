import { Link } from "react-router-dom"
import logo from '/vite.svg'

export const Navbar = () => {
    return (
        <div className="w-full mb-5 flex justify-between items-center fixed px-8 z-50">
            <img src={logo} alt="logo" width={50} height={50}/>

            <ul className="flex justify-center gap-16 w-[30vw] bg-rose-500 py-4 rounded-b-xl text-[1rem] font-semibold text-white">
                <Link to="/" className="hover:text-rose-200">Inicio</Link>
                <Link to="/add" className="hover:text-rose-200">Agregar</Link>
                <Link to="/profile" className="hover:text-rose-200">Perfil</Link>
            </ul>

            <div className="w-11 h-11 rounded-full bg-rose-400"></div>
        </div>
    )
}
