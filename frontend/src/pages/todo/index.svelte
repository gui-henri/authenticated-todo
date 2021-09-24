<script>
    import api from '../../services/api'
    import { navigate } from 'svelte-routing'

    import { 

        userName as userName, 
        token as userToken, 
        userTodos as userTodos,
        userImage as userImage 

    } from '../../services/store'

    async function getTodos() {
         await api.get('gettodos', {
            headers: {
                Authorization: `${$userToken}`
            }
        }).then((response) => {
            $userTodos = response.data
        })
    }

    async function deteleTodo(todoId){
        await api.delete('/delete', {
            headers: {
                Authorization: `${$userToken}`
            },
            data: {
                id: todoId
            }
        })
    } 
    function signOut(){
        navigate('/', { replace: false })
    }
    function newTodo(){
        navigate('/create', { replace: false })
    }

</script>

<header>
    <div id="left">
        <h1>Olá, {$userName}</h1>
        <p>Aqui está sua lista de tarefas</p>
    </div>
    <div id="right">
        <img id="user-image" src="{$userImage}" alt="user">
        <img id="logout-button" src="logout_icon.svg" alt="click to log out" on:click={() => signOut()}>
    </div>
</header>
<hr/>
<button id="new-todo" on:click={() => newTodo()}>Nova tarefa</button>
<div class="container">
    {#await getTodos()}
        <p>Getting your to dos!</p>
    {:then todos} 
        {#each $userTodos as todo}
            <div class="todo-item">
                <input type="checkbox" on:click={() => deteleTodo(todo.id)} />
                <p>{todo.text}</p>
            </div>
        {/each}
    {/await}
</div>

<style>

#new-todo{
    padding: 10px;
    border: #4C7AEE solid 2px;
    background-color: #4C7AEE;
    color: white;
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
    margin-bottom: 15px;
}
#new-todo:hover{
    background-color: #648df5
}

#right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
#user-image {
    border-radius: 50%;
    border: #4C7AEE solid 2px;
    width: 90%;
}
#logout-button{
    cursor: pointer;
    margin-left: 10px;
}

header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 480px;
    margin-bottom: 10px;
}
.container{
    width: 480px;
}

hr{
    width: 75%;
    color: #5a7bcf;
}

h1{
    margin: 25px 25px 10px 25px;
    color: #273864;
}

header p{
    color: #273864;
    margin: 10px 25px 10px 25px;
}

.todo-item{
    display: flex;
    margin: 10px 25px 10px 25px;
    padding: 10px 0px 10px 10px;

    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    border-style: solid;
    border-color: #4C7AEE;
    border-radius: 20px;
}

p {
    color: #4C7AEE;
}
</style>