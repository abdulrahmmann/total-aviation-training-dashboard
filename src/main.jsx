import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Analytics from "./pages/Analytics.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.jsx";
import ConfirmPasswordSent from "./pages/auth/ConfirmPasswordSent.jsx";
import ConfirmPasswordChange from "./pages/auth/ConfirmPasswordChange.jsx";
import ConfirmRegistering from "./pages/auth/ConfirmRegistering.jsx";
import ValidationPage from "./pages/ValidationPage.jsx";
import TooltipPage from "./pages/TooltipPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import {CalendarSchedulePage} from "./pages/CalendarSchedulePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Analytics/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage/>
    },
    {
        path: '/confirm-password-sent',
        element: <ConfirmPasswordSent/>
    },
    {
        path: '/confirm-password-change',
        element: <ConfirmPasswordChange/>
    },
    {
        path: '/confirm-register',
        element: <ConfirmRegistering/>
    },
    {
        path: '/validation',
        element: <ValidationPage/>
    },
    {
        path: '/tooltip',
        element: <TooltipPage/>
    },
    {
        path: '/calendar-schedule',
        element: <CalendarSchedulePage/>
    },
    {
        path: '/profile',
        element: <ProfilePage/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
