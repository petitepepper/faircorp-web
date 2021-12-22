<template>
	<div>
		<el-container>
			<!-- SIDE BAR -->
			<el-aside width="200px">
				<el-menu :default-openeds="['1']">
					<el-submenu index="1">
						<template slot="title"><span class="navigation">Faircorp</span></template>
						<el-menu-item-group>
							<el-menu-item index="1-1">
								<router-link to="/faircorp/rooms">Room List</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								<router-link to="/faircorp/windows">Window List</router-link>
							</el-menu-item>
							<el-menu-item index="1-3">
								<router-link to="/faircorp/heaters">Heater List</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><span class="navigation">About Author</span></template>
						<el-menu-item-group>
							<el-menu-item index="2-1">
								<router-link to="/author">Who am I</router-link>
							</el-menu-item>
						
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>

			<!-- HEADER -->
			<el-container>
				<el-header style="text-align: right; font-size: 12px">
					<span>Ecole Mines Saint-Etienne</span>
				</el-header>

				<el-main>
					<router-view/>
				</el-main>
			</el-container>
		</el-container>


	</div>
</template>

<script>
	export default {
		name: "Main",
		data(){
			return{
				linkedinURL:"https://www.linkedin.com/in/wenjing-ye-794116202/",
				githubURL:"https://github.com/petitepepper"
			};
		},
		
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
	
	.navigation{
		font:"microsoft sans serif";
		font-size:large;
		font-weight: 300;
	}
</style>
