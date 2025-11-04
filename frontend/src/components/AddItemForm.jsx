import { useState } from "react";
import axios from "axios";

export default function AddItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    condition: "",
    location: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/items", formData);
      setMessage("✅ Item added successfully!");
      setFormData({
        name: "",
        image: "",
        condition: "",
        location: "",
        description: "",
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to add item.");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white shadow-lg rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-center text-green-600">
        Add New Item 🌱
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="condition"
          placeholder="Condition (New/Used)"
          value={formData.condition}
          onChange={handleChange}
          className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full h-24 p-2 border rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition duration-200 bg-green-600 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4 font-semibold text-center text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
}


