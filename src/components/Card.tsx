


import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface CardProps {
  title: string
  icon: IconType
  onClick: () => void
}

export function Card({ title, icon: Icon, onClick }: CardProps) {
  return (
    <motion.div
      className="rounded-lg shadow-md p-6 cursor-pointer bg-card-bg-2 hover:bg-card-hover transition-colors"
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
    >
      <Icon className="text-4xl mb-4 text-primary transition-colors group-hover:text-foreground" />
      <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary hover:text-primary">{title}</h3>
    </motion.div>
  )
}