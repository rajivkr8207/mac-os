"use client";

import "./template.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="bgblur">
            <Image src={'/applelar.png'} width={300} height={300} alt="applepic" />
          </div>
        </div>
      )}

      {children}
    </>
  );
}
