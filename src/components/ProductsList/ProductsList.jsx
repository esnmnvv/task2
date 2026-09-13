import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { useProducts } from "../../hooks/useProducts";

export const ProductsList = () => {
  const { data } = useProducts();
  const { mutate } = useDeleteProduct();

  return (
    <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((product) => (
        <article
          key={product.id}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex h-56 items-center justify-center overflow-hidden bg-slate-50 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h2 className="line-clamp-2 text-lg font-semibold ">
              {product.title}
            </h2>
            <p className="mt-3 line-clamp-3 text-sm leading-6 ">
              {product.description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 pt-6">
              <span className="text-xl font-bold text-slate-900">
                {product.price} сом
              </span>
              <button onClick={() => mutate(product.id)}>Удалить</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
