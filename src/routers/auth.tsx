
import Auth from '@/pages/Auth';
import AuthError from '@/pages/AuthError';

export default [
	{
		path: "/auth",
		exact: true,
		component: Auth
	},
	{
		path: "/error",
		exact: true,
		component: AuthError
	}
];
