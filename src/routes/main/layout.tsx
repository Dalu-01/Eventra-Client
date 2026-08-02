import { Outlet } from 'react-router'
import { Nav } from '@/components/nav/nav'
import { Footer } from '@/components/footer/footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      <Nav />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
