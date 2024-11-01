import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  return children;
}

export default ProtectedRoute;
