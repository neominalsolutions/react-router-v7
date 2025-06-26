/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Button,
	ButtonGroup,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from '@mui/material';
import { Link, useLoaderData } from 'react-router';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

function UsersPage() {
	const data = useLoaderData(); // loader functionda return edilen değere bağlan.
	console.log('data', data);
	const [selectedItem, setSelectedItem] = useState<any>(null);

	const onItemSelect = (item: any) => {
		console.log('selected', item);
		setSelectedItem({ ...item }); // state değerini güncelle
	};
	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'İsmi', width: 200 },
		{
			field: 'username',
			headerName: 'Kullanıcı Adı',
			width: 300,
			renderCell: (params: any) => (
				<Link to={`/admin/users/${params.row['id']}/posts`}>
					{params.row['username']}
				</Link>
			),
		},
		{
			field: 'address',
			headerName: 'Adres',
			renderCell: (params: any) => <>{params.row['address']['city']}</>,
		},
		{
			field: 'actions',
			width: 400,
			headerName: 'İşlemler',
			renderCell: (params: any) => {
				return (
					<>
						<ButtonGroup>
							<Button onClick={() => onItemSelect(params.row)}>Detay</Button>
							<Button>Sil</Button>
						</ButtonGroup>
					</>
				);
			},
		},
	];

	throw new Error('Hata');

	return (
		<>
			<Container sx={{ marginTop: 10 }}>
				<DataGrid rows={data} columns={columns}></DataGrid>
				<Typography variant="h2">Users Page</Typography>

				{/* kontrolü render etme işlemi için && kullanalım */}
				{selectedItem && (
					<Dialog open={true}>
						<DialogTitle>Email: {selectedItem['email']}</DialogTitle>
						<DialogContent>
							Adres: {selectedItem['address']['street']} /{' '}
							{selectedItem['address']['city']}
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setSelectedItem(null)}>Kapat</Button>
						</DialogActions>
					</Dialog>
				)}
			</Container>

			<div>Data Size: {data.length}</div>
		</>
	);
}

export default UsersPage;
