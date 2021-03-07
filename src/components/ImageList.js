import React from "react";
import "./Imagelist.css";

const ImageList = props => {
    const images = props.images.map(({description, id, urls}) => {
            return <img alt={description} key={id} src={urls.full}/>
        });

    return (
        <div className="image-list">{images}</div>
    )
}
 
export default ImageList;