import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="py-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
