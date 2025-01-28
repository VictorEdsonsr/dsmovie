import "./styles.css"
import Arrow from "../../assets/arrow.svg"

export default function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <img src={Arrow} className="dsmovie-flip-horizontal" />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <img src={Arrow} />
                </button>
            </div>
        </div>
    )
}
