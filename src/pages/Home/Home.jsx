import { Intro } from "../../components";
import { Profile } from "../../components";
import { Aboutme } from "../../components";
import { Sendmail } from "../../components";

const Home = () => {
  return (
    <div>
      <Intro />
      <Profile />
      <Aboutme />
      <Sendmail />
    </div>
  );
};

export default Home;
