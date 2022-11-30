import React from "react"
//hero component with text and simple description ,included with a background image
export default function Hero() {
    return (
        <section className="hero">
            <img src="../images/photo-grid.png" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home. <b>Tony Rite wrote the code</b></p>
        </section>
    )
}