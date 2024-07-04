import { LockIcon, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductCheckoutItem } from "../components";
import { CheckoutForm } from "../components/forms/checkout";
import { useShoppingCartStore } from "../store";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useShoppingCartStore();

  return (
    <div className="container flex-column d-flex align-items-center justify-content-start justify-content-md-center mt-5 px-4 px-md-0">
      <div className="d-flex w-100 h-auto justify-content-between">
        <h2 className="d-flex align-items-center justify-content-end gap-2">
          <ShoppingBag size={40} />
          Your bag
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="w-auto border-0 fw-medium px-4 text-black bg-body-secondary"
        >
          Back
        </button>
      </div>
      <div className="grid container-fluid my-4 h-auto">
        <div className="row h-100">
          <div className="h-100 col-12 col-md-6 col-lg-8 px-0 d-flex flex-column justify-content-between mb-md-0 pe-0 pe-md-4">
            <ul className="list-group h-50">
              {items.map((item) => (
                <ProductCheckoutItem item={item} />
              ))}
            </ul>
            <div>
              <h4 className="d-flex align-items-center gap-2 fs-5 fw-bold mb-0">
                <LockIcon size={18} />
                Security & Privacy
              </h4>
              <span className="fs-6">
                Every transaction on <b>Lifters Shop</b> is secure. Any personal
                information you give us will be handled according to our{" "}
                <a
                  href="#"
                  className="link link-dark link-underline-dark pe-auto"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-0 mt-4 mt-md-0">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};
