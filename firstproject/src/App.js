import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop"; 

function App() { //App komponentti on funktio, joka palauttaa JSX koodia muuten se on ihan tavallinen funktio
  return (
  <div>
    <h1>Muistilista</h1>
    <Todo text='opi react'/>
    <Todo text='masteroi react'/>
    <Todo text='opi koko react kurssilla'/>
  </div>  
  );
  //täytyy olla jotain mitä voidaan renderöidä muuten ei tapahdu mitään. 
  //Selain ei näe tätä koodia, koska se on JSX koodia joka ei kerro selaimelle mitään
}

export default App; //App komponentti exportataan, jotta se voidaan importata muualle
