import React from 'react';

const ImageList = (props) => {
    const imagesURLs = props.images.map(({id, description, urls}) => {
        return <img key={id} alt={description} src={urls.regular} />
    });

    return (
        <div>
            {imagesURLs}
        </div>
    );
}

export default ImageList;