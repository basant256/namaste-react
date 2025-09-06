import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"; 
import { createBrowserRouter, RouterProvider } from "react-router";
//console.log(cards);

const AppLayout = () => {
    return (
    <div className="app">
        <HeaderComponent/>
        <Body/>
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
    },
    {
        path: "/about",
        element: <About/>,

    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>)