import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { MainSection } from "../components/organisms/MainSection";
import { ProjectsSection } from "../components/organisms/ProjectsSection";
import { ReviewsSection } from "../components/organisms/ReviewsSection";
import { SchemeSection } from "../components/organisms/SchemeSection";
import { ServicesSection } from "../components/organisms/ServicesSection";

export default function HomePage() {
	return (
		<>
			<Header />
			<MainSection />
			<ServicesSection />
			<SchemeSection />
			<ProjectsSection />
			<ReviewsSection />
			<Footer />
		</>
	);
}
