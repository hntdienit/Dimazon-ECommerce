import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: 'Add Product - Dimazon',
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form>
        <input type="text" className="mb-3 w-full input input-bordered" name="name" required placeholder="Name" />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="mb-3 w-full textarea textarea-bordered"
        />
        <input
          type="url"
          className="mb-3 w-full input input-bordered"
          name="imageUrl"
          required
          placeholder="Image Url"
        />
        <input type="number" className="mb-3 w-full input input-bordered" name="price" required placeholder="Price" />
        <button type="submit" className="btn btn-primary btn-block">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
