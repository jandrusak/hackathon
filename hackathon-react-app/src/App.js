import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListArticles from './Components/ListArticles';
import SearchForm from './Components/SearchForm';

const url = "http://hn.algolia.com/api/v1/search?tags=front_page"

function App() {
  const [listArticles, setListArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState({});

  useEffect(() => {
    axios.get(url)
      .then(res => {
      setListArticles(res.data.hits);
      setFilteredArticles(res.data.hits);
  }); }, []);

const handleFilter = (query) => {
  const filtered = listArticles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase())
    );
  setFilteredArticles(filtered);
};



  return (
    <div className="App">
      <SearchForm onFilter={handleFilter} />
      <ListArticles articles={filteredArticles} />

    </div>
  );
}

export default App;
