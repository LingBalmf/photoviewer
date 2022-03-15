import React, { useEffect, useState } from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';
import { ThumbnailPhoto } from "./ThumbnailPhoto";
import { Photo} from "./Photo";

export function PhotoViewer({ urls }) {    // declare and export new function called 'PhotoViewer'
    const [leftUrl, setLeftUrl] = useState();
    const [rightUrl, setRightUrl] = useState();
    const [side, setSide] = useState('left');

    useEffect(() => {
        if (urls?.length > 1) {
            setLeftUrl(urls[0]);
            setRightUrl(urls[1]);
        }
    }, [urls]);

    return (
        <>
            <div>
                <Photo url={leftUrl} />
                <Photo url={rightUrl} />
            </div>
            <div>
                {urls.map(function (url) {
                    return <ThumbnailPhoto url={url} onClick={() => {
                        if (side === 'left') {
                            setLeftUrl(url);
                        } else {
                            setRightUrl(url);
                        }
                        setSide(side === 'left' ? 'right' : 'left');
                    }} />;
                })}
            </div>
        </>
    );
}
