<template>
	<div>
			<h1>Oops! nothing to see here!</h1>
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
	}
}
</script>

<style>

</style>