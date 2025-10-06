import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import { Page } from './types';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const handleNavigation = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onNavigate={handleNavigation} />;
      case Page.ABOUT:
        return <AboutPage />;
      case Page.PRODUCTS:
        return <ProductsPage />;
      case Page.CONTACT:
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <AppProvider>
      <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl">
          <Header onNavigate={handleNavigation} currentPage={currentPage} />
          <main className="p-4 sm:p-6 md:p-8">
            {renderPage()}
          </main>
          <Footer onNavigate={handleNavigation} />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;