import React from "react";
import GrammarPage from "./GrammarPage";

const GrammarConfigs = [
    {
        path: "/grammar/:input?",
        element: <GrammarPage />,
        exact: true,
    }
];

export default GrammarConfigs;
