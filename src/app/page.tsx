"use client"
import React from "react";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '../components/Card'
import { Modal } from '../components/Modal'
import { categories } from '../data/data'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null)
  return (
    <div className="container mx-auto px-4 py-12 space-y-12 bg-ca">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              title={category.title}
              icon={category.icon}
              onClick={() => setSelectedCategory(category)}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCategory && (
          <Modal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}