import StarFull from "../../assets/star-full.svg";
import StarHalf from "../../assets/star-half.svg";
import StarEmpty from "../../assets/star-empty.svg";
import "./styles.css";

export default function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <img src={StarFull} />
            <img src={StarFull} />
            <img src={StarFull} />
            <img src={StarHalf} />
            <img src={StarEmpty} />
        </div>
    )
}
