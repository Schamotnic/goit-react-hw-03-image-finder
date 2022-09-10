import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay,ModalContent } from './ModalStyle';

// import { ModalOverlay } from './ModalStyle';
const modalRoot = document.querySelector('#modal-root')

class  Modal extends Component{
  
   componentDidMount(){
      window.addEventListener('keydown',this.hendelKeyDown)
   }

componentWillUnmount(){
   window.removeEventListener('keydown',this.hendelKeyDown)
}

   hendelKeyDown = event =>{
      if(event.code === 'Escape'){
         this.props.onClose()
      }
   }

handleBackDropClick = event =>{

   if(event.target === event.currentTarget){
      this.props.onClose()
   }
}

   render(){
      return createPortal(
<ModalOverlay onClick={this.handleBackDropClick}>
   <ModalContent>{this.props.children}</ModalContent>
</ModalOverlay>,modalRoot
      )
   }
}
export default Modal;