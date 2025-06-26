/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, List, ListItem, ListItemText } from '@mui/material';
import { useLoaderData, useParams } from 'react-router';

// users/:id/comments id ile useParams() dan gelen id isim olarak eşleşmelidir.
function UserCommentsPage() {
	const params = useParams(); // eski yöntem burda param.id değerini yakalayı useEffect ile veri çekeriz.
	console.log('params', params);

	const data = useLoaderData(); // yeni yöntem params loader function yakaladığımız için useParams gerek kalmadı.
	console.log('data', data);

	return (
		<Container sx={{ marginTop: 5 }}>
			{data && (
				<List>
					{data.map((item: any, index: number) => {
						return (
							<ListItem
								sx={{
									padding: 2,
									margin: 2,
									borderRadius: 5,
									color: 'white',
									background: '#1976d2',
								}}
								key={index}
							>
								<ListItemText>{item.title}</ListItemText>
							</ListItem>
						);
					})}
				</List>
			)}
		</Container>
	);
}

export default UserCommentsPage;
