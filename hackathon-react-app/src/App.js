import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListArticles from './Components/ListArticles';
import SearchForm from './components/SearchForm';

const url = "http://hn.algolia.com/api/v1/search?tags=front_page"

function App() {
  const [listArticles, setListArticles] = useState([])

  useEffect(() => {
    axios.get(url)
      .then(res => setListArticles(res.data.hits))
  }, [])

const handleFilter = (filters) => {
  
}



  return (
    <div className="App">
      <ListArticles articles={listArticles} />
      <SearchForm onFilter={handleFilter} />

    </div>
  );
}

export default App;
