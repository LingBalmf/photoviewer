import './PhotoViewer.css';

export function ThumbnailPhoto({url, selected, onClick}) {
    return (
        <span>
            <img className={`thumbnail ${selected ? "selected": "" }`} src={url} alt="Lovely"  onClick={onClick} />
        </span>
    )
}