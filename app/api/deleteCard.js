export default async function deleteCard(Event, id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/delete/card/${id}`,
      { method: "POST" }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    return error;
  }
}
