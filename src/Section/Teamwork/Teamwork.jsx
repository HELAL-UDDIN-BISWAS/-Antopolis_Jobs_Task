import "./../Teamwork/Teamwork.css"
import image1 from "./../../../public/unsplash_Oalh2MojUuk.png"
import image2 from "./../../../public/unsplash_KdeqA3aTnBY.png"


const Teamwork = () => {
    return (
        <div className='Teamwork'>
            <div className="section">
                <div>
                    <img src={image1} alt="img" />
                </div>
                <div className="text">
                    <h2><span>Teamwork</span> is the key to our sucess</h2>
                    <p>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
                </div>
            </div>
            <div className="section1">
            <div className="text">
                    <h2>We are all in for the <br></br> <span>enviroment</span></h2>
                    <p>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world.</p>
                </div>
                <div>
                    <img src={image2} alt="img" />
                </div>
                
            </div>
        </div>
    );
};

export default Teamwork;