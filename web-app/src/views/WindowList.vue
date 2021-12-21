<template>
	<div>
		<h3>Window List</h3>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="50" class="item_index">
			</el-table-column>
			<el-table-column prop="id" label="Window ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="windowStatus" label="Window Status" width="180">
			</el-table-column>
			<el-table-column prop="roomName" label="Room Name" width="180">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "WindowList",

		beforeRouteEnter(to, from, next) {
			console.log("Enter Window List page");
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
					url: 'http://ye.wenjing.cleverapps.io/api/windows',
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
	}
</style>