import React from 'react'
import { Redirect } from 'react-router-dom'
function RedirectView() {
  return (
    <div>
        <Redirect to="/view" />
    </div>
  )
}

export default RedirectView