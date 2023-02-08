import React from "react"
import { useEffect } from 'react'
import moleImg from '../imgs/molehill.png'


function EmptySlot(props){
    useEffect(() => {
        let random = Math.ceil(Math.random() * 7000)
        let timer = setTimeout(()=> {
            props.toggle(true)
        }, random)
        return () => clearTimeout(timer)
    })
        return (
            <div>
            <img style={{'width': '30vw'}}
            src={moleImg}></img>
            </div>
    )
}

export default EmptySlot