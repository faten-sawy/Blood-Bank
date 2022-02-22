/* import { Container } from "@material-ui/core"
import { Opacity } from "@material-ui/icons" */
import React from "react"
import {Row} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import './car.css'
import {useTranslation} from 'react-i18next'

const CarouselComponent=()=>{
    const {t,i18n} = useTranslation();
    const repeat = true
    return(      
        <Row xs={12} md={12} lg={12} className="headerSection" >
        <div className="type">
        { repeat ?
        <Typewriter onInit={(typewriter)=>{
                typewriter.typeString(t("heading"))
                .pauseFor(2000)
                .deleteAll()
                typewriter.typeString(t("heading"))
                .pauseFor(2000)
                .deleteAll()
                typewriter.typeString(t("heading"))
                .pauseFor(2000)
                .deleteAll()
                .start()
            }}/> : null }
        
            </div>       
        </Row>       
    )
}
export default CarouselComponent