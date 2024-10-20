import { UIShowcase } from '@/components/UIShowcase'
import { buttons, gradients } from '@/data/uiElements'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Elements() {
  const categories = ['Buttons', 'Gradients']

  return (
    <div className="container mx-auto px-4 py-4 space-y-12 bg-transparent">
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        {categories.map((category) => (
          <Link key={category} href={`#${category.toLowerCase()}`}>
            <Badge variant="outline" className="text-xl py-2 px-4 hover:bg-card-bg hover:text-white transition-colors border-styled">
              {category}
            </Badge>
          </Link>
        ))}
      </div>
      <UIShowcase elements={buttons} title="Buttons" />
      <UIShowcase elements={gradients} title="Gradients" />
    </div>
  )
}