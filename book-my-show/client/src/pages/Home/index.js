import React, { useEffect } from "react";
import { GetCurrentUser } from "../../api/users";

function Home() {
  // useEffect(() => {
  //   console.log("Home use effect");
  //   const fetchUser = async () => {
  //     const response = await GetCurrentUser();
  //     console.log(response);
  //   };
  //   fetchUser();
  // });
  return <div>This is my Home Page</div>;
}

export default Home;
