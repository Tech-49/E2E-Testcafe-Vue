<template>
  <div>
	  <div class="card text-center">
			<div class="card-header">
				<ul class="nav nav-pills card-header-pills">
					<li class="nav-item">
						<!-- <a class="nav-link active" href="#">Home</a> -->
						<router-link active-class="active" class="nav-link" tag="a" to="/home">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link active-class="active" class="nav-link" tag="a" to="/about">About</router-link>
					</li>
					<li class="nav-item">
						<router-link active-class="active" class="nav-link" tag="a" to="/contact">Contact</router-link>
					</li>
					<li class="nav-item">
						<router-link active-class="active" class="nav-link" tag="a" to="/todo">Todos</router-link>
					</li>
				</ul>
			</div>
			<div class="card-body container">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>				 
			</div>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>