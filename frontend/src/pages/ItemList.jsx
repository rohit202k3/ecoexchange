import { useEffect, useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/items");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("❌ Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p className="mt-10 text-center text-gray-600">Loading items...</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item._id}
          className="p-4 transition bg-white shadow-md rounded-2xl hover:shadow-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-40 h-40 mx-auto my-4 rounded-lg"
          />

          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-500">{item.condition}</p>
          <p className="text-sm text-gray-400">{item.location}</p>
          <p className="mt-2 text-sm">{item.description}</p>
          <span
            className={`mt-3 inline-block px-3 py-1 text-sm rounded-full ${
              item.status === "available"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
