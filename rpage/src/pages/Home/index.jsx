import Hero from "./hero";
import Client from "./Client/Client";
import Members from "./Members/Members";
import Unlock from "./Unlock";
import Achievenments from "./Achievenments";
import Calendar from "./Calendar";
import Customer from "./Customer";
import Community from "./Community";

const Home = () => {
    return(
        <>
        <Hero/>
        <Client/>
        <Unlock/>
        <Achievenments/>
        <Calendar/>
        <Customer/>
        <Community/>
        </>
    )
}
export default Home;