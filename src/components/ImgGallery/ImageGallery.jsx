// import {ImageGallery} from './ImageGalleryStyle'
import ImageGalleryItem from "../ImgGalleryItem/ImageGalleryItem";
import {GAlleryUl} from "./ImageGalleryStyle";
import PropTypes from "prop-types";

const ImageGallery = ({showQuery,onClick}) => {
    return (
        <GAlleryUl>
            {showQuery.map(({webformatURL, id, tags,largeImageURL}) => (
                <ImageGalleryItem
                    key={id}
                    tags={tags}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    onClick={onClick}
                />
            ))}
        </GAlleryUl>
    )
}

export default ImageGallery;


ImageGallery.propTypes={
    showQuery:PropTypes.arrayOf(PropTypes.object).isRequired,
    id:PropTypes.number
}
