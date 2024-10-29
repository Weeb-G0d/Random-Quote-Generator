import { useState } from 'react'
import './App.css'
import quotes from './assets/bunchofquotes.json'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

interface Quote {
  quote: string;
  author: string;
}
const getRandomQuote= (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
const getRandomColor= ():string =>{
  const red= Math.floor(Math.random() * 250);
  const green = Math.floor(Math.random() * 250);
  const blue =Math.floor(Math.random() * 250);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition= "all 1s";
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [color,setColor] =useState<string>(getRandomColor());
  const changeQuote= () =>{
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }
  
  return <div className='wbody' style={{backgroundColor : color, transition}}>
  
  <div id="quote-box">
    <div id="quote-content">
        <FaQuoteLeft size="30" />
        <h2 id="text" style={{color : color}}>{quote.quote}</h2>
        <FaQuoteRight size="30" />
        <h4 id="author" style={{color : color}}>-{quote.author}</h4>
     </div>
       <div className='buttons'>
          <a href="twitter.com/intent/tweet"
          id="tweet-quote"
          target='_blank'
          style = {{ backgroundColor:color ,color: 'white', marginRight:"10px"}}
          ><FaTwitter size="15"/></a>
          <button id="new-quote" onClick={changeQuote} style={{color : 'white', backgroundColor:color}}>Change Quote</button>
       </div>
  </div>

  </div>

  
}

export default App
