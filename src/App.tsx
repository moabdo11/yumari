import React from 'react';
import { MantineProvider, Text, Button, Paper, Loader } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS 
      theme={{
        components: {
          Text: {
            styles: {
              root: { 
                fontSize: 20,
                fontFamily: "Open Sans",
              },
            },
          },
        },
        colorScheme: "dark",
        loader: 'bars',
        colors: {
          blue:[
            "#FF6B6B", 
            "#BE4BDB", 
            "#15AABF", 
            "#82C91E", 
            "#FFD43B",
            "#E8590C", 
            "#A5D8FF", 
            "#5F3DC4", 
            "#099268", 
            "#66D9E8"
          ,]
        },
      }}
    
    >
      
      <Paper>
        <Text>Welcome to Mantine!</Text>
        <Button>Hello Mo!</Button>
        <Button>Hello Mo!</Button>
        <Loader />
      </Paper>
    </MantineProvider>
  );
}

export default App;
