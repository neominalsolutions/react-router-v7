import { type RouteObject } from 'react-router';
import MainLayout from '../layouts/site/layout';
import AdminHome from '../pages/admin/home/page';
import UsersPage from '../pages/admin/users/page';
import UserCommentsPage from '../pages/admin/users/comments/page';

export const adminRoutes: RouteObject = {
	path: 'admin',
	Component: MainLayout,
	children: [
		{
			index: true,
			Component: AdminHome,
		},
		{
			path: 'users',
			loader: async () => {
				// loader tanımlamalarını async await tanımlamalıyız

				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				);
				const data = await response.json();

				return data;

				// v7 ile gelen bir özellik,
				// fetch('https://jsonplaceholder.typicode.com/users')
				// 	.then((response) => response.json())
				// 	.then((data) => {
				// 		console.log('data', data);
				// 		return data;
				// 	});
			},
			Component: UsersPage,
		},
		{
			path: 'users/:id/{comments}',
			loader: async (params) => {
				console.log('params', params);
				return {};
			},
			Component: UserCommentsPage,
		},
	],
};
