import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Game Info App',
  description: 'Browse games and see details',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-7xl w-full mx-auto p-6 md:p-10">{children}</main>
      </body>
    </html>
  );
}