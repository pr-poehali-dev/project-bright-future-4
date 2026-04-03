
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Flyer from "./pages/Flyer";
import House10x10 from "./pages/House10x10";
import HouseFrameTerrace from "./pages/HouseFrameTerrace";
import KarkasniyeDomaTula from "./pages/KarkasniyeDomaTula";
import KarkasniyeBanyaTula from "./pages/KarkasniyeBanyaTula";
import DachiTula from "./pages/DachiTula";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flyer" element={<Flyer />} />
          <Route path="/projects/house-10x10" element={<House10x10 />} />
          <Route path="/projects/house-frame-terrace" element={<HouseFrameTerrace />} />
          <Route path="/karkasnye-doma-tula" element={<KarkasniyeDomaTula />} />
          <Route path="/karkasnye-bani-tula" element={<KarkasniyeBanyaTula />} />
          <Route path="/dachi-tula" element={<DachiTula />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;