'use client'

import { useChat } from 'ai/react'
import { generalPromptData } from './generalPromptData'
import { businessPromptData } from './businessPromptData'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '',
        content: `${generalPromptData} ${businessPromptData}`,
        role: 'system',
      },
    ],
  })

  return (
    <div>
      <ul className="divide-y">
        {messages
          .filter((m) => m.role !== 'system')
          .map((m, index) => (
            <li key={index} className="py-4">
              {m.role === 'user' ? 'You: ' : 'DonGPT: '}
              <span className="text-xl whitespace-pre-line">{m.content}</span>
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          spellCheck="true"
          className="w-full px-4 py-2 border border-gray-400 rounded-xl"
          type="text"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="px-4 font-semibold text-white bg-indigo-500 rounded-full shadow disabled:bg-slate-400"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}
