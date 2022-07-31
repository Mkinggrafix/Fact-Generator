import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Box from "./components/Box"
import Instruct from "./components/Instruct"

function App() {
  const [text, setText] = useState('')
  const[inputText, setInputText] = useState('')
  const[select, setSelect] = useState('trivia')

  useEffect(() =>{
    fetch(`http://numbersapi.com/${inputText}/${select}`)
    .then(response => response.text())
    .then(data => {
      let result = data

      setText(result)
    })

  },[inputText, select])

  return (
    <div className="container">
      <div className="box">
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Box text={text} inputText={inputText} setInputText={setInputText} select={select} setSelect={setSelect} />} />
                <Route path="/instruct" element={<Instruct />} />

            </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
