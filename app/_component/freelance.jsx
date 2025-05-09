"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function WorldMapFree() {

  const t = useTranslations()

  const $t = useTranslations()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="px-4 md:px-10 lg:px-30">
      <div className="py-10 rounded-3xl md:py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold font-syne text-xl md:text-4xl text-white">
          {t('remote')}{" "}
          <span className="font-syne space-x-1 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-neutral-400">
            {$t('connectivity').toLowerCase().split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm font-rubik font-semibold md:text-lg text-neutral-500 max-w-4xl mx-auto py-4">
        {t('available-to-collaborate-remotely-from-anywhere-fully-committed-and-ready-to-seamlessly-integrate-into-your-team-your-goals-my-priority-no-boundaries-just-results')} </p>
      </div>
      {isClient && <WorldMap
      lineColor="#f12711"
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -40.7975, lng: -57.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -40.7975, lng: -57.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: 0.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -2.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 35.857244373522285, lng: 2.343255329441831 }, // Paris
            end: { lat: -42.35879219086626, lng: 47 },   // Toliara, Madagascar
          },
          {
            start: { lat: 34.0522, lng: -118.2437 }, // New York
            end: { lat: -42.35879219086626, lng: 47 },   // Toliara, Madagascar  
          },
          {
            start: { lat: 51.5074, lng: -2.1278 }, // London
            end: { lat: -42.35879219086626, lng: 47 },   // Toliara, Madagascar
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -42.35879219086626, lng: 47 },   // Toliara, Madagascar
          }
        ]} />}
    </div>
    </div>
  );
}
