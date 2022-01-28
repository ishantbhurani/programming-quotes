import { useState, useEffect } from "react";

const URL = "https://programming-quotes-api.herokuapp.com/Quotes/random";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const getRandomQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok)
        throw new Error(`An error has occured: ${response.status}`);
      const { author, en: quote } = await response.json();
      setAuthor(author);
      setQuote(quote);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  if (loading)
    return (
      <div className="container">
        <div className="card">
          <h1>Loading...</h1>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="container">
        <div className="card">
          <h1>Oops... Something went wrong!</h1>
        </div>
      </div>
    );

  return (
    <main>
      <div className="container">
        <div className="card">
          <h1>{quote}</h1>
          <p>&#8212; {author}</p>
          <button onClick={getRandomQuote}>Gimme another</button>
        </div>
      </div>
    </main>
  );
}

export default App;
