import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import Index from "./pages/Index";
import Aanmelden from "./pages/Aanmelden";
import VoorOpdrachtgevers from "./pages/VoorOpdrachtgevers";
import HorecaCrew from "./pages/HorecaCrew";
import HospitalityCrew from "./pages/HospitalityCrew";
import ServiceCrew from "./pages/ServiceCrew";
import Contact from "./pages/Contact";
import Offerte from "./pages/Offerte";
import Privacyverklaring from "./pages/Privacyverklaring";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import Bedankt from "./pages/Bedankt";
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
          <RevealOnScroll />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aanmelden" element={<Aanmelden />} />
            <Route path="/voor-opdrachtgevers" element={<VoorOpdrachtgevers />} />
            <Route path="/horeca-crew" element={<HorecaCrew />} />
            <Route path="/hospitality-crew" element={<HospitalityCrew />} />
            <Route path="/service-crew" element={<ServiceCrew />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offerte" element={<Offerte />} />
            <Route path="/privacy-verklaring" element={<Privacyverklaring />} />
            {/* Redirects voor oude URLs */}
            <Route path="/diensten" element={<Navigate to="/voor-opdrachtgevers" replace />} />
            <Route path="/projecten" element={<Navigate to="/" replace />} />
            <Route path="/werken-bij" element={<Navigate to="/aanmelden" replace />} />
            <Route path="/vacatures/op-en-afbouw" element={<Navigate to="/aanmelden" replace />} />
            <Route path="/vacatures/av-technician" element={<Navigate to="/aanmelden" replace />} />
            <Route path="/vacatures/specialisten" element={<Navigate to="/aanmelden" replace />} />
            <Route path="/privacyverklaring" element={<Navigate to="/privacy-verklaring" replace />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
            <Route path="/bedankt" element={<Bedankt />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
