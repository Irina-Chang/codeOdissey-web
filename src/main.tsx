import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import './locales/i18n.ts'
import Login from './pages/Login/index.tsx';
import Login2 from './pages/Login/main.tsx';
import Courses from './pages/Courses/index.tsx';
import Registration from './pages/Registration/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "terms-of-use",
                element: <TermsOfUse/>
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "login2",
                element: <Login2/>
            },
            {
                path: "courses",
                element: <Courses/>
            },
            {
                path: "registration",
                element: <Registration/>
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
