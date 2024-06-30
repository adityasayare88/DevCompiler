import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner";
import Meteors from "@/components/magicui/meteors";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {

  return (
    <>
    <Toaster position="bottom-right" theme="dark"/>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/compiler/:urlId?" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider >
    </>
  );
}

export function MeteorDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <Meteors number={30} />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Meteors
      </p>
    </div>
  );
}
export default App
