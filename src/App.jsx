import { useState, useEffect } from 'react'
import './App.css'
import * as C from "./styles"
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import {database} from './utils/firebase';
function App() {
  const [inputValue, setInputValue] = useState('')
  const [stateButton, setStateButton] = useState('Enviar')
  const [msgs, setMsgs] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    onValue(ref(database), (snapshot) => {
      setMsgs([]);
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map((msg, index) => {
          setTotal(index)
          console.log(index)
          setMsgs((msgsantigas) => [...msgsantigas, msg] ) 
        })
      }
      
    })
  }, [])
  //Paramos em: Precisa mudar a forma de organização no Firebase. Está ordenando por ordem numérica. Tem bug. 0,1,10,2,3,4,5,6,7,8,9
  const writeData = (e)=>{
    e.preventDefault();
    if(inputValue !== '' && isNaN(inputValue) == true){
      set(ref(database, `msg-${total+1}`), {
        msg:inputValue,
        time:Date(),
      }).then(setInputValue(''))
    }
  }

  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>Firebase RealTime database</h1>
      <C.listContainer>
        <C.header>Mensagens</C.header>
        <C.msgSpace>

          {msgs.map((msg, index) => <C.mensagem key={index}>Jonas - {msg.msg}</C.mensagem>)}

        </C.msgSpace>
      </C.listContainer>
      <form>
        <C.Input placeholder='Digite sua mensagem...' value={inputValue} onChange={(e)=>handleChange(e)}></C.Input>
        <C.ButtonSend type='submit' onClick={(e)=>{writeData(e)}}>{stateButton}</C.ButtonSend>
      </form>
      <footer>Web developer - Jonas Martinez</footer>
    </div>
  )
}

export default App
