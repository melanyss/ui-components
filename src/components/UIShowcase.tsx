import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-hot-toast'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UIElement {
  id: string
  name: string
  html: string
  css: string
  component: React.ReactNode
}

interface UIShowcaseProps {
  elements: UIElement[]
  title: string
}

export function UIShowcase({ elements, title }: UIShowcaseProps) {
  const [selectedElement, setSelectedElement] = useState<UIElement | null>(null)

  const handleCopy = (text: string) => {
    toast.success('Copied to clipboard!')
  }

  return (
    <div className="space-y-4 bg-transparent">
      <h3 className="text-4xl font-bold text-primary p-10 mb-4 text-center" id={title.toLowerCase()}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-14">
        {elements.map((element) => (
          <motion.div
            key={element.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-4 bg-card-bg-2 rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedElement(element)}
          >
            {element.component}
          </motion.div>
        ))}
      </div>
      <Dialog open={!!selectedElement} onOpenChange={() => setSelectedElement(null)}>
        <DialogContent className="sm:max-w-[600px] bg-card-bg">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-semibold mb-6">{selectedElement?.name}</DialogTitle>
            <DialogDescription className="text-center">
                    Copy the HTML and CSS for this component.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="html" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-6 pb-6 mb-6">
              <TabsTrigger value="html" className="border-styled-2 mb-8 p-4 text-white">HTML</TabsTrigger>
              <TabsTrigger value="css" className="border-styled-2 mb-8 p-4 text-white">CSS</TabsTrigger>
            </TabsList>
            <TabsContent value="html">
              <pre className="bg-muted p-10 rounded-md overflow-x-auto whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto">
                <code>{selectedElement?.html}</code>
              </pre>
              <CopyToClipboard text={selectedElement?.html || ''} onCopy={() => handleCopy('HTML')}>
                <Button className="mt-2 w-full bg-primary text-white hover:bg-opacity-90 transition-colors border-styled">Copy HTML</Button>
              </CopyToClipboard>
            </TabsContent>
            <TabsContent value="css">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto">
                <code>{selectedElement?.css}</code>
              </pre>
              <CopyToClipboard text={selectedElement?.css || ''} onCopy={() => handleCopy('CSS')}>
                <Button className="mt-2 w-full bg-primary text-white hover:bg-opacity-90 transition-colors border-styled">Copy CSS</Button>
              </CopyToClipboard>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  )
}