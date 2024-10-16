import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./routes/layouts/root-layout";
import ErrorPage from "./routes/pages/error_page/error-page";
import HomePage from "./routes/pages/home_page/home-page";
import CoachPage from "./routes/pages/coach_page/coach-page";
import StepByStepPage from "./routes/pages/step_by_step_page/step-by-step-page";
import GearPage from "./routes/pages/gear_page/gear-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/coach",
        element: <CoachPage />,
      },
      {
        path: "/step-by-step",
        element: <StepByStepPage />,
      },
      {
        path: "/gear",
        element: <GearPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
