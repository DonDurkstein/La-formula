import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { HomePage } from "./components/HomePage";
import NotFound from "./pages/NotFound";
import CanvasBackground from "./components/CanvasBackground";
import CustomCursor from "./components/CustomCursor";
import { useEffect } from "react";

// Wrapper component to handle language initialization
const LanguageRouter = ({ children }: { children: React.ReactNode }) => {
  const { lang, setLanguage } = useLanguage();
  const location = useLocation();

  // Ensure URL matches the current language
  useEffect(() => {
    const path = location.pathname;
    if (path === '/spanish' && lang !== 'es') {
      setLanguage('es');
    } else if (path === '/' && lang !== 'en') {
      setLanguage('en');
    } else if (path === '') {
      // Handle root path
      setLanguage('en');
      window.history.replaceState({}, '', '/');
    }
  }, [location.pathname, lang, setLanguage]);

  return <>{children}</>;
};

const queryClient = new QueryClient();

const AppContent = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/spanish" element={<HomePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor/>
      <CanvasBackground/>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <LanguageRouter>
            <AppContent />
          </LanguageRouter>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
