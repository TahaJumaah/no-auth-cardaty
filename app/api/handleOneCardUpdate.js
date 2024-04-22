export default async function handleOneCardUpdate(Event, id) {
  const myform = new FormData(Event.target);
  Event.preventDefault();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/card/${id}`, {
      method: "POST",
      body: myform,
    });

    if (res.ok) {
      const data = await res.json();
      return { data: data, res: res };
    }
  } catch (error) {
    console.error(error);
  }
}
