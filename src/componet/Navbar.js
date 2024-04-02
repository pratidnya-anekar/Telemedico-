import  { Link }  from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav>
            <div className="flex justify-between px-8 py-8 ml-14 mr-12">
            <h1 className="text-black text-3xl hover:text-blue-600 cursor-pointer">TeleMedicine</h1>
            <div className="flex space-x-10  text-xl align-text-center">
                <Link className="hover:scale-110" to="/">Home</Link>
                <Link className="hover:scale-110"to="/">Clinic</Link>
                <Link className="hover:scale-110"to="/">Doctor</Link>
                <Link className="hover:scale-110"to="/">Services</Link>
                <Link className="hover:scale-110"to="/">Media</Link>
                <Link className="hover:scale-110"to="/">Contact</Link>
                <Link className="hover:scale-110"to="/">Sign In</Link>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;