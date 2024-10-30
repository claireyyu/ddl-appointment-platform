const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function createContactForm(contactFormData) { 
  const response = await fetch(`${BASE_URL}/v1/contact/send`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactFormData),
  })

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log('response: ', data);
}