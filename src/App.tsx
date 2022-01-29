import React, { useEffect } from 'react';
import PrivateOffece from './pages/PrivateOffece';
import './style/App.css'
import { useActions } from './hooks/useActions';

function App() {
  const { fetchNews, fetchUser, } = useActions()

  useEffect(() => {
    fetchNews();
    fetchUser();
  }, [])
  return (
    <div className="app">
      <PrivateOffece />
    </div>
  );
}

export default App;
