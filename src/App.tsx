import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((count) => count + 1)
  }

  function decrement() {
    setCount((count) => count - 1)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <p className="text-lg font-bold" role="alert">
        Valor: {count}
      </p>
      <div className="flex flex-row gap-6">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={increment}
          role="button"
        >
          Aumentar
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={decrement}
          role="button"
        >
          Diminuir
        </button>
      </div>
    </div>
  )
}

export default App
