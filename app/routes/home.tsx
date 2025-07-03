import type { Route } from "./+types/home";
import Header from "../components/Header/Header";
import Colorpop from "~/components/Colorpop/Colorpop";
import Footer from "~/components/Footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Colorpop App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Colorpop />
      <Footer />
    </>
  );
}
