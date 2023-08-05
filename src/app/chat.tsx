'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return (
    <div>
      <ul className="divide-y">
      {messages
        .filter((m) => m.role !== 'system')
        .map((m, index) => (
          <li key={index} className="py-4">
            {m.role === 'user' ? 'User: ' : 'DonGPT: '}
            <span className="whitespace-pre-line">{m.content}</span>
          </li>
      ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type='text'
          placeholder='Say something...'
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )

}

