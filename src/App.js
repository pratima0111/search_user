import { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import SearchBox from './components/SearchBox/SearchBox';
import Box from '@mui/material/Box';

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    const res = await axios.get('https://reqres.in/api/users?page=2');
    setUsers(res.data.data);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pt: 4,
          alignItems: 'center',
        }}
      >
        <h1>Search for a user</h1>
        <SearchBox searchChange={handleSearchChange} />
        <Dashboard dataset={users} searchQuery={searchQuery} />
      </Box>
    </div>
  );
}

export default App;
