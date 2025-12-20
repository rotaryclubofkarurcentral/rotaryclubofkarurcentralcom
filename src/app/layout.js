import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rotary Club of Karur Central",
  description: "Rotary Club of Karur Central",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{padding:'12px 20px',borderBottom:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <a href="/" style={{fontWeight:700,textDecoration:'none',color:'inherit'}}>Rotary Club of Karur Central</a>
          <nav style={{display:'flex',gap:12,alignItems:'center'}}>
            <a href="/" style={{textDecoration:'none',color:'inherit'}}>Home</a>
            <a href="/docs" style={{textDecoration:'none',color:'var(--accent, #0066cc)'}}>Docs</a>
          </nav>
        </header>
        <main style={{padding:20}}>{children}</main>
        <footer style={{padding:20,textAlign:'center',borderTop:'1px solid #f0f0f0',color:'#666'}}>
          © Rotary Club of Karur Central
        </footer>
      </body>
    </html>
  );
}
