import { useState } from "react";

export const useToken = () => {
  const [token] = useState(() => localStorage.getItem("accessToken") || "");
  return token;
};


