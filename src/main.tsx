import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import './index.css';
import { mainRoutes } from './routes/main.routes';
import { adminRoutes } from './routes/admin.routes';
import { Typography } from '@mui/material';
// React Router Data tekniği

const router = createBrowserRouter([
	mainRoutes,
	adminRoutes,
	{  // tüm routeların en aşağısında tanımlanmalıdır. yukarıdaki routelar bulunmaz ise açılacak olan componenti tanımlamamızı sağlar.
		path: '*',
		Component: () => {
			return <Typography variant="h2">404 Sayfa Bulunamadı !</Typography>;
		},
	},
]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
