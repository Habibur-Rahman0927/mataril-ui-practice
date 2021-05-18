import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import News from './Component/News/News';

function App() {
  const [newshow, setNewshow] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-04-18&sortBy=publishedAt&apiKey=716da15039824847acf1ae64cebed122')
      .then(res => res.json())
      .then(data => setNewshow(data.articles))
      .catch(error => console.log(error))
  }, []);
  return (
    <div>
      <Header></Header>
      {
        console.log(newshow)
      }
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            newshow.map(newshow => <News newshow={newshow}></News>)
          }
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
