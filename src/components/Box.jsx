import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from "./Input"
import Res from "./Res"

const Box = ({ text, inputText, setInputText, select, setSelect }) => {

  useEffect(() => {
    infoHandler()
  }, [select])

  let [info, setInfo] = useState('random')

const infoHandler = () => {
  switch (select) {
    case 'trivia':
      setInfo('random')
      break;
    
    case 'math':
      setInfo('math')
      break;

    case 'date':
      setInfo('date')
      break;
    
      case 'year':
        setInfo('year')
        break;
  
    default:
      break;
  }
}

  return (
    <div className="_box">
        <p>Enter a number, get a {info} fact</p>

        <Input inputText={inputText} setInputText={setInputText} select={select} setSelect={setSelect} />
        {inputText ? <Res text={text} /> : ''}

    <Link to="/instruct">Instruction</Link>
    </div>
  )
}

export default Box