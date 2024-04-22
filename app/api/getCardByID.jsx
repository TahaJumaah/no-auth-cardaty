export default async function getCardByID(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/card/${id}`);

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    return null;
  }
}
