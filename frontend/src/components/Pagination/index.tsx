import "./styles.css"
import Arrow from "../../assets/arrow.svg"
import { MoviePage } from "../../types/movies";

type Props = {
    page: MoviePage;
    onChange: Function
}

export default function Pagination({ page, onChange }: Props) {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button
                    className="dsmovie-pagination-button"
                    disabled={page?.first}
                    onClick={() => onChange(page.number - 1)}
                >
                    <img src={Arrow} className="dsmovie-flip-horizontal" />
                </button>
                <p>{`${page.totalElements <= 0 ? page?.number : page?.number + 1} de ${page?.totalPages}`}</p>
                <button
                    className="dsmovie-pagination-button"
                    disabled={page?.last}
                    onClick={() => onChange(page.number + 1)}
                >
                    <img src={Arrow} />
                </button>
            </div>
        </div>
    )
}
