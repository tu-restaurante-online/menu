import { useMemo } from 'react'
import { useMenu } from '../../context/MenuContext'

export default function CategoryFilter({ products }) {
  const { activeCategory, setActiveCategory } = useMenu()

  const categories = useMemo(() => {
    const map = new Map()
    products.forEach((p) => {
      if (p.category && !map.has(p.category.id)) {
        map.set(p.category.id, p.category)
      }
    })
    return Array.from(map.values())
  }, [products])

  if (categories.length === 0) return null

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      <button
        onClick={() => setActiveCategory('all')}
        className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          activeCategory === 'all'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === cat.id
              ? 'bg-orange-500 text-white shadow-sm'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}
