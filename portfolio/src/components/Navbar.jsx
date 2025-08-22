import React , {useState , useEffect } from 'react'
import './Navbar.css' 
import {NavLink} from 'react-router-dom'

function Navbar() {
    const [scroll ,setscroll] = useState(false)
    useEffect( () => {
        const onscroll = () => {
                if(window.scrollY > 10 ){
                    setscroll(true)
                }
                else{
                    setscroll(false)
                }
           }
           window.addEventListener("scroll" , onscroll , {passive:true}) ;
            return () => window.removeEventListener("scroll" , onscroll ) ;
        }
    )
    const link = [
        {path:"/" , label:"HOME"} ,
        {path:"/projects" , label:"PROJECTS"} ,
        {path:"/community" , label:"COMMUNITY"} ,
        {path:"/contact" , label:"CONTACTS"}
    ]

    
    return(
        <header className= { `"navbar" ${ scroll ? "scroll" : " "}` }>
             <div className='nav-content'>
                        <ul className='nav-list'>
                            {link.map((link , index) => 
                                    <li key={index}>
                                        <NavLink to={link.path}>{link.label}</NavLink>
                                    </li>
                            )}
                        </ul>
                    </div>
        </header>
       
    )
}
export default Navbar 