"use client";

// import Image from "next/image";
// import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMessage(response.data);
      });
  }, []);

  return <div>{message}</div>;
}
