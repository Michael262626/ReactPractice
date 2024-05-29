import style from "../../../components/navbar/index.module.css";
import Illustration from "../../../asset/Illustration.png";

const Hero = () => {
    return(
        <>
            <div className={style.heroSection}>
                <div>
                    <h1>Lessons and insights <span style={{color: "#4caf4f", display: "block"}}> from 8 years</span>
                    </h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button style={{
                        color: " #ffffff",
                        background: "#4caf4f",
                        padding: "10px",
                        borderRadius: "4px",
                        border: "none"
                    }}>Register
                    </button>
                </div>
                <img src={Illustration} alt="picture"/>
            </div>
        </>
    )
}
export default Hero;