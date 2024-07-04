import { ShoppingBag } from "lucide-react";
import { Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const Header: React.FC = () => {
  return (
    <Nav className="d-flex bg-black align-items-center px-5 py-2 border-bottom">
      <Link
        to="/"
        className="text-center m-0 fs-5 text-white me-sm-5 text-decoration-none"
      >
        Lifters Shop
      </Link>
      <Stack direction="horizontal" gap={3} className="flex-grow-1">
        <Nav.Item>
          <Nav.Link href="/home" as="div">
            <Button variant="link">Shop</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" as="div">
            <Button variant="link">Stories</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" as="div">
            <Button variant="link">About</Button>
          </Nav.Link>
        </Nav.Item>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Nav.Item>
          <Link
            to="/checkout"
            className="d-flex align-items-center justify-content-center text-decoration-none text-white gap-1"
          >
            <ShoppingBag size={20} />
            <span className="text-decoration-none">0</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/home">
            <Button variant="link">Login</Button>
          </Link>
        </Nav.Item>
      </Stack>
    </Nav>
  );
};
