import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayot() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}