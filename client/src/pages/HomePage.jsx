import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Your App Name</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <header style={{ padding: '2rem 0', textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>Welcome to Your App</Typography>
          <Typography variant="h5" paragraph>Discover amazing features and seamless experience.</Typography>
          <Button variant="contained" color="primary" href="/dashboard">Get Started</Button>
        </header>
        <section style={{ padding: '2rem 0' }}>
          <Typography variant="h4" gutterBottom>Features</Typography>
          <Typography variant="body1">- Feature 1</Typography>
          <Typography variant="body1">- Feature 2</Typography>
          <Typography variant="body1">- Feature 3</Typography>
        </section>
      </Container>
      <footer style={{ padding: '1rem 0', textAlign: 'center' }}>
        <Typography variant="body2">© 2025 Your Company Name. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default HomePage;
