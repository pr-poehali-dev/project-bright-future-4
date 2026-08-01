
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Flyer = lazy(() => import("./pages/Flyer"));
const House10x10 = lazy(() => import("./pages/House10x10"));
const HouseFrameTerrace = lazy(() => import("./pages/HouseFrameTerrace"));
const KarkasniyeDomaTula = lazy(() => import("./pages/KarkasniyeDomaTula"));
const KarkasniyeBanyaTula = lazy(() => import("./pages/KarkasniyeBanyaTula"));
const DachiTula = lazy(() => import("./pages/DachiTula"));
const HouseModern63 = lazy(() => import("./pages/HouseModern63"));
const Dacha68 = lazy(() => import("./pages/Dacha68"));
const Banya48 = lazy(() => import("./pages/Banya48"));
const Dacha54 = lazy(() => import("./pages/Dacha54"));
const House193 = lazy(() => import("./pages/House193"));
const Dacha36 = lazy(() => import("./pages/Dacha36"));
const Banya54 = lazy(() => import("./pages/Banya54"));
const AvitoDacha = lazy(() => import("./pages/AvitoDacha"));
const Card = lazy(() => import("./pages/Card"));
const House190 = lazy(() => import("./pages/House190"));
const House88 = lazy(() => import("./pages/House88"));
const House130 = lazy(() => import("./pages/House130"));
const Banya25 = lazy(() => import("./pages/Banya25"));
const Dacha64 = lazy(() => import("./pages/Dacha64"));
const Dacha48 = lazy(() => import("./pages/Dacha48"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
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
            <Route path="/card" element={<Card />} />
            <Route path="/projects/house-190" element={<House190 />} />
            <Route path="/projects/house-88" element={<House88 />} />
            <Route path="/projects/house-130" element={<House130 />} />
            <Route path="/projects/banya-25" element={<Banya25 />} />
            <Route path="/projects/dacha-64" element={<Dacha64 />} />
            <Route path="/projects/dacha-48" element={<Dacha48 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;