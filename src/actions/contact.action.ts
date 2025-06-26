/* eslint-disable @typescript-eslint/no-explicit-any */
export async function contactAction({ request }: any) {
	const formData = await request.formData();
	const name = formData.get('name');
	const message = formData.get('message');

	console.log('SPA form submitted:', { name, message });

	// Örnek işlem yapılabilir (API çağrısı vs.)
	// const res = await fetch('/api/contact', { method: 'POST', body: formData });

	// SPA yönlendirmesi için response döndürülür
	return {
		success: true,
		message: `İşlem başarılı`,
	};
}
