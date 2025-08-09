import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Navigate, Routes } from 'react-router-dom'
import { ZMPRouter, SnackbarProvider } from '@/zaui'
import ErrorBoundary from '@/components/ErrorBoundary.jsx'
import '@/styles/global.scss'

import AppShell from '@/pages/_AppShell.jsx'
import Home from '@/pages/Home.jsx'
import DisplayDemo from '@/pages/DisplayDemo.jsx'
import FormDemo from '@/pages/FormDemo.jsx'
import Foundation from '@/pages/Foundation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
      <ErrorBoundary>
        <ZMPRouter>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/foundation" element={<Foundation />} />
              <Route path="/display" element={<DisplayDemo />} />
              <Route path="/form" element={<FormDemo />} />
            </Route>
          </Routes>
        </ZMPRouter>
      </ErrorBoundary>
    </SnackbarProvider>
  </React.StrictMode>
)
