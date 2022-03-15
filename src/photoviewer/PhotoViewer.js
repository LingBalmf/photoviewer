import React, { useState } from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

export function Photo(props) {
    const url = props.url;
    const onClick = props.onClick;

    return (
        <span>
            <img className="photoviewer-image" src={url} alt="Lovely" onClick={onClick} />
        </span>
    )
}

export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
    const urls = props.urls;
    const [selectedUrl, setSelectedUrl] = useState();

    return (
        <>
            <h2>Selected: {selectedUrl}</h2>
            <div>
                {urls.map(function (url) {
                    return <Photo url={url} onClick={() => setSelectedUrl(url)} />;
                })}
            </div>
        </>
    )
    return
}
