import { Row, Stack } from "react-bootstrap";

import { useEffect, useState } from "react";
import { Banner, CardProduct, Checkbox, Color } from "../components";
import { getCategories, getColors, getProducts } from "../services/products";
import { Filter } from "../types/filters";
import { iProduct } from "../types/product";

export const Home: React.FC = () => {
  const [filters, setFilters] = useState<Filter>({
    categories: [],
    colors: [],
  });

  const [products, setProducts] = useState<iProduct[]>([]);

  const loadFilters = async () =>
    await Promise.all([getCategories(), getColors(), getProducts()]);

  useEffect(() => {
    loadFilters().then(([categories, colors, products]) => {
      setFilters({ categories, colors });
      setProducts(products);
    });
  }, []);

  return (
    <Stack direction="vertical" className="w-100 overflow-hidden">
      <Banner />
      <Row className="p-5 d-flex flex-nowrap ">
        <Stack direction="vertical" className="w-25">
          <div className="d-flex align-items-center gap-3">
            <h5 className="fs-4 text-center m-0">Filters</h5>
            <p className="m-0 fs-6 text-center text-secondary text-decoration-underline lh-1">
              Clear filters
            </p>
          </div>
          <div className="d-flex align-items-start flex-column mt-5">
            <h4 className="fs-6 text-center mb-3">Categories</h4>
            <div className="d-flex flex-column align-items-start w-auto">
              {filters.categories.map((category) => (
                <Checkbox key={category} label={category} />
              ))}
            </div>
          </div>
          <div className="d-flex align-items-start flex-column mt-4">
            <h4 className="fs-6 text-center mb-3">Colors</h4>
            <div className="d-flex flex-wrap align-items-start gap-1">
              {filters.colors.map((color) => (
                <Color key={color.codigo} color={color.codigo} width="25px" />
              ))}
            </div>
          </div>
        </Stack>
        <Stack
          direction="vertical"
          className="justify-content-end align-items-start p-0"
        >
          <span className="align-self-end fs-6">
            Showing {products.length} products
          </span>
          <div className="d-flex w-auto flex-wrap gap-5 mt-5">
            {products.map((product) => (
              <CardProduct key={product.slug} product={product} />
            ))}
          </div>
        </Stack>
      </Row>
    </Stack>
  );
};
