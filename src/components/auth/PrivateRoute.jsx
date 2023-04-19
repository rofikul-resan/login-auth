import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <div className=" mx-auto mt-48 w-fit">
          <button className="btn loading  ">loading</button>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  } else return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
