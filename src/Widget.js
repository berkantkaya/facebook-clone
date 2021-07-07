import React from 'react'
import "./Widget.css"

function Widget() {
    return (
        <div className = "widget">
            <iframe className = "widget__scroll" width="340" height="300" src="https://www.youtube.com/embed/ab9176Srb5Y" title="YouTube video player"   scrolling="no"   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style= {{ border: "none" , overflow: "hidden"  }}allowfullscreen></iframe>
            <iframe width="340" height="300" src="https://www.youtube.com/embed/JByDbPn6A1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className = "widget__scroll" width="340" height="300" src="https://www.youtube.com/embed/YQRHrco73g4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className = "widget__scroll" width="340" height="300" src="https://www.youtube.com/embed/1G4isv_Fylg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Widget