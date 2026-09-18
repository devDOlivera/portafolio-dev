"use client";

import { Habibi } from "next/font/google";
import { useEffect, useState } from "react";

export default function Background() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#050505] overflow-hidden">
        {/* Malla de puntos base (oscura y tenue) */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f22_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        
        {/* Malla de puntos iluminada que sigue el cursor */}
        <div 
            className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-50 transition-opacity duration-300"
            style={{
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            }}
        />
    </div>
    );
}