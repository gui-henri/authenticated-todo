<script>
	import { Router, Route, Link } from "svelte-routing"

	import Login from './pages/login/index.svelte'
	import Todo from './pages/todo/index.svelte'
	import Create from './pages/create/index.svelte'

</script>

<main>
	<div class="app-container">
		<Router>
			<!-- App Routes -->
			<Route path="/" component="{Login}" />
			<Route path="/create">
				<Create />
			</Route>
			<Route path="/todo" >
				<Todo />
			</Route>
		
			<!-- Prevent 404 error redirecting to Login screen -->
			<Route path="/*" component="{Login}" />
		</Router>
	</div>

</main>

<style>

main {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	justify-content: center;
	background-color: #c4c4c4;
}

.app-container{

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top: 75px;
	margin-bottom: 15px;

	width: 520px;
	top: 20px;

	background: #ECECEC;
	border: 10px solid #4C7AEE;
	box-sizing: border-box;
	border-radius: 20px;

}

</style>