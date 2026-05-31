import { Hero } from './sections/Hero'
import { Problem } from './sections/Problem'
import { Solution } from './sections/Solution'
import { ScrollProgress } from './components/ScrollProgress'
import { FloatingCTA } from './components/FloatingCTA'

export default function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <main className="app-frame">
        <Hero />
        <Problem />
        <Solution />
      </main>
      <FloatingCTA />
    </div>
  )
}
