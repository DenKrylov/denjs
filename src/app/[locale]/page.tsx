import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { Main } from "../components/templates/Main";
import { ServicesSection } from "../components/templates/ServicesSection";

export default function HomePage() {
	return (
		<>
			<Header />
			<Main />
			<ServicesSection />
			<Footer />
		</>
	);
}
