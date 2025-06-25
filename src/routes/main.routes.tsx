import MainLayout from '../layouts/site/layout';
import AboutPage from '../pages/site/about/page';
import HomePage from '../pages/site/home/page';

export const mainRoutes = {
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
	],
};
