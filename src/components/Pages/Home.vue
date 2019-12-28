<template>
	<div>
		<h1>Users</h1>
		<table class="table">
			<thead>
				<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user.id">
					<td>{{ user.id }}</td>
					<td>{{ user.name }}</td>
					<td>
						<router-link class="btn btn-info" tag="a" :to="{name: 'userRoute', params:{id:user.id}}"> View</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>	
</template>

<script>
export default {
	data() {
		return {
			counter : 0,
			users:[
				{id:1,name:"John"},
				{id:2,name:"Hardik"},
				{id:3, name:"Becky"},
			]
		}
	},
}
</script>

<style>

</style>