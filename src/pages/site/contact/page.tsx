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
