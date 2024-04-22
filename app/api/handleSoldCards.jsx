export default async function handleSoldCards(Event) {
  const soldForm = new FormData(Event.target);
  Event.preventDefault();
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/getPrices`, {
    method: "POST",
    body: soldForm,
  });
  const data = await response.json();
  console.log(data);
  return data;
}
