export default async function handleCardSearch(Event) {
  Event.preventDefault();
  const myForm = new FormData(Event.target);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/find`, {
      method: "POST",
      body: myForm,
    });

    if (response.ok) {
      console.log("Response is OK! Proceeding");
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
