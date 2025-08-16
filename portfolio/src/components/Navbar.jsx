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
    return(
        <header className= { `"navbar" ${ scroll ? "scroll" : " "}` }>
             <div className='navbar'>
                        
                    </div>
        </header>
       
    )
}
export default Navbar 