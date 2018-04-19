import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableHead from './components/tablehead.js';
import Campers from './components/campers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentScores: [],
      alltimeScores: [],
      currentScores: [],
      toggle1: true,
      toggle2: false
    };
  }
  componentDidMount() {
    console.log('didmount');
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          recentScores: data,
          currentScores: data,

        });
      });
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          alltimeScores: data
        });
      });
  }

  activeList = (event) => {
    console.log(event.target);
    if (event.target.id === 'recentHigh') {
      this.setState({
        currentScores: this.state.recentScores,
        toggle1: true,
        toggle2: false
      });
    }
    if (event.target.id === 'alltimeHigh') {
      this.setState({
        currentScores: this.state.alltimeScores,
        toggle2: true,
        toggle1: false
      });
    }
  }

  render() {

    return (
      <div className="content">
        <h2 className="title">LeaderBoard</h2>
        <table>
          <thead>
            <tr className="tablehead">
              <TableHead text="#" />
              <TableHead text="Camper Name" />
              <TableHead
                listId='recentHigh'
                text='Points in the last 30 days'
                selectList={this.activeList}
                active={this.state.toggle1}
              />
              <TableHead
                listId='alltimeHigh'
                text='Alltime points'
                selectList={this.activeList}
                active={this.state.toggle2}
              />
            </tr>
          </thead>
          <tbody>
            {
              this.state.currentScores.map((data, index) => {
                return <Campers
                  img={data.img}
                  id={index + 1}
                  username={data.username}
                  recent={data.recent}
                  alltime={data.alltime} />;

              })
            }


          </tbody>
        </table>
      </div>
    );


  }
}


export default App;
