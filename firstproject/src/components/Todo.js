import {useState} from 'react'; //useState funktio on React kirjastosta
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
  const [modalIsOpen, setModalIsOpen] = useState(false); //Kun setModalIsOpen kutsutaan, niin modalIsOpen muuttuu trueksi ja modal avautuu
    
  function deleteHandler(){
      setModalIsOpen(true); //Kun deleteHandler kutsutaan, niin setModalIsOpen kutsutaan ja modal avautuu
    }
    
    function closeModalHandler(){
      setModalIsOpen(false); //Kun closeModalHandler kutsutaan, niin setModalIsOpen kutsutaan ja modal sulkeutuu
    }

    return (
      <div className='card'>
        <h2>{props.text}</h2>
        <div className="actions">
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>
    )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>} {/*Jos modalIsOpen on true, niin backDrop komponentti renderöidään*/}
        
      </div>
    );
}

export default Todo; //function nimi kannattaa olla isolla kirjaimella