import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const params = useParams();
  return (
    <div className="container mx-auto px-4 text-center my-80">
      {params.token}
    </div>
  );
}

export default ProfilePage;
