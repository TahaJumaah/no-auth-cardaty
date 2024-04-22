export default async function getAllCards() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/find`, {
      method: "POST",
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return null;
  }
}
