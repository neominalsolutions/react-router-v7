import {
	Button,
	FormControl,
	FormGroup,
	FormHelperText,
	Input,
	InputLabel,
	TextField,
} from '@mui/material';
import { useRef } from 'react';
import { Form, useActionData, useNavigation } from 'react-router';

export default function ContactPage() {
	const navigation = useNavigation(); // form gönderilme state
	const action = useActionData(); // formdan dönen response değerimizi bu hook ile alarız.

	console.log('...rendering');

	// virtual-dom üzerinden herhangi bir render durumu oluşturmadan html elementlerini html dom referanslarını üzerinde tutup bunlara erişmemizi sağlar.
	const formRef = useRef<HTMLFormElement>(null);

	const isSubmitting = navigation.state === 'submitting';

	if (action && action.status === 200) {
		formRef.current?.reset();
	}

	return (
		<div>
			<h2>Contact Us</h2>
			<Form ref={formRef} method="post">
				<FormGroup>
					<FormControl sx={{ mb: 2 }}>
						<InputLabel>Name:</InputLabel>
						<Input type="text" name="name" />
						{action?.errors && (
							<FormHelperText id="my-helper-text">
								{action.errors.name}
							</FormHelperText>
						)}
					</FormControl>
					<FormControl sx={{ mb: 2 }}>
						<TextField
							placeholder="Message"
							maxRows={10}
							name="message"
						></TextField>
						{action?.errors && (
							<FormHelperText id="my-helper-text">
								{action.errors.message}
							</FormHelperText>
						)}
					</FormControl>
					<FormControl sx={{ mb: 2 }}>
						<Button variant="outlined" type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Sending...' : 'Send'}
						</Button>
					</FormControl>
				</FormGroup>
			</Form>
		</div>
	);
}
