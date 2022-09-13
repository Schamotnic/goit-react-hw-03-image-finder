// import { ToastContainer} from 'react-toastify';
import {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal'
import Loader from './Loader/Loader'
import {AppWrapper} from './aapStyle'
import ImageGallery from './ImgGallery/ImageGallery';
import ButtonLoad from './Button/Button'

const API_KEY = '26322794-ee74ff0d80e575e4a05e42d55';
const PER_PAGE = 12;


class App extends Component {

    state = {
      currentPage: 1,
      searchObject: '',
        hits: [],
        error: null,
        isLoading: false,
        showModal: false,
        tags: '',
        largeImageURL: ''

    }

    componentDidUpdate(_, prevState){
        const prevPage = prevState.currentPage
        const prevSearchObject = prevState.searchObject
        if(prevPage !== this.state.currentPage || prevSearchObject  !== this.state.searchObject ) {
          this.fetchQuery() 
        }
    }



    fetchQuery = () => {
        const {searchObject, currentPage} = this.state
        this.setState({isLoading: true,})
        fetch(`https://pixabay.com/api/?q=${searchObject}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error('Нет фото на такой запрос'))
            })
            .then(({hits}) => {
                if(!hits.length) {
                    return Promise.reject(new Error("Проверьте ввод запроса"))
                }

                const images=hits.map(({webformatURL,id,tags,largeImageURL})=>({
                    webformatURL,id,tags,largeImageURL
                }))

                // console.log(images)
                this.setState((prevState) => ({
                    hits: [...prevState.hits, ...images]
                }))
            })
            .catch(error => this.setState({error}))
            .finally(() => this.setState({isLoading: false}))
    }


    onLoadMoreButton=()=>{
        this.setState(prevState =>({currentPage:prevState.currentPage+1}))
    }


    handleFormSubmit = searchObject => {
        if(searchObject !== this.state.searchObject)
        {this.setState({
          searchObject:searchObject,
            currentPage:1,
            hits:[],
            error:null
        })}
             
       
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({showModal: !showModal}))
    }


    onModal = ({largeImageURL, tags}) => {
        this.setState({
            largeImageURL: largeImageURL,
            tags: tags,
        });
        this.toggleModal();
    };


    render(){
        const {hits, error, isLoading, showModal, tags, largeImageURL } = this.state
        const renderButtonLoadMore = hits.length > 0 && !isLoading


        return (
            
          <AppWrapper>
            <Searchbar onSubmit={this.handleFormSubmit}/>
            {error && <h1>{error.message}</h1>}
           {hits.length  >0 && <ImageGallery showQuery={hits} onClick={this.onModal}/>}  
            {isLoading && <Loader/>}
            {renderButtonLoadMore && <ButtonLoad onClick={this.onLoadMoreButton}/>}
            {showModal && <Modal onClose={this.toggleModal}>
                <img src={largeImageURL} alt={tags}/>
            </Modal>}
      </AppWrapper>
        )
    }
}

export default App;
