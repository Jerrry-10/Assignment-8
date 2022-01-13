import React from 'react'

export default function Home(props) {
    return (
        <div>
            {/* <img className = 'container-sm' src = "https://www.reipropertymanagement.net/wp-content/uploads/2019/11/bank-getty.jpg"></img> */}
            <h1> This is the home page </h1>
            <h2> You have ${Math.floor(props.bal)} in your account </h2>
        </div>
    )
}