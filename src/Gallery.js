import React from "react"
import { NavLink } from "react-router-dom"
import monaLisa from "./images/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg.webp"
import portret from "./images/Leonardo_self.jpg"
import ladyWithErmine from "./images/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg"
import supper from "./images/Leonardo_da_Vinci_(1452-1519)_-_The_Last_Supper_(1495-1498).jpg"

class Gallery extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/'}>Back to home</NavLink></li>
            </ul>
            <img src={monaLisa}></img>
            <img src={portret}></img>
            <img src={ladyWithErmine}></img>
            <img src={supper}></img>
        </div>
    }
}

export default Gallery;