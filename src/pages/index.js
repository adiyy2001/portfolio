import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation.component";
import Hero from "../components/Hero/Hero.component";
import Projects from "../components/Projects/Projects.component";
import Technologies from "../components/Technologies/Technologies.component";
import Timeline from "../components/TimeLine/TimeLine.component";
import { Layout } from "../layout/Layout.component";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
