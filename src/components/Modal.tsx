import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-hot-toast'

interface ModalProps {
  category: {
    id: string
    title: string
    items: Array<{
      id: string
      name: string
      code: string
    }>
  }
  onClose: () => void
}

export function Modal({ category, onClose }: ModalProps) {
    const [copied, setCopied] = useState('')
  
    const handleCopy = (code: string) => {
      setCopied(code)
      toast.success('Copied to clipboard!')
      setTimeout(() => setCopied(''), 2000)
    }
  
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    }
  
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
        <motion.div
          className="bg-black rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <CopyToClipboard key={item.id} text={item.code} onCopy={() => handleCopy(item.code)}>
                <div className="border rounded p-4 cursor-pointer transition-colors">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="p-2 rounded">
                    <code className="text-sm">{item.code}</code>
                  </div>
                  {copied === item.code && (
                    <span className="text-green-500 text-sm mt-2 block">Copied!</span>
                  )}
                </div>
              </CopyToClipboard>
            ))}
          </div>
          <button
            className="mt-6 bg-primary text-white px-4 py-2 rounded transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}