<script>
    import { navigate } from 'svelte-routing'
	import { GoogleAuth } from '@beyonk/svelte-social-auth/src/components.js'

	import { 
		token as storedToken, 
		userName as userName, 
		userImage as userImage} from '../../services/store'
</script>

<h1>Authenticated TODO</h1>
<div class="login-container">
	<GoogleAuth 
		text="Sign in with Google" 
		clientId="YOUR GOOGLE CLIENT ID" 
		on:auth-success={e => { 

				const profile = e.detail.user.getBasicProfile();
				const token = e.detail.user.getAuthResponse();

				$storedToken = token.id_token
				$userName = profile.getName()
				$userImage = profile.getImageUrl()
				
				navigate('/todo', { replace: false })
		}} 
	/>
</div>

<style>

.login-container{
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1{
	color: #5a7bcf;
	margin-top: 50px;
	margin-bottom: 125px;
}

</style>
