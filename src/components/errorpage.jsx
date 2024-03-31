// import Link from "react-router-dom"

import { Link } from "react-router-dom";


const ErrorPage=()=>{
    return(
            <>
            <div style={{textAlign:'center',margin:'10rem'}}>
                <p>Page Not Found, Pls Check The Link Again</p>
                <Link to='/' style={{textDecoration:'none', color:'blue'}}>Back Home</Link>

            </div>
            </>
    )
}

export default ErrorPage;


