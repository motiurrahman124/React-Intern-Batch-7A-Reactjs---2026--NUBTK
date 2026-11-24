import { NavLink } from "react-router"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Header() {
    // let show = false
    const [show, setShow] = useState(false)
    console.log(show);

    const name = "Mishty Rani"

    // if(name === "Mishty Rani"){
    //     console.log("Eta ami");
    // }else{
    //     console.log("Eta ami na");
    // }

    // name === "Mishty Rani" ? console.log("Eta ami") : console.log("Eta ami na")
    

    return (
        <div className="">
            <header className="px-5  py-5 bg-gray-700 text-white">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Website Logo</h1>
                    <ul className="md:flex gap-4 hidden">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/products">Services</NavLink></li>
                        <li><NavLink to="/products">Contact</NavLink></li>
                    </ul>
                    {
                        show === true ? <IoMdClose onClick={()=>setShow(false)} className="text-3xl md:hidden"/> : <GiHamburgerMenu onClick={()=>setShow(true)} className="text-3xl md:hidden" />
                    }

                    {/* <button onClick={()=>setShow(!show)}>{show === true ? "Close Menu" : "Show Menu"}</button> */}
                    
                    
                </div>

                {
                    show === true && (
                        <ul className="mt-5 space-y-3 text-lg font-medium">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/products">Services</NavLink></li>
                            <li><NavLink to="/products">Contact</NavLink></li>
                        </ul>
                    )
                }
            </header>

        </div>
    )
}

export default Header