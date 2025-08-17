import {React , useState , useEffect } from 'react'
import './Navbar.css'

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
                        good mornning
                    </div>
        </header>
       
    )
}
export default Navbar 