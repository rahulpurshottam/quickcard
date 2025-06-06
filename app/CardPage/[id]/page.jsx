import EditCardForm from "@/app/(components)/EditCardForm";
let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const getCardById = async (id) => {
  try {
    const res = await fetch(serverUrl+`/api/Cards/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch card");
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

const CardPage = async ({ params }) => {
  const isEditMode = params.id !== "new";
  let cardData = { _id: "new" };

  if (isEditMode) {
    const response = await getCardById(params.id);
    cardData = response?.foundCard || { _id: "new" };
  }

  return <EditCardForm card={cardData} />;
};

export default CardPage;