import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TechGridBackground } from './components/TechGridBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { BookPage } from './pages/BookPage';
import { BlogArchivePage } from './pages/BlogArchivePage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TechGridBackground>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/blog" element={<BlogArchivePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TechGridBackground>
    </BrowserRouter>
  );
}

export default App;
