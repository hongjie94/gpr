
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ApolloProvider } from "@/components/ApolloProvider";
import Nav from "@/components/NavBar";
import Footer from "@/components/Footer/index";
import ScrollToTopButton from '@/components/ui/scrollToTopButton';

export const metadata: Metadata = {
  title: "League of Legends Hub",
  description: "2013 Global Power Rankings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="font-sans" suppressHydrationWarning>
          <ApolloProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Nav />
              {children}
              <ScrollToTopButton/>
              <Footer/>
            </ThemeProvider>
          </ApolloProvider>
        </body>
      </html>
    </>
  );
}
