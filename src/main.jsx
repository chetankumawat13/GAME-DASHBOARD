import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { MainRouter } from './router/MainRouter.jsx'
import GameContext from './context/GameContext.jsx'

createRoot(document.getElementById('root')).render(
    <GameContext>
        <RouterProvider router={MainRouter}>
            <App />
        </RouterProvider>
    </GameContext>
)
