import { Inter } from 'next/font/google'
import { AuthProvider } from './context/auth-context';
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	openGraph: {
		title: "Orlando Rojas Abogado",
		description: "Experto en derecho Familiar y Sucesorio",
		images: {
			url: "/img/logo.jpeg",
		},
		locale: "es_CL",
		type: "website",
	},
};

export default function RootLayout({ children }) {

  return (

  <AuthProvider>
    <html lang="en">
      <body className={ inter.className }>
        {children}
      </body>
    </html>
  </AuthProvider>

  )
}
