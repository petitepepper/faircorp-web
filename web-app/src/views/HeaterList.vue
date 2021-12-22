<template>
	<div>
		<h3>Heater List</h3>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="50" class="item_index">
			</el-table-column>
			<el-table-column prop="id" label="Heater ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="heaterStatus" label="Heater Status" width="180">
			</el-table-column>
			<el-table-column prop="roomName" label="Room Name" width="180">
			</el-table-column>
			<el-table-column label="Operation" width="180">
				<template slot-scope="scope">
				<el-button @click="switchStatus(scope.row.id)">SWITCH</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "HeaterList",

		beforeRouteEnter(to, from, next) {
			console.log("Enter Heater List page");
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
					url: 'http://ye.wenjing.cleverapps.io/api/heaters',
				}).then(response => {
					this.tableData = response.data;
				})
			},
			
			switchStatus:function(id){
				console.log("heater id : " + id)
				this.axios({
					method:'put',
					url: 'http://ye.wenjing.cleverapps.io/api/heaters/'+id+'/switch'
				});
				window.location.reload(); //refresh page to show current status 
			}
		}
	}
</script>

<style>
	.item_index{
		color: #B4BCCC;
	}</style>