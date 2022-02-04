import React, { useState } from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';



export function PhotoViewer(props) {
    const urls = props.urls;
    const [selectedUrl, setSelectedUrl] = useState();
    const components = [];

    for (let i = 0; i < 50; i++) {
        const url = urls[i];
        components.push(
            <img className="photoviewer-image" key={url} src={url} alt="LovelyImage" onClick={function () { setSelectedUrl(url); }} />
        );
    }

    return (
        <div>
            <h2>Selected: {selectedUrl}</h2>
            {components}
        </div>
    );
}

