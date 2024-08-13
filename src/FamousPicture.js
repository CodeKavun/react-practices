import React from "react"
import { NavLink } from "react-router-dom"
import monaLisa from "./images/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg.webp"

class FamousPicture extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/'}>Back to home</NavLink></li>
            </ul>
            <h1>Mona Lisa</h1>
            <img src={monaLisa}></img>
        </div>
    }
}

export default FamousPicture;