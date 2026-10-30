import { ThemeProvider } from "@/components/theme-provider"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("No se encontró el elemento raíz con ID 'root'")
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)