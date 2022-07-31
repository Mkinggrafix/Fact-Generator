import React from 'react'

const Input = ({ inputText, setInputText, select, setSelect }) => {
  return (
    <div>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="trivia">Random Facts</option>
          <option value="math">Math Facts</option>
          <option value="date">Date Facts</option>
          <option value="year">Year Facts</option>
        </select>
        <input type="number" placeholder="Enter Number ....." value={inputText} onChange={(e) => setInputText(e.target.value)} />
    </div>
  )
}

export default Input