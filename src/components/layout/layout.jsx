import Header from './header';
import Footer from './footer';
import React  from 'react';

function Layout({ children }) {
    return (
        <div className="w-screen flex flex-col justify-between h-screen">
            <Header />
            <main className="mb-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;