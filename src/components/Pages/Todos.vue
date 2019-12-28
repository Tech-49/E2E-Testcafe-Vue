<template>
	<div id="app" class="container">
		<h1 class="text-center">ToDo App</h1>
		<div class="alert alert-success" v-if="successMessage!='' ">
			{{ successMessage }}
		</div>
		<br>
		<form>
			<div class="form-group">
				<label for="title">Enter Title</label>
				<input type="text" class="form-control" id="title" placeholder="Add title" v-model="title">
			</div>
			<button type="submit" @click.prevent="addToDo" class="btn btn-primary">
				{{ btnName }}
			</button>
		</form>
		<br>
		<table class="table">
			<thead>
				<tr>
				<th scope="col">#</th>
				<th scope="col">Title</th>
				<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(todo,index) in todos" :key="index">
					<th scope="row"> {{ index+1 }}</th>
					<td>{{ todo.title }}</td>
					<td>
						<button class="btn btn-primary" @click="editTodo(index)">Edit</button> 
						<button @click="deleteTodo(index)" class="btn btn-danger">Delete</button> 
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	data() {
		return {
			todos:[
					{ title:"Do something!" },
					{ title:"Do something else!" }
				],
			title:"",
			btnName:"Add",
			successMessage:"",
			tmpIndex:''
		}		
	},
	methods: {
		addToDo:function(){
			if(this.btnName == "Update"){
				// console.log(this.todos[this.tmpIndex]);
				this.todos[this.tmpIndex].title = this.title;
				this.successMessage = "Item UPDATED successfully."
			}
			else{
				this.todos.push(
					{ title : this.title}
				);	
			this.successMessage = "Item ADDED successfully."

			}
		},
		deleteTodo:function(index){
			if(confirm("Are you sure?")){
				// console.log()
				this.todos.splice(index,1);				
			}
		},
		editTodo:function(index){
			this.title = this.todos[index].title;
			this.btnName = "Update";
			this.tmpIndex = index;
		}
	},
}
</script>