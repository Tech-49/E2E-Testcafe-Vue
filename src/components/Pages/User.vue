<template>
	<div>
		<h1>User Information</h1>
		User id : {{ $route.params.id }}

		<br />
		<br />

		<button @click="goHome" class="btn btn-info">
			Go Home
		</button>
	</div>	
</template>

<script>
export default {
	methods: {
		goHome(){
			this.$router.push('/home');
		}
	},
}
</script>

<style>

</style>