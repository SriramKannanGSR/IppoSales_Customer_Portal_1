import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./auth";
import Console from "./Console";
import { useUser } from "./store/userStore";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useUser();
  if (!user || !token) return <Navigate to={"/auth/login"} />;
  return children;
};
function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/auth/*" element={<Auth />} />
        <Route
          path="/console/*"
          element={
            <ProtectedRoute>
              <Console />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Route>
    </Routes>
  );
}

export default Router;
