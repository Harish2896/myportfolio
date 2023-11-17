import PageTransition from "./PageTransition";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageTransition>
      <div className="w-screen h-screen bg-pink-200 text-black z-[1000]">
        About hello
        <Link to="/">Back to Home</Link>
      </div>
    </PageTransition>
  );
};

export default About;
