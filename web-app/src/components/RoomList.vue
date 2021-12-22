<template>
	<div>
		<h3>Room List</h3>
		<el-button @click="clearFilter">Clear All Filters</el-button>
		<el-table :data="tableData" ref="filterTable" style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="Heaters" class="itemlist">
							<li v-for="heater in props.row.heaters" :key="heater.id">
								{{ heater.name }} ({{heater.heaterStatus}})
							</li>
						</el-form-item>

						<el-form-item label="Windows" class="itemlist">
							<li v-for="window in props.row.windows" :key="window.id">
								{{ window.name }} ({{window.windowStatus}})
							</li>
						</el-form-item>

					</el-form>
				</template>
			</el-table-column>
			<el-table-column prop="id" label="Room ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="floor" label="Floor" width="180">
			</el-table-column>
			<el-table-column prop="currentTemperature" label="Current Temperature" sortable width="180">
			</el-table-column>
			<el-table-column prop="targetTemperature" label="Target Temperature" sortable width="180">
			</el-table-column>
			<el-table-column prop="buildingName" label="Building Name" sortable :filters=buildingFilters
				:filter-method="filterHandler" width="180">
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
				tableData: [],
				buildingFilters: [{
					text: 'Espace Fauriel',
					value: 'Espace Fauriel'
				}, {
					text: 'Cours Fauriel',
					value: 'Cours Fauriel'
				}]
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
			},
			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			}
		}
	}
</script>

<style>
	.itemlist {
		background-color: #F5F7FA;
		width: 500px;
		padding-right: 10px;
		padding-left: 10px;
	}
</style>
