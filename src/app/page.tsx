import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Button size="deafult">Hello</Button>;
}
