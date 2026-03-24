import { useState } from "react";

function App() {

  const [text,setText] = useState("");
  const [result,setResult] = useState("");
  const [color,setColor] = useState("");

  const checkScam = () => {

    const scamWords = [
      "lottery",
      "otp",
      "bank",
      "password",
      "urgent",
      "winner",
      "click link",
      "verify account",
      "free money"
    ];

    let score = 0;

    scamWords.forEach(word=>{
      if(text.toLowerCase().includes(word)){
        score++;
      }
    });

    if(score >= 3){
      setResult("🚨 SCAM ALERT");
      setColor("red");
    }
    else if(score === 2){
      setResult("⚠ Suspicious");
      setColor("orange");
    }
    else{
      setResult("✅ Safe");
      setColor("green");
    }

  };

  return (

    <div style={{textAlign:"center",marginTop:"80px"}}>

      <h1>🔍 Scam Detection System</h1>

      <p>Paste Email / Message / Website Link</p>

      <textarea
      rows="6"
      cols="60"
      placeholder="Example: You won a lottery click here..."
      onChange={(e)=>setText(e.target.value)}
      />

      <br/><br/>

      <button onClick={checkScam}>
        Check Scam
      </button>

      <h2 style={{color:color}}>{result}</h2>

    </div>
  );
}

export default App;