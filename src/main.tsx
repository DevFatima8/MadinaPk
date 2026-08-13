import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'yet-another-react-lightbox/styles.css';
import "react-circular-progressbar/dist/styles.css";
import "swiper/swiper-bundle.css";
import './assets/css/combined.css'
import ContextProvider from './components/context/ContextProvider.tsx';
import { RouterProvider } from 'react-router';
import ROUTER from './routes/Router.tsx';
import ErrorBoundary from './components/elements/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <ErrorBoundary name="Global component main">
        <RouterProvider router={ROUTER} />
      </ErrorBoundary>
    </ContextProvider>
  </StrictMode>,
)
