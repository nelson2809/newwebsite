import React from 'react'

const ChatBotAi = () => {
  const suggestions = [
    'What does CODEWORK do?',
    'What applications does CODEWORK have?',
    'What industries does CODEWORK serve?',
    'What is a CODEWORK initial production deployment?',
    'What agentic AI solutions does CODEWORK have?',
    'What is CODEWORK Transform?'
  ]

  return (
    <section className="w-full bg-secondary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl bg-primary text-secondary rounded-md shadow-lg px-6 py-4 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary text-sm">✦</span>
          <span className="text-sm sm:text-base">Ask us anything about CODEWORK</span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((q, i) => (
            <button
              key={i}
              type="button"
              className="text-left bg-secondary border border-primary/10 rounded-md px-5 py-4 text-primary shadow-sm hover:border-primary transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChatBotAi
