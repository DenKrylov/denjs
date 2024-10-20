import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { MainSection } from "../components/organisms/MainSection";
import { ReviewsSection } from "../components/organisms/ReviewsSection";
import { ServicesSection } from "../components/organisms/ServicesSection";

export default function HomePage() {
	return (
		<>
			<Header />
			<MainSection />
			<ServicesSection />
			<ReviewsSection />
			<Footer />
		</>
	);
}
