import Error400 from "../pages/others/Error/Error400";
import Error401 from "../pages/others/Error/Error401";
import Error403 from "../pages/others/Error/Error403";
import Error404 from "../pages/others/Error/Error404";
import Error500 from "../pages/others/Error/Error500";
import Error503 from "../pages/others/Error/Error503";
import ComingSoonSimple from "../pages/others/ComingSoon/ComingSoonSimple";
import ComingWithBgVideo from "../pages/others/ComingSoon/ComingWithBgVideo";
import ComingSoonWithBgImage from "../pages/others/ComingSoon/ComingSoonWithBgImage";
import LoginSample from "../Components/others/Authentication/Login";
import LoginWithBgVideo from "../Components/others/Authentication/LoginWithBgVideo";
import LoginImageWithBg from "../Components/others/Authentication/LoginImageWithBg";
import UnlockUser from "../Components/others/Authentication/UnlockUser";
import ForgetPassword from "../Components/others/Authentication/ForgetPassword";
import ResetPassword from "../Components/others/Authentication/ResetPassword";
import Maintenance from "../Components/others/Authentication/Maintenance";


export const authRoutes = [
 //others
 { path: `${process.env.PUBLIC_URL}/Others/Error400`, Component: <Error400/> },
 { path: `${process.env.PUBLIC_URL}/Others/Error401`, Component: <Error401/> },
 { path: `${process.env.PUBLIC_URL}/Others/Error403`, Component: <Error403/> },
 { path: `${process.env.PUBLIC_URL}/Others/Error404`, Component: <Error404/> },
 { path: `${process.env.PUBLIC_URL}/Others/Error500`, Component: <Error500/> },
 { path: `${process.env.PUBLIC_URL}/Others/Error503`, Component: <Error503/> },
 { path: `${process.env.PUBLIC_URL}/Others/ComingSimple`, Component: <ComingSoonSimple/> },
 { path: `${process.env.PUBLIC_URL}/Others/ComingwithBgVideo`, Component: <ComingWithBgVideo/> },
 { path: `${process.env.PUBLIC_URL}/Others/ComingWithBgImage`, Component: <ComingSoonWithBgImage/> },
 

 // Auth Pages
 { path: `${process.env.PUBLIC_URL}/auth/login`, Component: <LoginSample /> },
 { path: `${process.env.PUBLIC_URL}/auth/login-bg-img`, Component: <LoginImageWithBg /> },
 { path: `${process.env.PUBLIC_URL}/auth/login-bg-video`, Component: <LoginWithBgVideo /> },
 { path: `${process.env.PUBLIC_URL}/auth/register-simple`, Component: <LoginSample registerPage={true} /> },
 { path: `${process.env.PUBLIC_URL}/auth/register-with-bg-image`, Component: <LoginImageWithBg registerPage={true} /> },
 { path: `${process.env.PUBLIC_URL}/auth/register-With-bg-video`, Component: <LoginWithBgVideo registerPage={true} /> },
 { path: `${process.env.PUBLIC_URL}/auth/unlock-user`, Component: <UnlockUser /> },
 { path: `${process.env.PUBLIC_URL}/auth/forget-password`, Component: <ForgetPassword /> },
 { path: `${process.env.PUBLIC_URL}/auth/reset-password`, Component: <ResetPassword /> },
 { path: `${process.env.PUBLIC_URL}/auth/maintenance`, Component: <Maintenance /> },
];