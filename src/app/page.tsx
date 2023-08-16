import Chat from './chat'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="container max-w-xl p-8 mx-auto">
      <h1 className="my-8 text-2xl text-center">DonGPT</h1>
      <Chat />
    </main>
  )
}
