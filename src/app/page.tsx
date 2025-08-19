import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Ueber from "@/components/Ueber";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-primary-50 to-white text-primary-900">
			<Header />
			<Hero />
			<ValueProps />
			<Ueber />
			<Kontakt />
			<Footer />
		</main>
	);
}
