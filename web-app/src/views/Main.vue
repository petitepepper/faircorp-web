<template>
	<div>
		<el-container>
			<!-- SIDE BAR -->
			<el-aside width="200px">
				<el-menu :default-openeds="['1']">
					<el-submenu index="1">
						<template slot="title">Faircorp</template>
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
						<template slot="title">About Author</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">LinkedIn</el-menu-item>
							<el-menu-item index="2-2">Github</el-menu-item>
							<el-menu-item index="2-3">Personal Page</el-menu-item>
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
		name: "Main"
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
</style>
