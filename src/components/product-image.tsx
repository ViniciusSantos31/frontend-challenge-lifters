import { Card } from "react-bootstrap";

type ProductImageProps = {
  src?: string;
};

export const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
  return (
    <Card.Img
      variant="top"
      className="rounded-0"
      style={{ aspectRatio: "1/1" }}
      src={src}
    />
  );
};
