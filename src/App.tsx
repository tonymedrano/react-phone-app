import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import AppList from "./components/app-list/app-list";
import AppListItem from "./components/app-list-item/app-list-item";

function App() {
  const [data, setData] = useState({ phones: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await axios(
        'http://localhost:8081/phones',
      );
 
      setData(result.data);
    };
 
    fetchData();
    
  }, []);

  return (
    <div className="App">
      <h1>Phone List</h1>
      <hr />
      <AppList>
      {data.phones.map((phone: any) => (
        <AppListItem 
        key={phone.id}
        name={phone.name}
        image={phone.image}
        description={phone.description}
        color={phone.color}
        />
      ))}
      </AppList>
    </div>
  );
}

export default App;
