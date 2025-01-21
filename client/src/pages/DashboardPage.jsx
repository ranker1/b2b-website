import React from 'react';
import { Drawer, List, ListItem, ListItemText, Container, Typography, Grid, Paper } from '@mui/material';

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: 240, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}
      >
        <List>
          {['Overview', 'Reports', 'Settings'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container sx={{ marginLeft: 240, padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '1rem' }}>
              <Typography variant="h6">Metric 1</Typography>
              <Typography variant="h4">123</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '1rem' }}>
              <Typography variant="h6">Metric 2</Typography>
              <Typography variant="h4">456</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: '1rem' }}>
              <Typography variant="h6">Metric 3</Typography>
              <Typography variant="h4">789</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashboardPage;
