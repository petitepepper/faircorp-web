import Vue from "vue"
import Router from "vue-router"
import HeaterList from "../views/HeaterList"
import WindowList from "../views/WindowList"
import RoomList from "../views/RoomList"
import Main from "../views/Main"

Vue.use(Router);

export default new Router({
	routes:[
		// Options in faircorp
		{
			path:"/main",
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
			]
		},
		
		

	]
})
