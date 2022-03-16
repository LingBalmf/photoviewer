import React, { useState } from "react";
import './PhotoViewer.css';
import { ThumbnailPhoto } from "./ThumbnailPhoto";
import { Photo } from "./Photo";

export function PhotoViewer({ urls }) {
    const [leftUrl, setLeftUrl] = useState(urls[0]);
    const [rightUrl, setRightUrl] = useState(urls[1]);
    const [side, setSide] = useState('left');

    return (
        <>
            <div >
                <div className="photo__container" >
                    <Photo url={leftUrl} />
                    <Photo url={rightUrl} />
                </div>
                <div className="thumb__container">
                    {urls.map(function (url) {
                        return <ThumbnailPhoto url={url} selected={url === leftUrl || url === rightUrl} onClick={() => {
                            if (side === 'left') {
                                setLeftUrl(url);
                            } else {
                                setRightUrl(url);
                            }
                            setSide(side === 'left' ? 'right' : 'left');
                        }} />;
                    })}
                </div>
            </div>
        </>
    );
}
