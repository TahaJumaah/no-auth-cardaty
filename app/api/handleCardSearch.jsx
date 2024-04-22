export default async function handleCardSearch(Event) {
  Event.preventDefault();
  const myForm = new FormData(Event.target);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/find`, {
      method: "POST",
      body: myForm,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return null;
  }
}
