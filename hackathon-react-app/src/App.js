import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListArticles from './Components/ListArticles';

const url = "http://hn.algolia.com/api/v1/search?tags=front_page"

function App() {
  const [listArticles, setListArticles] = useState([])

  useEffect(() => {
    axios.get(url)
      .then(res => setListArticles(res.data.hits))
  }, [])


  return (
    <div className="App">
      <ListArticles articles={listArticles} />
    </div>
  );
}

export default App;
