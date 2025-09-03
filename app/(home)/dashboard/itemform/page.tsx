import { items_add } from "@/lib/actions/items_action";
import React from "react";

function ItemForm() {
  return (
    <div className="  h-fill flex items-center justify-center bg-blue-50 p-6">
      <form className="w-full max-w-lg bg-white rounded-2xl p-6 space-y-5 shadow-2xl mt-10 " action={items_add}  >
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Add New Item
        </h2>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-blue-900 mb-1"
          >
            Item Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-blue-900 mb-1"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-blue-900 mb-1"
          >
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            required
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
         <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-blue-900 mb-1"
          >
            rating
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            required
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
         <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-blue-900 mb-1"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            required
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
         <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-blue-900 mb-1"
          >
            description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
