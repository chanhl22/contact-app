import React from "react";
import UserPage from "./UserPage";

const MainRouteConfigs = [
    {
        path: "/user",
        element: <UserPage />,
        exact: true,
    },
];

export default MainRouteConfigs;
