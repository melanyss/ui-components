import { FaRegSquare, FaFont, FaPalette, FaLayerGroup, FaImage } from 'react-icons/fa'

export const categories = [
  {
    id: 'buttons',
    title: 'Buttons',
    icon: FaRegSquare,
    items: [
      {
        id: 'button1',
        name: 'Primary Button',
        code: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>',
      },
      {
        id: 'button2',
        name: 'Secondary Button',
        code: '<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Button</button>',
      },
      // Add more button styles...
    ],
  },
  {
    id: 'fonts',
    title: 'Fonts',
    icon: FaFont,
    items: [
      {
        id: 'font1',
        name: 'Heading 1',
        code: '<h1 class="text-4xl font-bold">Heading 1</h1>',
      },
      {
        id: 'font2',
        name: 'Paragraph',
        code: '<p class="text-base leading-relaxed">This is a paragraph.</p>',
      },
      // Add more font styles...
    ],
  },
  {
    id: 'gradients',
    title: 'Gradients',
    icon: FaPalette,
    items: [
      {
        id: 'gradient1',
        name: 'Blue to Purple',
        code: '<div class="bg-gradient-to-r from-blue-500 to-purple-500 h-20 w-full"></div>',
      },
      {
        id: 'gradient2',
        name: 'Green to Yellow',
        code: '<div class="bg-gradient-to-r from-green-400 to-yellow-500 h-20 w-full"></div>',
      },
      // Add more gradients...
    ],
  },
  {
    id: 'components',
    title: 'Components',
    icon: FaLayerGroup,
    items: [
      {
        id: 'component1',
        name: 'Card',
        code: '<div class="bg-white shadow-md rounded-lg p-6"><h2 class="text-xl font-semibold mb-2">Card Title</h2><p class="text-gray-600">Card content goes here.</p></div>',
      },
      {
        id: 'component2',
        name: 'Alert',
        code: '<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert"><p class="font-bold">Be Warned</p><p>Something not ideal might be happening.</p></div>',
      },
      // Add more components...
    ],
  },/* 
  {
    id: 'backgrounds',
    title: 'Backgrounds',
    icon: FaImage,
    items: [
      {
        id: 'bg1',
        name: 'Dotted Pattern',
        code: '<div class="bg-gray-100 bg-opacity-25 bg-dotted-pattern h-40 w-full"></div>',
      },
      {
        id: 'bg2',
        name: 'Wavy Pattern',
        code: '<div class="bg-blue-100 bg-opacity-25 bg-wavy-pattern h-40 w-full"></div>',
      },
      // Add more backgrounds...
    ],
  }, */
]