import React from "react";
import Card from "./(components)/Card";
let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const getCards = async () => {
  try {
    const res = await fetch(serverUrl+"/api/Cards", {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error("Failed to fetch cards");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading cards: ", error);
    return { cards: [] }; 
  }
};

const Dashboard = async () => {
  const data = await getCards();
  const cards = data.cards || [];

  if (cards.length === 0) {
    return <p className="p-5 text-center">No cards found.</p>;
  }

  const uniqueCategories = [...new Set(cards.map(({ category }) => category))];

  return (
    <div className="p-5">
      {uniqueCategories.map((category, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {cards
              .filter((card) => card.category === category)
              .map((card) => (
                <Card key={card._id} card={card} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Dashboard;
