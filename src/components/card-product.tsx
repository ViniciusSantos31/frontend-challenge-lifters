import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Product } from "../types/product";
import { ProductImage } from "./product-image";

type CardProductProps = {
  product: Product;
} & React.HTMLAttributes<HTMLButtonElement>;

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const { titulo, tamanhos, fotos } = product;
  const capa = fotos.find((foto) => foto.capa);

  return (
    <Link to={`/product/${product.slug}`}>
      <Card style={{ width: "16.25rem" }} className="border-0 pe-auto p-0">
        <ProductImage src={capa?.url} />
        <Card.Body className="border-0 w-100 px-0">
          <div className="d-flex align-items-center justify-content-between">
            <Card.Title className="m-0 fs-5 p-0">{titulo}</Card.Title>
            <span className="fw-bold fs-6">{tamanhos[0]}</span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
