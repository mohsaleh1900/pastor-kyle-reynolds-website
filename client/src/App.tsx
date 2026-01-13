import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar, Footer } from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Sermons from "@/pages/Sermons";
import Blog from "@/pages/Blog";
import Book from "@/pages/Book";
import Campus from "@/pages/Campus";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sermons" component={Sermons} />
          <Route path="/blog" component={Blog} />
          <Route path="/book" component={Book} />
          <Route path="/campus" component={Campus} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
