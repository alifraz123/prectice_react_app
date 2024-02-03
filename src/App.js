import logo from './logo.svg';
import './App.css';
import React from 'react';
import Video from './Video';

function App() {
  let Videos = [
    {
      title: "Video 1",
      views: "1M",
      channel: "Channel 1"
    },
    {
      title: "Video 2",
      views: "2M",
      channel: "Channel 2"
    },
    {
      title: "Video 3",
      views: "3M",
      channel: "Channel 3"
    },
    {
      title: "Video 4",
      views: "4M",
      channel: "Channel 4"
    },
    {
      title: "Video 5",
      views: "5M",
      channel: "Channel 5"
    }
  ]
  return (
    <div className="App">
      {
        Videos.map((video) => (
          <Video title={video.title} views={video.views} channel={video.channel} />
        ))
      }
    </div>
  );
}

export default App;
