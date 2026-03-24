import { useState } from "react";

function App() {

  const [text,setText] = useState("");
  const [result,setResult] = useState("");

  const checkScam = () => {

    const scamWords = ["lottery","otp","bank","password","prize","winner","urgent"];

    let score = 0;

    scamWords.forEach(word=>{
      if(text.toLowerCase().includes(word)){
        score++;
      }
    });

    if(score >= 3){
      setResult("🚨 SCAM ALERT");
    }
    else if(score === 2){
      setResult("⚠ Suspicious");
    }
    else{
      setResult("✅ Safe");
    }

  };

  return (

    <div style={{textAlign:"center",marginTop:"100px"}}>

      <h1>Scam Detection System</h1>

      <textarea
      rows="6"
      cols="50"
      placeholder="Paste email / message / URL"
      onChange={(e)=>setText(e.target.value)}
      />

      <br/><br/>

      <button onClick={checkScam}>Check</button>

      <h2>{result}</h2>

    </div>
  );
}

export default App;