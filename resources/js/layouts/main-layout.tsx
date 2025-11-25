import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Persistent UI elements go here */}
            <Navbar />

            <main className="flex-1">
                {/* This {children} is exactly like <Outlet /> in React Router */}
                {children}
            </main>

            <Footer />
            <Toaster />
        </div>
    );
}