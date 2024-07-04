import { ShoppingBagIcon, Trash2Icon } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useShoppingCartStore } from "../store";
import { Color } from "./color";

const CustomToggle = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, onClick }, ref) => (
  <button
    className="text-white border-0 bg-transparent"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick?.(e);
    }}
  >
    {children}
  </button>
));

export const DropdownBag: React.FC = () => {
  const { items } = useShoppingCartStore();

  return (
    <Dropdown className="dropdown-center" as="div">
      <Dropdown.Toggle
        as={CustomToggle}
        className="text-white border-0 bg-transparent dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <button className="text-white border-0 bg-transparent">
          <ShoppingBagIcon />
          {items.length > 0 && <span className="badge">{items.length}</span>}
        </button>
      </Dropdown.Toggle>
      <Menu />
    </Dropdown>
  );
};

const Menu = () => {
  const { items, removeItem } = useShoppingCartStore();

  const handleRemoveItem = (slug: string) => {
    removeItem(slug);
  };

  const navigate = useNavigate();

  const goToBag = () => {
    if (items.length === 0) {
      toast.info("Your bag is empty", {
        duration: 3000,
      });
      return;
    }
    navigate("/checkout");
  };

  const getTotalPrice = () => {
    return items.reduce(
      (acc, item) => acc + Number(item.valor.replace(/[^0-9]/, "") ?? 0),
      0
    );
  };

  return (
    <Dropdown.Menu className="dropdown-menu bg-black border border-secondary rounded-0">
      {items.length === 0 ? (
        <Dropdown.Item
          as="div"
          id="dropdown-item"
          className="py-3 px-5 text-white"
        >
          Your bag is empty
        </Dropdown.Item>
      ) : (
        <Dropdown.Item as="div" id="dropdown-item" className="p-3">
          <ul className="list-group">
            {items.map((item) => (
              <li className="bg-black list-group-item border-0 p-0 mb-2 d-flex flex-row w-100">
                <img
                  src={item.fotos.find((foto) => foto.capa)?.url}
                  alt="product"
                  className="me-2"
                  style={{ width: 58, height: 58 }}
                />
                <div className="w-100 d-flex justify-content-between flex-column ms-2">
                  <div className="d-flex justify-content-between align-items-center gap-4 text-white">
                    <h3 className="fs-6 fw-normal mb-0">{item.titulo}</h3>
                    <span className="text-end fw-bold fs-6">{item.valor}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="w-100 d-flex align-items-center gap-2">
                      <div
                        className="d-flex align-items-center justify-content-center border border-white text-white px-1"
                        style={{ height: 20 }}
                      >
                        {item.tamanhos[0]}
                      </div>
                      <Color width="20px" color={item.cores[0].codigo} />
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.slug)}
                      className="border-0 bg-transparent d-flex align-items-center"
                    >
                      <Trash2Icon size={15} color="#ffffff" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="w-100 bg-secondary my-3" style={{ height: 1 }} />

          <div className="d-flex justify-content-between align-items-center text-white">
            <h4 className="fs-6">Total:</h4>
            <h4 className="fs-6">{`$ ${getTotalPrice()}`}</h4>
          </div>
          <button
            onClick={goToBag}
            className="w-100 d-flex gap-2 align-items-center justify-content-center border-0 fw-medium px-5 py-2 text-black bg-white mt-3"
          >
            Checkout
          </button>
        </Dropdown.Item>
      )}
    </Dropdown.Menu>
  );
};
