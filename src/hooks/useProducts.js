import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://2ae61cde2e21f8bf.mokky.dev/products",
      );
      return response.data;
    },
  });
  return query;
};
