"use client";

import { FloatingNav } from '@/components/ui/floating-navbar';
import { NavMain } from '@/constant/constant'
import React from 'react'

export default function Header() {
  return (
    <>
    <div className=''>
    <FloatingNav navItems={NavMain} />
    </div>
    </>
  )
}


