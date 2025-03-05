import Cta from "../components/Cta";
import HomePage from "../components/Home";
import NavBar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

export default function Home() {
    return (
        <div className="mt-5">
            <NavBar/>
            <HomePage/>
            <Testimonial/>
            <Cta/>
        </div>
    )
}