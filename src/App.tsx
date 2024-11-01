import { useState } from 'react'
import './App.css'
import quotes from './assets/bunchofquotes.json'
import FaTwitter from './FaTwitter.tsx';
import FaQuoteLeft from './FaQuoteLeft.tsx';
import FaQuoteRight from './FaQuoteRight.tsx';


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
  const tweeterMsg= `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.quote}" - ${quote.author}`
  )}`;
  return <div className='wbody' style={{backgroundColor : color, transition}}>
  
  <div id="quote-box">
    <div id="quote-content">
    <FaQuoteLeft/>
        <h2 id="text" style={{color : color}}>{quote.quote}</h2>
        <FaQuoteRight/>
        <h4 id="author" style={{color : color}}>-{quote.author}</h4>
     </div>
       <div className='buttons'>
          <a href={tweeterMsg}
          id="tweet-quote"
          target='_blank'
          style = {{ backgroundColor:color ,color: 'white', marginRight:"10px"}}
          ><FaTwitter /></a>
          <button id="new-quote" onClick={changeQuote} style={{color : 'white', backgroundColor:color}}>Change Quote</button>
        
       </div>
       <footer style={{ marginTop: '25px ', color: color, textAlign: 'center', fontFamily:'cursive' }}>
          © 2024 Bishes Maharjan
        </footer>
  </div>

  </div>

  
}

export default App
