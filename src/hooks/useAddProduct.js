import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (product) => {
      const response = await axios.post(
        "https://2ae61cde2e21f8bf.mokky.dev/products",
        product,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Продукт успешно создан!");
    },
  });
  return mutation;
};
