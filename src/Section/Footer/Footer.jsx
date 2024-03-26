import "./../Footer/Footer.css"
import  image from './../../../public/Taste now1.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="footer">
                    <img  className="lago" src={image} alt="" />
            <div className="container">
                <div className="img">
                    <img src={image} alt="" />
                    <div className="icons">
                        <FaFacebookSquare className="icon"></FaFacebookSquare>
                        <IoLogoInstagram className="icon"></IoLogoInstagram>
                        <FaTwitter className="icon"></FaTwitter>
                        <FaYoutube className="icon"></FaYoutube>
                    </div>
                </div>
                <div className="text">
                    <p>Seslendirme ve Alt Jazz</p>
                    <p>Media Market</p>
                    <p>Gillie</p>
                    <p>Size Last</p>
                </div>
                <div className="text">
                    <p>Self Betimes</p>
                    <p>Yatırımcı İlişkileri</p>
                    <p>Basal Himmler</p>
                </div>
                <div className="text">
                    <p>Yard Market</p>
                    <p>Is İmkanları</p>
                    <p>Car Tercihleri</p>
                </div>
                <div className="text">
                    <p>Hedge Karla</p>
                    <p>Mullein Koşulları</p>
                    <p>Autumnal Bulgier</p>
                </div>
            </div>
            <div className="Allicon">
                        <FaFacebookSquare className="icon"></FaFacebookSquare>
                        <IoLogoInstagram className="icon"></IoLogoInstagram>
                        <FaTwitter className="icon"></FaTwitter>
                        <FaYoutube className="icon"></FaYoutube>
                    </div>
            
        </div>
    );
};

export default Footer;