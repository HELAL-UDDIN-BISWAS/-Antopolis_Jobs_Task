import "./../../App.css"
import bannerImage from './../../../public/Food Background 2 1.png'

const Banner = () => {
    return (
        <div className="bannerArea"> 
           <div className="banner">
            <div className="textArea">
                <div>
                <h2 className="bannerText">Experience food <br /><span className="spanText">Delivery</span> like no other</h2>
                <p className="ptext">We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
                </div>
              
            </div>
            <div className="bannerImage">
                <div >
                    <img className="bannerImg" src={bannerImage} alt="" />
                    
                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;