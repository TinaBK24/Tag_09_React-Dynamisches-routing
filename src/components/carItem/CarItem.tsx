import { useEffect, useState } from 'react';
import { ICard } from '../../../interfaces/ICards';
import { useParams } from 'react-router-dom';

interface ICardItem {
    card: ICard[]
}

const CarItem: React.FC<ICardItem> = (props) => {
    const [singleCard, setSingleCard] = useState<null | ICard>(null);

    const { id } = useParams();

    useEffect(() => {
        if (id && props.card) {
            const findItemById = props.card.find((item) => item.id === Number(id));
            setSingleCard(findItemById || null)
        }
    }, [id, props.card]);

    if (!singleCard) {
        return <p>Loading...</p>
    }

    return (
        <section>
            <p>{singleCard.CarMake}</p>
            <p>{singleCard.carModel}</p>
            <p>{singleCard.CarYear}</p>
        </section>
    );
}

export default CarItem;