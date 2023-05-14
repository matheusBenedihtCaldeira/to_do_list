import React, { Component } from 'react';
//Form
import { FaPlus } from 'react-icons/fa';
import './Main.css';
export default class Main extends Component {
  state = {
    novaTask: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista ed Tarefas</h1>

        <form className="form" action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
