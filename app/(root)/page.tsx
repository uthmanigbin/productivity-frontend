import Image from "next/image";
import Main from "./main";
import Sidebar from "./_components/sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  );
}
