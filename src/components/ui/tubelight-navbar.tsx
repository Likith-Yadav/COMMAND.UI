"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string;
  activeTab?: string;
  onTabChange?: (name: string) => void;
}

export function NavBar({ items, className, activeTab: externalActiveTab, onTabChange }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0].name)
  const [, setIsMobile] = useState(false)

  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  
  const handleTabClick = (name: string) => {
    if (onTabChange) {
      onTabChange(name);
    } else {
      setInternalActiveTab(name);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-10 left-1/2 -translate-x-1/2 z-[60]",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-white/40 border border-white/40 backdrop-blur-2xl py-2 px-2 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(item.name);
                const el = document.querySelector(item.url);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "relative cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-500",
                "text-black/40 hover:text-black",
                isActive && "text-black",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={3} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-black/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-black rounded-t-full">
                    <div className="absolute w-12 h-6 bg-black/5 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-4 bg-black/5 rounded-full blur-sm -top-1" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
