/* eslint-disable @typescript-eslint/no-explicit-any */
import { isRouteErrorResponse, useRouteError } from 'react-router';

export default function ErrorPage() {
	const error: any = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>Oops!</h1>
				<p>Status: {error.status}</p>
				<p>{error.statusText}</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Something went wrong!</h1>
			<p>{error.message || JSON.stringify(error)}</p>
		</div>
	);
}
