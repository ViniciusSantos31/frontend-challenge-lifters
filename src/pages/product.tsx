import { ShoppingBag } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { Button, Color } from "../components";
import { Size } from "../components/size";
import { getProductBySlug } from "../services/products";
import { useShoppingCartStore } from "../store";
import { Cor, iProduct } from "../types/product";

export const Product: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<iProduct | undefined>(undefined);
  const [colorSelected, setColorSelected] = useState<Cor>();
  const [sizeSelected, setSizeSelected] = useState<string>();

  const navigate = useNavigate();
  const { addItem, items } = useShoppingCartStore();

  const loadProduct = useCallback(async () => {
    await getProductBySlug(slug).then((response) => {
      setProduct(response);
    });
  }, [slug]);

  const handleAddItem = () => {
    if (!(colorSelected && sizeSelected)) {
      toast.error("Please select a size and a color");
      return;
    }

    const productToAdd = {
      ...product,
      cores: [colorSelected],
      tamanhos: [sizeSelected],
    } as iProduct;

    if (!productToAdd || items.includes(productToAdd)) return;

    addItem(productToAdd as iProduct);
    toast.success("Product added to cart", {
      description: `${productToAdd.titulo} was added to your cart`,
      duration: 3000,
    });
  };

  const isAdded = useMemo(() => {
    return !!items.find((item) => item.slug === product?.slug);
  }, [items, product]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  if (!slug) return <Navigate to="/" />;

  return (
    <Container
      fluid
      className="align-self-center h-100 w-100 d-flex align-items-center justify-content-center"
    >
      <div className="col-6 d-flex gap-4">
        <div className="grid">
          <div className="row row-gap-4">
            {product?.fotos.slice(0, 4).map((foto) => (
              <img key={foto.url} className="col-6" src={foto.url} />
            ))}
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="d-flex w-100 h-100 flex-column justify-content-between">
            <div className="d-flex flex-column">
              <h1>{product?.titulo}</h1>
              <h5>{product?.valor}</h5>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-medium">{product?.descricao}</p>
              <span className="text-body">Size</span>
              <div className="d-flex gap-2">
                {product?.tamanhos.map((size) => (
                  <Size
                    key={size}
                    selected={sizeSelected === size}
                    onClick={() => setSizeSelected(size)}
                  >
                    {size}
                  </Size>
                ))}
              </div>
              <span className="text-body mt-3">Color</span>
              <div className="d-flex gap-2">
                {product?.cores.map((color) => (
                  <Color
                    key={color.codigo}
                    color={color.codigo}
                    className="ratio-1x1 rounded-circle p-1 w-100"
                    selected={colorSelected?.codigo === color.codigo}
                    onClick={() => {
                      setColorSelected(color);
                    }}
                    style={{
                      maxWidth: "3rem",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="d-flex gap-2 w-auto">
              <Button
                className="w-100"
                onClick={handleAddItem}
                disabled={isAdded}
              >
                <ShoppingBag size={16} />
                <span>Add to cart</span>
              </Button>
              <Button
                variant="secondary"
                style={{ maxWidth: "30%" }}
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
