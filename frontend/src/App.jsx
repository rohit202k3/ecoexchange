import { Routes, Route, Link } from "react-router-dom";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./pages/ItemList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-700">🌿 EcoExchange</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-green-700">
            Add Item
          </Link>
          <Link to="/items" className="text-gray-700 hover:text-green-700">
            View Items
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-xl p-6 mx-auto bg-white shadow rounded-2xl">
                <AddItemForm />
              </div>
            }
          />
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </div>
    </div>
  );
}




