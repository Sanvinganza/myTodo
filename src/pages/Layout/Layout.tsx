import { Outlet } from "react-router-dom"

const Footer = () => (
  <footer>
    <a href="https://github.com/Sanvinganza">
      <img
        src={require("../../images/github.png")}
        alt="https://github.com/Sanvinganza"
      />
    </a>
  </footer>
)

export function Layout() {
  return (
    <div className="container">
      <header>Tasks Manager</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
