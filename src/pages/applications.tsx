import { useState } from 'react'

const initialData: Record<string, { id: number; company: string; role: string }[]> = {
  Applied: [
    { id: 1, company: 'TCS', role: 'Frontend Developer' },
    { id: 2, company: 'Infosys', role: 'Developer' },
  ],
  Assessment: [
    { id: 3, company: 'JTG', role: 'Software Developer' },
  ],
  Interview: [
    { id: 4, company: 'Wipro', role: 'Engineer' },
  ],
  Offer: [
    { id: 5, company: 'Google', role: 'SDE' },
  ],
}

const columns = ['Applied', 'Assessment', 'Interview', 'Offer']

const colors: Record<string, string> = {
  Applied: 'bg-blue-50 border-blue-200',
  Assessment: 'bg-yellow-50 border-yellow-200',
  Interview: 'bg-purple-50 border-purple-200',
  Offer: 'bg-green-50 border-green-200',
}

export default function Applications() {
  const [data, setData] = useState(initialData)
  const [dragging, setDragging] = useState<{ id: number; from: string } | null>(null)

  const handleDrop = (toColumn: string) => {
    if (!dragging) return
    const card = data[dragging.from].find(c => c.id === dragging.id)
    if (!card) return
    setData(prev => ({
      ...prev,
      [dragging.from]: prev[dragging.from].filter(c => c.id !== dragging.id),
      [toColumn]: [...prev[toColumn], card],
    }))
    setDragging(null)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h2>
      <div className="grid grid-cols-4 gap-4">
        {columns.map(col => (
          <div
            key={col}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(col)}
            className={`rounded-xl border p-4 min-h-64 ${colors[col]}`}
          >
            <h3 className="font-semibold text-gray-700 mb-3">{col} <span className="text-gray-400 text-sm">({data[col].length})</span></h3>
            {data[col].map(card => (
              <div
                key={card.id}
                draggable
                onDragStart={() => setDragging({ id: card.id, from: col })}
                className="bg-white rounded-lg p-3 mb-2 shadow-sm cursor-grab border border-gray-100"
              >
                <p className="font-medium text-gray-800">{card.company}</p>
                <p className="text-sm text-gray-500">{card.role}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}