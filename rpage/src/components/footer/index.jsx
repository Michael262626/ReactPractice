import style from "../footer/index.module.css";
import Icon from "../../asset/Icon.png";
import mage4 from "../../asset/mage4.png";
import image1 from "../../asset/image1.png";
import image2 from "../../asset/image2.png";
import image3 from "../../asset/image3.png";
import Vector from "../../asset/Vector.png";

const Footer = () => {
    return(
        <>
            <footer className={style.footer}>
                <div>
                    <div className={style.fett}>
                        <img src={Icon} alt="logo"/>
                        <h2 style={{color: "#ffffff", fontSize: "30px"}}>Nexcent</h2>
                    </div>
                    <div className={style.fett}>
                        <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    </div>
                    <div className={style.image}>
                        <img src={mage4} alt=""/>
                        <img src={image1} alt=""/>
                        <img src={image2} alt=""/>
                        <img src={image3} alt=""/>
                    </div>
                </div>
                <div className={style.footerSider}>
                    <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label style={{display: 'flex', alignItems: 'center'}}>
                            <input placeholder="Your email address" className= {style.input}/>
                            <img src={Vector} className="image" alt="" style={{position: "relative", right: '30px'}}/>
                        </label>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;