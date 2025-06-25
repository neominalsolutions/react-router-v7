/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, List, ListItem, ListItemText } from '@mui/material';
import { useLoaderData, useParams } from 'react-router';

// users/:id/comments id ile useParams() dan gelen id isim olarak eşleşmelidir.
function UserCommentsPage() {
	const params = useParams();
	console.log('params', params);

	const data = useLoaderData();
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
									background: 'black',
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
