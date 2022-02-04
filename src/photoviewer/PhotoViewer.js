import React, { useState } from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';



export function PhotoViewer(props) {
    const url = props.urls[0];

    return (
        <div>
            <img className="photoviewer-image" src={url} alt="AltImageName"  />
        </div>
    )
}


