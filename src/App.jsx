import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "@/components/ui/Hero";

import {
  ArrowRightFromLine,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex border gap-1 h-screen min-h-[100dvh]">
        <div className="bg-stone-00 basis-40">sidebar</div>
        <div className="bg-stone-100 flex-1 p-4">
          <Header />
          <Hero />
        </div>
        <div></div>
      </div>
      {/* <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="outline">Button</Button>
        <Button variant="outline" size="icon" aria-label="Submit">
          <ArrowRightFromLine />
        </Button>
      </div> */}
    </>
  );
}

export default App;
