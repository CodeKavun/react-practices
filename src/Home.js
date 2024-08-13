import React from "react"
import { NavLink, Routes, Route, Outlet } from "react-router-dom"
import monaLisa from "./images/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg.webp"

import Bio from "./Bio"

class Home extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/bio'}>Biography</NavLink></li>
                <li><NavLink to={'/famous-pic'}>Famous Picture</NavLink></li>
                <li><NavLink to={'/gallary'}>Gallary</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    }
}

export default Home;