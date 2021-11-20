import React from 'react';
import './tile.css';

export default class Tile extends React.Component {
    render() {
    return (

      <div className= "tile">
         <img className = "cover"src={this.props.data.image}></img>
         <TileContent data={
             {
             name : this.props.data.name,
             artists : this.props.data.artists,
             album : this.props.data.album
             }
             } />
      </div>
    )
    }
  }


  class TileContent extends React.Component {
    render() {
    return (

      <div className= "tile-content">
          <div className ="track-name">{this.props.data.name}</div>
          <div className = "track-artist">{this.props.data.artists}</div>
          <div className = "track-album">{this.props.data.album}</div>
      </div>
    )
    }
  }