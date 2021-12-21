<template>
	<div>
		<h3>Room List</h3>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="50" class="item_index">
			</el-table-column>
			<el-table-column prop="id" label="Room ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="floor" label="Floor" width="180">
			</el-table-column>
			<el-table-column prop="currentTemperature" label="Current Temperature" width="180">
			</el-table-column>
			<el-table-column prop="targetTemperature" label="Target Temperature" width="180">
			</el-table-column>
			<el-table-column prop="buildingName" label="Building Name" width="180">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "RoomList",

		beforeRouteEnter(to, from, next) {
			console.log("Enter Room List page");
			next(vm => {
				vm.getData();
			});
		},

		data() {
			return {
				tableData: []
			}
		},

		methods: {
			getData: function() {
				this.axios({
					method: 'get',
					url: 'http://ye.wenjing.cleverapps.io/api/rooms',
				}).then(response => {
					this.tableData = response.data;
					console.log(this.tableData)
				})
			}
		}
	}
</script>

<style>
	.item_index{
		color: #B4BCCC;
	}</style>