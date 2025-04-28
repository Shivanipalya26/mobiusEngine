import React from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

interface LayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <main>{ children }</main>
            <Footer />
        </>
    )
}