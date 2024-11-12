"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";

interface NavigationItem {
  label: string;
  href: string;
}

interface DraggableNavButtonProps {
  navigationName?: string;
  navigationItems: NavigationItem[];
}

const DraggableNavButton = ({
  navigationName = "Navigation",
  navigationItems,
}: DraggableNavButtonProps) => {
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [constraints, setConstraints] = useState({ top: 30, bottom: 600 });

  useEffect(() => {
    setConstraints({
      top: 30,
      bottom: window.innerHeight - 200,
    });

    const handleResize = () => {
      setConstraints({
        top: 30,
        bottom: window.innerHeight - 200,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-[60px] lg:top-[64px] left-0 h-screen w-72 bg-white/80 backdrop-blur-sm 
                   shadow-lg z-40 border-r border-gray-200"
      >
        <div className="p-6 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{navigationName}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 px-4 rounded-lg 
                         text-gray-700 hover:text-primary-orange 
                         transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-[60px] lg:top-[64px] bg-black/20 z-30"
        />
      )}

      {!isOpen && (
        <motion.div
          drag
          dragConstraints={{
            left: 10,
            right: 10,
            top: constraints.top,
            bottom: constraints.bottom,
          }}
          dragElastic={0.2}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onClick={() => !isDragging && setIsOpen(true)}
          style={{
            x: 10,
            y,
            position: "fixed",
            zIndex: 50,
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <div
            className={`
              flex items-center justify-center
              w-12 h-12 rounded-full 
              bg-primary-orange/50 hover:bg-primary-orange text-black
              shadow-lg hover:shadow-xl
              transition-all duration-200
              ${isDragging ? "scale-110" : "scale-100"}
            `}
          >
            <Menu className="w-6 h-6" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default DraggableNavButton;
