import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul id="Nav">
                <li className = "Nav"><Link to = "/" className = "NavText">Home page</Link> </li>
                <li className = "Nav"><Link to = "/debit" className = "NavText"> See your Debits!</Link></li>
                <li className = "Nav"><Link to = "/credit" className = "NavText"> See your Credits</Link></li>
                <li className = "Nav"><Link to = "/Login" className = "NavText"> Login</Link></li>
            </ul>
        </div>
    )
}