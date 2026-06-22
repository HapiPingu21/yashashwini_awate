import './globals.css';
import './fix.css';
import './sidequests.css';
import './space.css';

export const metadata = {
  title: 'Yashashwini Awate — AI & ML Portfolio',
  description: 'Data, AI and human-centered technology by Yashashwini Awate.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
