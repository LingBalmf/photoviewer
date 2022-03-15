export function ThumbnailPhoto(props) {
    const url = props.url;
    const onClick = props.onClick;

    return (
        <span>
            <img className="photoviewer-image" src={url} alt="Lovely" onClick={onClick} />
        </span>
    )
}