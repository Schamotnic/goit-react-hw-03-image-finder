
import PropTypes from "prop-types";
import {LiGalery,ImageGallery} from './ImgGalleryStyle'
const ImageGalleryItem  =({id,webformatURL,tags,onClick,largeImageURL}) =>{
  return(
<LiGalery key={id}>
  <ImageGallery
  src={webformatURL}
  alt={tags}
  onClick={()=>onClick({largeImageURL,tags})}
  />
</LiGalery>
)
}
ImageGalleryItem.propTypes ={
  webformatURL:PropTypes.string.isRequired,
  tags:PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
   
}

export default ImageGalleryItem;


