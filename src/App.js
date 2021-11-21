import React from 'react';
import './App.css';
import './tile/tile'
import axios from 'axios';
import Tile from './tile/tile';

export default class App extends React.Component {
    state = {
        tracks: []
    }

    componentDidMount() {
      axios.get(`http://127.0.0.1:8000/api/songs`).then(res => {
            const tracks = (res.data.songs);
            this.setState({ tracks });
          })
    }
  
    render() {
    return (
      <div>
        { this.state.tracks.map(track => <Tile data={{
                            name: track.name,
                            artists : track.artists,
                            album : track.album,
                            image : track.image,
                            spotify_link: track.spotify_link
        }}/>)}
      </div>
    )
    }
  }