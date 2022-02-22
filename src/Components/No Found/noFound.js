import React from 'react'
import './noFound.css'
import img from './undraw_File_searching_re_3evy.svg'
import empty from '../../utils/images/empty.svg'

const NoFound=(props)=>{
    const { text } = props
    return(
        <>
        <h1 className="no-found">{text}</h1>
        <img className="no-found-img" src ={empty} />
        </>
    )
}
export default NoFound