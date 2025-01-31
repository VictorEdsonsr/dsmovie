import StarFull from "../../assets/star-full.svg";
import StarHalf from "../../assets/star-half.svg";
import StarEmpty from "../../assets/star-empty.svg";
import "./styles.css";

type Props = {
    score: number;
}

type StarProps = {
    fill: number;
}

function Stars({ fill }: StarProps) {
    if (fill === 1) {
        return <img src={StarFull} alt="star full" />;
    } else if (fill === 0) {
        return <img src={StarEmpty} alt="star empty" />;
    } else {
        return <img src={StarHalf} alt="star half" />
    }
}


export default function MovieStars({ score }: Props) {
    function getFills(score: number) {

        const fills = [0, 0, 0, 0, 0];

        const integerPart = Math.floor(score);

        for (let i = 0; i < integerPart; i++) {
            fills[i] = 1;
        }

        const diff = score - integerPart;
        if (diff > 0) {
            fills[integerPart] = 0.5;
        }

        return fills;
    }

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Stars fill={fills[0]} />
            <Stars fill={fills[1]} />
            <Stars fill={fills[2]} />
            <Stars fill={fills[3]} />
            <Stars fill={fills[4]} />
        </div>
    )
}
