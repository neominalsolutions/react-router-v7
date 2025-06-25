import { useParams } from 'react-router';

// users/:id/{comments} id ile useParams() dan gelen id isim olarak eşleşmelidir.
function UserCommentsPage() {
	const params = useParams();
	return <>UserId: {params.id}</>;
}

export default UserCommentsPage;
