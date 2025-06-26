/* eslint-disable @typescript-eslint/no-explicit-any */

import { object, string } from 'yup';

const apiRequest = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ status: 200, message: 'İşlem Başarılı' });
		}, 500);
	});

const formSchema = object({
	name: string().required('isim alanı boş geçilemez'),
	message: string()
		.trim()
		.max(50, 'Makismum 50 karakter')
		.required('Mesaj alanı boş geçilemez'),
});

export async function contactAction({ request }: any) {
	const formData = await request.formData();
	const name = formData.get('name');
	const message = formData.get('message');

	try {
		await formSchema.validate({ name, message }, { abortEarly: false });
		const response = await apiRequest();

		return {
			status: 200,
			data: response,
			errors: null,
		};
	} catch (error: any) {
		console.log('error-name', error.name);
		console.log('error', error.errors);

		if (error.name === 'ValidationError') {
			// Yup hatalarını key-value şeklinde döndür
			const errors = error.inner.reduce((item: any, key: any) => {
				item[key.path] = key.message;
				return item;
			}, {});

			console.log('errors', errors);
			return {
				status: 400,
				data: null,
				errors: errors,
			};
		}
	}
}
