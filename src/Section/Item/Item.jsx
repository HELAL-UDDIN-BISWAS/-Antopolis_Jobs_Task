
import { IoPizzaSharp } from "react-icons/io5";
import { LiaHamburgerSolid } from "react-icons/lia";
import { CiBurger } from "react-icons/ci";
import { LuSalad } from "react-icons/lu";
import './../../Section/Item/Item.css'
const Item = () => {
    return (
        <div className="ItemWidth">
            <div className="AllItem">
                <div className="item"><button><IoPizzaSharp className="icon"/>Pizzas</button></div>
                <div className="item"><button><LiaHamburgerSolid className="icon"/>Burgers</button></div>
                <div className="item"><button><LuSalad className="icon"/>Salads</button></div>
                <div className="item"><button><CiBurger className="icon"/>Combos</button></div>
            </div>
            
        </div>
    );
};

export default Item;