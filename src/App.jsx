
import QupteButton from "./components/QupteButton"
import quoteDB from "./db/quote.json"
import arrayColors from "./db/arrayColors.js"
import { useState } from "react"
import QuoteBox from "./components/QuoteBox"

function App() {


  const getRandomArray = (array) => {
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomArray(quoteDB))
  const [color, setColor] = useState(getRandomArray(arrayColors))



  const getNewValues = () => {
    const newQuote = getRandomArray(quoteDB)
    const newColor = getRandomArray(arrayColors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor: color
  }

  const colorObject = {
    color: color
  }

  return (
    <div className="App" style={backgroundObject}>
      <h1>Famous phrase of the day</h1>
      <QuoteBox
        quote={quote}
        getNewValues={getNewValues}
        backgroundObject={backgroundObject}
        colorObject={colorObject}
      />

    </div>
  )
}

export default App
