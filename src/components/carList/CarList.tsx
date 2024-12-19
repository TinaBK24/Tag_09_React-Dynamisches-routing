import { Link, NavLink } from "react-router-dom";
import cars from '../../../cars.json'
import { ICard } from "../../../interfaces/ICards";
import { useEffect } from "react";

interface ICardList {
    setCard: React.Dispatch<React.SetStateAction<ICard[]>>
}

const CarList: React.FC<ICardList> = (props) => {
    useEffect(() => {
        props.setCard(cars)
    })

    return (
        <section>
            <h1>SuperCarlist</h1>
            <NavLink to="/">Home</NavLink>
            <article className="grid">
                {cars ? (
                    cars.map((car, index) => (
                        <div key={index}>
                            <p>{car.CarMake}</p>
                            <NavLink to=''></NavLink>
                            <Link to={`/super-carlist/car/${car.id}`}>Read more</Link>
                        </div>
                    ))) : (<p>Loading...</p>)}
            </article>
        </section>
    );
}

export default CarList;