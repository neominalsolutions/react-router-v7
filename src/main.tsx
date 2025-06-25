import { createRoot } from 'react-dom/client';

import {
	createBrowserRouter,
	RouterProvider
} from 'react-router';
import './App.css';
import './index.css';
import { mainRoutes } from './routes/main.routes';
// React Router Data tekniği


const router = createBrowserRouter([mainRoutes]);


createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
