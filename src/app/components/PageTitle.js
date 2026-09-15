"use client";

import { useEffect } from "react";

export default function PageTitle() {
  useEffect(() => {
    document.title = "Ar Portfolio";
  }, []);

  return <h1>My Portfolio</h1>;
}
