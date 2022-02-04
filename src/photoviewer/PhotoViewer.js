import React, { useState } from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';



export function PhotoViewer(props) {
    const url = props.urls[0];
    const [selectedUrl, setSelectedUrl] = useState();

    return (
        <div>
            <h2>Selected: {selectedUrl}</h2>
            <div>
            <img className="photoviewer-image" key={url} src={url} alt="Lovely" onClick={function () {setSelectedUrl(url); }} />
            </div>
        </div>
    )
}


