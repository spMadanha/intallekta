"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("05f38065-b171-4117-a38d-17729c609b8b");
  }, []);

  return null;
};
