import React from 'react';
import axios from 'axios';

export default class AddUserList extends React.Component {
  state = {
    name: '',
    email:'',
    phone:'',
    website:''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ phone: event.target.value });
    this.setState({ website: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      website:this.state.website,
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Usuario Cadastrado")
        document.querySelector('#name').value=''
        document.querySelector('#email').value=''
        document.querySelector('#phone').value=''
        document.querySelector('#site').value=''
        document.querySelector('#name').focus()
      })
  }

  render() {
    return (
      <div>
        <button onClick='' id="adicionar">Adicionar Usuario</button>
        <form onSubmit={this.handleSubmit}>
          <div className="Cadusuarios">
                    <h2 id="titulo">Inclusão de novo usuario</h2>
                    <div>Nome: </div>
                    <input id='name' type="text" name="name" onChange={this.handleChange}/>
                    <div>Email: </div>
                    <input id='email' type="email" name="email" onChange={this.handleChange}/>
                    <div>Telefone: </div>
                    <input id='phone' type="phone" name="phone" onChange={this.handleChange}/>
                    <div>Site: </div>
                    <input id='site' type="site" name="website" onChange={this.handleChange}/>
          </div>
          <button id='gravar' type="submit">Gravar</button>
          <button id='cancelar'>Cancelar</button>
          
        </form>
      </div>
    )
  }
}