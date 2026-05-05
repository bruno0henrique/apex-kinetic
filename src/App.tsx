import { useState } from 'react'

export default function App() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  async function handleGenerate() {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    })

    const data = await res.json()
    setResponse(data.result)
  }

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Apex Kinetic IA</h1>
      <input
        placeholder="Digite seu objetivo..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '100%', padding: 10 }}
      />
      <button onClick={handleGenerate} style={{ marginTop: 12 }}>
        Gerar treino com IA
      </button>
      <pre style={{ marginTop: 20 }}>{response}</pre>
    </div>
  )
}
