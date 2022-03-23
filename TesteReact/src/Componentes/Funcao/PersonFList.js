import { useEffect,useState } from "react";
import axios from "axios";

export default function PersonFList(){
    const [usuarios,setUser] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'
    // const deleteUsers = () =>{
    //     axios.delete(url).then(res=>{

    //     })
    //     }

    useEffect(()=>{
        axios.get(url).then(req=>{
            const dadosusuarios=req.data
            setUser(dadosusuarios)
        })
    })
    // const detalhes=()=>{
    //     return(
    //         <div>
    //             {usuarios.map((item,index)=>
    //                 <ul>
    //                     <li key={index}>Nome:{item.name}</li>
    //                     <li key={index}>Email:{item.email}</li>
    //                     <li key={index}>Telefone:{item.phone}</li>
    //                     <li key={index}>Site:{item.website}</li>
    //                 </ul>)}
    //         </div>
    //     )
    // }
    return(
        <>
         <table>
            <tbody>
            <tr id="titulo">
                <td>Nome</td>
                <td>Email</td>
                <td>Acao</td>
            </tr>
            {usuarios.map(item=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><button onClick='' id="detalhes">Detalhes</button> <button id="excluir">Excluir</button></td>
                </tr>
                )}
            </tbody>
        </table>
        </>
    )
}



