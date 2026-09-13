import { useState } from "react";
import { useCreateProduct } from "../../hooks/useAddProduct";

export const AddProduct = () => {
  const { mutate } = useCreateProduct();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="price"
        />
        <div>
          <button
            onClick={() =>
              mutate({
                title,
                description,
                price: Number(price),
              })
            }
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
