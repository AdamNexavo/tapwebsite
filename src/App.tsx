import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Diensten from "./pages/Diensten";
import Offerte from "./pages/Offerte";
import Contact from "./pages/Contact";
import Projecten from "./pages/Projecten";
import WerkenBij from "./pages/WerkenBij";
import OpEnAfbouwVacature from "./pages/vacatures/OpEnAfbouwVacature";
import AvTechnicianVacature from "./pages/vacatures/AvTechnicianVacature";
import SpecialistenVacature from "./pages/vacatures/SpecialistenVacature";
import Privacyverklaring from "./pages/Privacyverklaring";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/offerte" element={<Offerte />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/werken-bij" element={<WerkenBij />} />
            <Route path="/vacatures/op-en-afbouw" element={<OpEnAfbouwVacature />} />
            <Route path="/vacatures/av-technician" element={<AvTechnicianVacature />} />
            <Route path="/vacatures/specialisten" element={<SpecialistenVacature />} />
            <Route path="/privacyverklaring" element={<Privacyverklaring />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
            {/* Redirects voor oude URLs */}
            <Route path="/vacatures-evenementenbouwer" element={<Navigate to="/vacatures/op-en-afbouw" replace />} />
            <Route path="/vacatures-avtechnican" element={<Navigate to="/vacatures/av-technician" replace />} />
            <Route path="/vacatures" element={<Navigate to="/werken-bij" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
