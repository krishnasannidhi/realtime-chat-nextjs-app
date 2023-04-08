import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  await db.set("hello", "hello");
  return <Button size="deafult">Hello</Button>;
}
