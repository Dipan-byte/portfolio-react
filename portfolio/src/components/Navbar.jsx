import {React , useState , useEffect } from 'react'
import './Navbar.css' 
import {navlink} from 'react-router-dom'

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
    const navlink = [
        {path:"/" , lable:"HOME"} ,
        {path:"/pojects" , lable:"PROJECTS"} ,
        {path:"/community" , lable:"COMMUNITY"} ,
        {path:"/contact" , lable:"CONTACTS"}
    ]

    
    return(
        <header className= { `"navbar" ${ scroll ? "scroll" : " "}` }>
             <div className='navbar'>
                        <ul>
                            {navlink.map((link , index) => 
                                    <li ></li>
                            )}
                        </ul>
                    </div>
        </header>
       
    )
}
export default Navbar 