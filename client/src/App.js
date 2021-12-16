import './App.css';
import { useEffect, useState } from 'react';
import api from './api-client';
import TopicList from './topic-list/topic-list';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api
      .getTopics()
      .then((res) => setTopics(res))
      .catch((err) => console.error(err));
  }, []);

  return <TopicList topics={topics} />;
}

export default App;
