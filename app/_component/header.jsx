"use client";

import { FloatingNav } from '@/components/ui/floating-navbar';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Highlighter, Home, User2 } from "lucide-react";

export default function Header() {
  const t = useTranslations()

  const NavMain = [
    {
        name: t('home'),
        link: "/",
        icon: <Home />
    },
    {
        name: t('about-me-nav'),
        link: "#about",
        icon: <User2 />
    },
    {
        name: t('projects'),
        link: "#projects",
        icon: <Highlighter />
    },
];
  return (
    <>
    <div className=''>
    <FloatingNav navItems={NavMain} />
    </div>
    </>
  )
}


