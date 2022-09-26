import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './routes/App'

import './main.styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ap49krnk.us.auth0.com"
      clientId="gYsJs9sGt2VKTzqeYApGRk4PmODu97cA"
      redirectUri={window.location.origin + '/profile/new'}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
