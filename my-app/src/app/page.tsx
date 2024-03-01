'use client';

import { useState, useEffect } from "react";
import Table from "@/components/Table";
import MobileTable from "@/components/MobileTable";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', updateIsMobile);

    updateIsMobile();

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-10">
      { isMobile ? < MobileTable /> : <Table /> }
    </section>
  );
}
