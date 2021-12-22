<template>
	<el-descriptions title="Author">
		<el-descriptions-item label="Name">{{name}}</el-descriptions-item>
		<el-descriptions-item label="Institution">{{institution}}</el-descriptions-item>
		<el-descriptions-item label="Email">{{email}}</el-descriptions-item>
		<el-descriptions-item label="LinkedIn">
			<a href=linkedin>{{linkedin}}</a>
		</el-descriptions-item>
		<el-descriptions-item label="GitHub">
			<a href=github>{{github}}</a>
		</el-descriptions-item>
	</el-descriptions>
</template>

<script>
	export default {
		name: "Author",
		data() {
			return {
				name: "YE Wenjing",
				institution: "Ecole Mines Saint-Etienne",
				email: "wenjing.ye@etu.emse.fr",
				linkedin: "https://www.linkedin.com/in/wenjing-ye-794116202/",
				github: "https://github.com/petitepepper"
			}
		}
	}
</script>

<style>
</style>
