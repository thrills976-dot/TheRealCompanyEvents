/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Packages } from "./pages/Packages";
import { Contact } from "./pages/Contact";
import { Inspiration } from "./pages/Inspiration";
import { InspirationProvider } from "./contexts/InspirationContext";

export default function App() {
  return (
    <InspirationProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inspiration" element={<Inspiration />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </InspirationProvider>
  );
}
