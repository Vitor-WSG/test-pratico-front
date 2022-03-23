import { useEffect,setState, useState } from "react";
import axios from "axios";

export default function AddUserFList(){
    const url2 = 'https://jsonplaceholder.typicode.com/users'
    const [newUser, setNome] = useState('')
  
    const gravar =()=>{
        axios.post((url2),{newUser}).then(res =>{
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

    const addUser = async()=>{
        let cadastro = document.querySelector('.newUsers')
        if (cadastro.style.display ==='none' || cadastro.style.display ===''){
            cadastro.style.display = 'block'
        } else {
            cadastro.style.dysplay = 'none'
        }
        document.querySelector('.newUsers').classList.add('fundo')
    }
    const cancelUser = async() =>{
        let cancelar =  document.querySelector('.newUsers')
        if (cancelar.style.display ==='block'){
            cancelar.style.display ='none'
        }else {
            cancelar.style.display = 'block'
        }
    }

    return(
        <div>
            <button onClick={addUser} id="adicionar">Adicionar Usuario</button>
            <div className="newUsers">
                <div className="Cadusuarios">
                    <h2 id="titulo">Inclusão de novo usuario</h2>
                    <div>Nome: </div>
                    <input id="name" type="text" onChange={setNome}/>
                    <div>Email: </div>
                    <input id="email" type="email" />
                    <div>Telefone: </div>
                    <input id="phone" type="phone" />
                    <div>Site: </div>
                    <input id="site" type="site" />
                </div>
                <div>
                    <button onClick={gravar} id="gravar">Gravar</button>
                    <button onClick={cancelUser} id="cancelar">Cancelar</button>
                </div>
            </div>
        </div>
    )

}