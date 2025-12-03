import { createFileRoute } from '@tanstack/react-router'
import logo from '@/logo.svg'

export const Route = createFileRoute('/_public/')({
  component: App,
})

function App() {
  return (
    <div className="dark:text-white text-black">
      Outlet
    </div>
  )
}