"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProductSidebar from "@/app/components/ProductpageComponents/productsidebar/page";

// Sample icons or images for each tool can be imported here or provided through URLs

const toolsData = [
  { name: "LiDAR", description: "Light Detection and Ranging technology for high precision mapping.", iconUrl: "/images/pic1.jpeg" },
  { name: "RIDAR", description: "Advanced radar technology for object detection and tracking.", iconUrl: "/images/pic2.jpeg"  },
  { name: "Vision Pro", description: "High-resolution vision system for detailed image capture.",iconUrl: "/images/pic3.jpeg"  },
  // Add more tools as needed
];

const ToolCard = ({ name, description, iconUrl }) => (
  <div className="border border-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-4 text-center space-y-3">
    <Image src={iconUrl} alt={`${name} icon`} width={60} height={60} className="mx-auto" />
    <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const Tools = () => (<div className="flex">
    <ProductSidebar/>
  <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
    <h2 className="text-3xl font-bold text-center text-gray-800">Tools Used in This Project</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {toolsData.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  </div>
  </div>

);

export default Tools;
