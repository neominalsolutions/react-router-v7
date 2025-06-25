import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';

// /admin path
function AdminHome() {
	const navigate = useNavigate(); // JS tarafında form gönderimi sonrası bir sayfaya yönlendirme varsa

	const onButtonClick = () => {
		const result = confirm('User Sayfasına gitmek istediğinize emin misiniz ?');
		if (result) navigate('/admin/users');
	};

	return (
		<>
			<Grid container>
				<Button onClick={onButtonClick} variant="outlined">
					Get Users
				</Button>
			</Grid>
		</>
	);
}

export default AdminHome;
