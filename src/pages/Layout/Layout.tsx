import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <header>
        <nav>nav</nav>
      </header>
      <hr />
      <Outlet />
      <hr />
      <footer>footer</footer>
    </>
  )
}
