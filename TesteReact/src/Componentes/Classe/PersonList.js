import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <table width="500" border="'">
        <tr>
          <td>Nome</td>
          <td>Email</td>
          <td>Acao</td>
        </tr>
        {this.state.persons.map(person =>     
            <tr>
                <td>{person.name}</td>
                <td>{person.email}</td>
            </tr>
        )}
      </table>
    )
  }
}