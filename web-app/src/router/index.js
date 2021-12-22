import Vue from "vue"
import Router from "vue-router"
import HeaterList from "../components/HeaterList.vue"
import WindowList from "../components/WindowList.vue"
import RoomList from "../components/RoomList.vue"
import Author from "../components/Author.vue"
import Main from "../views/Main"

Vue.use(Router);

export default new Router({
	routes:[
		// Options in faircorp
		{
			path:"/",
			name:"Main",
			component:Main,
			children:[
				{
					// Heater List
					path:'/faircorp/heaters',
					name:"HeaterList",
					component:HeaterList
				},
				{
					// Window List
					path:'/faircorp/windows',
					name:"WindowList",
					component:WindowList
				},
				{
					// Room List
					path:'/faircorp/rooms',
					name:"RoomList",
					component:RoomList
				},
				{
					path:'/author',
					name:'Author',
					component:Author
				}
			]
		}
		
		
	]
})
