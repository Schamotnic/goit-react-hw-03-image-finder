import PropTypes from 'prop-types';
import {ButtonLoadMore} from './ButtonStyle'



const ButtonLoad = ({onClick}) => {
   return(
<ButtonLoadMore type="button" onClick={onClick} >
Load More
</ButtonLoadMore>
)
   
}


ButtonLoad.propTypes={
   onClick:PropTypes.func.isRequired
}
  export default ButtonLoad;