import { Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "../components/header";

export const RootLayout: React.FC = () => {
  return (
    <Stack direction="vertical" className="d-flex h-100">
      <Toaster position="top-center" richColors />
      <Header />
      <div className="d-flex h-100">
        <Outlet />
      </div>
    </Stack>
  );
};
