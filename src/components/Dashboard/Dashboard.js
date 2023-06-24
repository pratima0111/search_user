import React from 'react';
import Card from '../Card/Card';
import Box from '@mui/material/Box';

const Dashboard = ({ dataset, searchQuery }) => {
  const filteredDataset = dataset.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 4,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {filteredDataset.length > 0 ? (
        filteredDataset.map((item) => <Card user={item} />)
      ) : (
        <h2>No users found...</h2>
      )}
    </Box>
  );
};

export default Dashboard;
