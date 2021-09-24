<script>
import { navigate } from 'svelte-routing';


import api from '../../services/api'
import { token as userToken } from '../../services/store'

let text

async function sendTodo(){

    const formData = {
        todoText: text
    }

    await api.post('/createtodo', formData, { 
        headers: {
            Authorization: `${$userToken}`
        }})
    
    navigate('/todo', { replace: false })
        
}

</script>

<h1>Novo Todo</h1>

<input type="text" placeholder="Digite a tarefa" bind:value={text}>
<button on:click="{() => sendTodo()}">Enviar</button>

<style>

input {
    display: flex;
    margin: 10px 25px 10px 25px;
    padding: 10px 0px 10px 10px;

    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    border-style: solid;
    border-color: #4C7AEE;
    border-radius: 20px;

    width: 300px;
    height: 30px;
}

button {
    padding: 10px;
    border: #4C7AEE solid 2px;
    background-color: #4C7AEE;
    color: white;
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
    margin-bottom: 15px;
}

button:hover {
    background-color: #648df5
}

</style>