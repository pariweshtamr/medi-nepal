import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MediNepal - Doctors Appointment App",
  description: "Connect with Doctors anytime, anywhere",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>

            {/* footer */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
