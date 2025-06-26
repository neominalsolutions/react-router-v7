import { Form, useActionData, useNavigation } from 'react-router';

export default function ContactPage() {
	const navigation = useNavigation(); // form gönderilme state
	const action = useActionData();

	const isSubmitting = navigation.state === 'submitting';

	console.log('action', action);

	return (
		<div>
			<h2>Contact Us</h2>
			<Form method="post">
				<div>
					<label>Name:</label>
					<input type="text" name="name" required />
				</div>
				<div>
					<label>Message:</label>
					<textarea name="message" required></textarea>
				</div>
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? 'Sending...' : 'Send'}
				</button>
			</Form>
		</div>
	);
}
