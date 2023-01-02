import Image from "next/image";
import { Inter } from "@next/font/google";
//import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <br></br>
      <center>
        <h1>Hello World </h1>
        <br></br>
        <h4>Welcome from Salman Ahmed</h4>
      </center>
    </div>
  );
}
