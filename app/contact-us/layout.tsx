import NavbarSec from '@/components/secondary-navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarSec />
      {children}
    </>
  )
}