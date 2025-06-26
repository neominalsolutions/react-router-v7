import type { RouteObject } from 'react-router';
import MainLayout from '../layouts/site/layout';
import AboutPage from '../pages/site/about/page';
import HomePage from '../pages/site/home/page';
import ContactPage from '../pages/site/contact/page';
import { contactAction } from '../actions/contact.action';

export const mainRoutes: RouteObject = {
	path: '',
	Component: MainLayout,
	children: [
		{
			index: true, // MainLayout gidince ilk açılan sayfa
			Component: HomePage,
		},
		{
			path: 'about',
			Component: AboutPage,
		},
		{
			path: 'contact',
			Component: ContactPage,
			action: contactAction,
		},
	],
};
