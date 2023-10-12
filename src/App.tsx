import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Collections, Objectives, Layout } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Collections />} />
          <Route path="/:id" element={<Objectives />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
