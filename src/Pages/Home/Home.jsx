import Banner from "./Banner";
import Bluebird from "./BluebirdInfo";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Bluebird></Bluebird>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
