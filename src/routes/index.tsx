import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from 'pages/Home'

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default MainRoutes
