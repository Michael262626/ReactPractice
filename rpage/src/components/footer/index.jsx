import style from "../navbar/index.module.css";
import Icon from "../../asset/Icon.png";
import mage4 from "../../asset/mage4.png";
import image1 from "../../asset/image1.png";
import image2 from "../../asset/image2.png";
import image3 from "../../asset/image3.png";

const Footer = () => {
    return(
        <>
            <footer className={style.footer}>
                <div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={Icon} alt="logo"/>
                        <h2 style={{color: "#ffffff", fontSize: "30px"}}>Nexcent</h2>
                    </div>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    <div style={{display: 'flex', gap: '10px'}}>
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
                        <label>
                            <input placeholder="Your email address" className= {style.input}/>
                            {/*<img src="asset/send.png" className="image"/>*/}
                        </label>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;