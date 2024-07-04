import { Cor, iProduct } from "../types/product";
import { slugify } from "../utils/slug";
import { api } from "./api";

const getProducts = async (): Promise<iProduct[]> => {
  const response = await api.get<iProduct[]>("");
  const data = response.data;

  return data.map((product) => ({
    ...product,
    slug: slugify(product.titulo),
  }));
};

const getCategories = async () => {
  const data = await getProducts();

  const categories = data.map((product: iProduct) => product.categoria);

  return Array.from(new Set(categories));
};

async function getColors(): Promise<Cor[]> {
  const response = await api.get<iProduct[]>("/");

  const colors = response.data
    .map((product) => product.cores)
    .reduce((acc, color) => acc.concat(color), []);

  const uniqueColors = Array.from(
    new Set(colors.map((e) => JSON.stringify(e)))
  ).map((e) => JSON.parse(e));

  return uniqueColors;
}

const getProductBySlug = async (
  slug?: string
): Promise<iProduct | undefined> => {
  const data = await getProducts();

  const product = data.find((product) => product.slug === slug);

  return product;
};

export { getCategories, getColors, getProductBySlug, getProducts };
