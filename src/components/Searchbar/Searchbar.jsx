
import {Component} from 'react';
import {ImSearch} from 'react-icons/im'
import {DivSearchBar,FormStyle,ButtonStyle,SpanStyle,InputStyle} from './SearchBarStyle'
  
 class  Searchbar extends Component {

  state={
    query:'',
  }

   handelNameChange = event =>{
     this.setState({  query:event.currentTarget.value.toLowerCase()});
   }

   handleSubmit = event =>{
    event.preventDefault();
if(this.state.query.trim()=== ''){
  alert('Введіть пошук фото')
  return;
}
    this.props.onSubmit(this.state.query);
    this.setState({query:''});
   }

   render(){
     const {query}= this.state
    return(
      <DivSearchBar>
      <header>
      <FormStyle onSubmit={this.handleSubmit}>
        <ButtonStyle type="submit">
        <ImSearch style={{marginRight:8}}/>
          <SpanStyle >Search</SpanStyle>
        </ButtonStyle>
    
        <InputStyle
        name='query'
          type="text"
          placeholder="Search images and photos"
          value={query}
          onChange ={this.handelNameChange}
          />
         
        </FormStyle>
      </header> 
      </DivSearchBar>
     )
   }
   
  }

  export default Searchbar;
 
   
     
     
  
  
             
             