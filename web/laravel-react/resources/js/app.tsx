import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import Index from '@/pages/Index'
import Dogs from '@/pages/dogs/Index'
import DogsBreed from '@/pages/dogs/_breed'
import Layout from '@/components/Layout'
import { HelmetProvider } from 'react-helmet-async'

export default function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route Component={Layout}>
                        <Route path="/" Component={Index} />
                        <Route path="/dogs" Component={Dogs} />
                        <Route path="/dogs/:breed" Component={DogsBreed} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )
}

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(<App />)
