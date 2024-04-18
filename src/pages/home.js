import { NavBar } from "../components/navBar.js"

export const Home = {
    type: "div",
    children: [
        NavBar,
        {
            type: "h1",
            children: [
                {
                    type: "TEXT_NODE",
                    content: "Home"
                }
            ]
        },
    ]
}