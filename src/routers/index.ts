import HomePage from "@/pages/Home";

import authRoute from './auth';
import commonRoute from './common';

export interface RouteType {
	path: string;
	exact?: boolean;
	layout?: any;
	component: any;
}

const routes: RouteType[] = [
	{
		path: "/",
		exact: true,
		// layout: SecurityLayout,
		component: HomePage,
	},
	...authRoute,
	...commonRoute
];

export default routes;
