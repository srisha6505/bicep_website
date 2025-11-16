import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const HomePage = lazy(() => import('./pages/HomePage'));
const IncubationsPage = lazy(() => import('./pages/IncubationsPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const ClubsPage = lazy(() => import('./pages/ClubsPage'));
const ClubDetailPage = lazy(() => import('./pages/ClubDetailPage'));
const IdeaBankPage = lazy(() => import('./pages/IdeaBankPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const IncubateeDetailPage = lazy(() => import('./pages/IncubateeDetailPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-background">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/incubations/*" element={<IncubationsPage />} />
                <Route path="/incubatee/:slug" element={<IncubateeDetailPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/event/:slug" element={<EventDetailPage />} />
                <Route path="/clubs" element={<ClubsPage />} />
                <Route path="/club/:slug" element={<ClubDetailPage />} />
                <Route path="/ideabank" element={<IdeaBankPage />} />
                <Route path="/facilities" element={<FacilitiesPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;