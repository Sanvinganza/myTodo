import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ProjectsCollection, ProjectObjectives, Layout } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectsCollection />} />
          <Route path="/:id" element={<ProjectObjectives />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
