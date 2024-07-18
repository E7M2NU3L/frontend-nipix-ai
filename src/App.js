import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState('');
  const [output, setoutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const objectToSend = {
        'sentence': input
      };
      console.log(input);
      const endpoint = "http://localhost:8000/ai_sentiment/home"

      const response = await axios.post(endpoint, objectToSend);
      console.log(response);
      setoutput(response.data.output);
    } catch (error) {
      
    }
  }
  const handleClear = () => {
    setInput('');
  }

  return (
    <>
      <header>
        <h1>
          Nipix Ai
        </h1>
      </header>

      <br />
      <main>
        <form onSubmit={handleSubmit}>
          <input placeholder="type somethig here.." className="px-4 py-2 rounded-md" value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">
            submit
          </button>
          <button onClick={handleClear}>
            clear
          </button>
        </form>
      </main>

      <br />
      {output ? (
        <>
          {output}
        </>
      ) : (
        <>
        </>
      )}
      <br />
      <footer>
        <h1>
          Thank you
        </h1>
      </footer>
    </>
  );
}

export default App;
