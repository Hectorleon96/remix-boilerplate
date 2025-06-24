import Footer from "./footer";
import { Header } from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export function LayoutTemplate({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
