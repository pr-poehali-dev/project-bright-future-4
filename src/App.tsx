
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
import HouseModern63 from "./pages/HouseModern63";
import Dacha68 from "./pages/Dacha68";
import Banya48 from "./pages/Banya48";
import Dacha54 from "./pages/Dacha54";
import House193 from "./pages/House193";
import Dacha36 from "./pages/Dacha36";
import Banya54 from "./pages/Banya54";
import AvitoDacha from "./pages/AvitoDacha";
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
          <Route path="/projects/house-modern-63" element={<HouseModern63 />} />
          <Route path="/projects/dacha-68" element={<Dacha68 />} />
          <Route path="/projects/banya-48" element={<Banya48 />} />
          <Route path="/projects/dacha-54" element={<Dacha54 />} />
          <Route path="/projects/house-193" element={<House193 />} />
          <Route path="/projects/dacha-36" element={<Dacha36 />} />
          <Route path="/projects/banya-54" element={<Banya54 />} />
          <Route path="/avito-dacha" element={<AvitoDacha />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;