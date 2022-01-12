import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul id="Nav">
                <li className = "Nav"><Link to = "/" className = "NavText">Home page</Link> </li>
                <li className = "Nav"><Link to = "/Second" className = "NavText"> See your Debits!</Link></li>
                <li className = "Nav"><Link to = "/Third" className = "NavText"> See your Credits</Link></li>
            </ul>
        </div>
    )
}
