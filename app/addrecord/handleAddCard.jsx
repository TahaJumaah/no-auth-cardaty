export default async function handleAddCard(Event, formRef) {
  Event.preventDefault();
  const myForm = new FormData(Event.target);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/add`, {
      method: "POST",
      body: myForm,
    });

    if (response.ok) {
      const data = await response.json();

      return { response: response, data: data };
    } else {
      const data = await response.json();
      return { response: response, data: data };
    }
  } catch (error) {
    return null;
  }
}
