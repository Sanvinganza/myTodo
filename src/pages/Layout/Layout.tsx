import { Outlet } from "react-router-dom"

import "./Layout.scss"

export function Layout() {
  return (
    <div className="container">
      <header>Choose project</header>
      <body>
        <Outlet />
      </body>
      <footer>
        <a href="https://github.com/Sanvinganza">
          <img
            src={require("../../images/github.png")}
            alt="https://github.com/Sanvinganza"
          />
        </a>
      </footer>
    </div>
  )
}
