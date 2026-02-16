import { Navigate, Route, Routes } from 'react-router-dom';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToHash from './components/ScrollToHash';
import DestinationDetailPage from './pages/DestinationDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen bg-midnight text-slate-100">
      <Header />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
