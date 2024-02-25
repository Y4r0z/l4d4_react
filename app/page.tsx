'use client'
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { BsCopy } from "react-icons/bs";
import {getServers} from "@/components/api"
import ServerCard from "@/components/ServerCard/ServerCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="h-64 w-full bg-background-300">
        <ServerCard server={null}/>
      </div>
    </main>
  );
}
