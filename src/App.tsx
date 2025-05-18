import './App.css'
import Content from './app/components/content/Content'
import Sidebar from './app/components/sidebar/Sidebar'

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 md:ml-[9.2%] w-full">
          <Content />
        </main>
      </div>
    </div>
  )
}

export default App
