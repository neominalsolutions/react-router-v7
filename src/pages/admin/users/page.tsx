/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Container, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

function UsersPage() {
	const data = useLoaderData(); // loader functionda return edilen değere bağlan.
	console.log('data', data);

	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'İsmi', width: 200 },
		{ field: 'username', headerName: 'Kullanıcı Adı', width: 300 },
		{
			field: 'address',
			headerName: 'Adres',
			renderCell: (params: any) => <>{params.row['address']['city']}</>,
		},
		{
			field: 'actions',
			headerName: 'Kullanıcı Adı',
			renderCell: (params: any) => {
				console.log('params', params.row);
				return (
					<>
						<Button>Düzenle</Button>
					</>
				);
			},
		},
	];

	return (
		<>
			<Container sx={{ marginTop: 10 }}>
				<DataGrid rows={data} columns={columns}></DataGrid>
				<Typography variant="h2">Users Page</Typography>
			</Container>

			<div>Data Size: {data.length}</div>
		</>
	);
}

export default UsersPage;
