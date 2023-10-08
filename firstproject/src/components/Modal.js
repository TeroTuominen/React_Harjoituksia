function Modal(props){

    function cancelHandler(){
        props.onCancel(); //Kun cancelHandler kutsutaan, niin props.onCancel kutsutaan ja modal sulkeutuu
    }
        //Kun cancelHandler kutsutaan, niin setModalIsOpen kutsutaan ja modal sulkeutuu
    
    function confirmHandler(){
        props.onConfirm(); //Kun confirmHandler kutsutaan, niin props.onConfirm kutsutaan ja modal sulkeutuu
    }

    return (
    <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
        <button className='btn' onClick={confirmHandler}>Confirm</button>
    </div>
    );
}

export default Modal;