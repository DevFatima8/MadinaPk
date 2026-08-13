import { createBrowserRouter } from 'react-router';
import App from '../App';
import MainLayout from '../layout/DefaultLayout';

// Home Pages
import HomeOne from '../home/HomeOne';
import About from '../home/about';
import Services from '../home/services';
import Products from '../home/products';
import Contact from '../home/contact';

// Error Page
import ErrorPage from '../page/error/ErrorPage';

const ROUTER = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    { index: true, element: <HomeOne /> },
                    { path: "about", element: <About /> },
                    { path: "services", element: <Services /> },
                    { path: "products", element: <Products /> },
                    { path: "contact", element: <Contact /> },
                    { path: "*", element: <ErrorPage /> }
                ]
            }
        ]
    }
]);

export default ROUTER;