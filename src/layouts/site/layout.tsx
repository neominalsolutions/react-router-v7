import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { NavLink, Outlet } from 'react-router';
import './layout.css';

function MainLayout() {
	return (
		<>
			<Container maxWidth="xl">
				{/* Layout menü kısmı */}
				<AppBar component="nav">
					<Toolbar>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								minWidth: '100vw',
							}}
						>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								style={{ color: 'white', padding: '5px' }}
								to="/"
							>
								Anasayfa
							</NavLink>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								style={{ color: 'white', padding: '5px' }}
								to="/about"
							>
								Hakkımızda
							</NavLink>
						</Box>
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg">
					<Outlet />
				</Container>
				<Container>
					<Box>Alt Bilgi</Box>
				</Container>
			</Container>
		</>
	);
}

export default MainLayout;
