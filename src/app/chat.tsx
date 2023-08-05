'use client'

import { useChat } from 'ai/react'
import { generalPromptData } from './generalPromptData'
import { businessPromptData } from './businessPromptData'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    initialMessages:[
      {
        id: '',
        content: `${generalPromptData} ${businessPromptData}`,
        role: 'system',
      }
    ]
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

      <form onSubmit={handleSubmit} className='flex gap-4'>
        <input
          spellCheck="true"
          className="dark:bg-slate-800 w-full border rounded-xl border-slate/50 py-2 px-4"
          type='text'
          placeholder='Say something...'
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="bg-indigo-500 text-white font-semibold shadow rounded-full px-4 disabled:bg-slate-400"
          type="submit">Send</button>
      </form>
    </div>
  )

}

