import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <div>
          <p>Name : {user.displayName}</p>
          <p>Email : {user.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
