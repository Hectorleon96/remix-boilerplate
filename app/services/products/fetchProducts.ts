import { requestTemplate } from "~/utils/requestTemplate";
import { Product } from "./productTypes";

const productsWithPagination = async (offset?: number, limit?: number) => {
  const DEFAULT_ITEMS_PER_PAGE = 8 as const;
  return await requestTemplate<Product[]>(
    `https://api.escuelajs.co/api/v1/products?offset=${offset ?? 0}&limit=${
      limit ?? DEFAULT_ITEMS_PER_PAGE
    }`
  );
};

const productById = async (id: number) => {
  return await requestTemplate(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
};

export { productsWithPagination, productById };
