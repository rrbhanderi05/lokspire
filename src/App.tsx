import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { WorkOSProvider } from "@/contexts/WorkOSContext";
import Home from "./pages/Home";
import PostListing from "./pages/PostListing";
import Listings from "./pages/Listings";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import BusinessPost from "./pages/BusinessPost";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import AuthCallback from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <WorkOSProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post" element={<PostListing />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/business/:id" element={<BusinessPost />} />
                <Route path="/about" element={<About />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </WorkOSProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;