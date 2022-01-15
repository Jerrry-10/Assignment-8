import React from 'react'
import { useState } from 'react'
export default function Balance(props) {
    let [state, setstate] = useState(0)
    state += props.bal
    return (
        <span> {state}</span>
    )
}
