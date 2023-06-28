import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
    title: 'Frontend Mentor | QR code component',
    description: 'Frontend Mentor - Challenge: QR code component',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={outfit.className}>{children}</body>
        </html>
    )
}
