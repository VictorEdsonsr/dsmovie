import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"
import Pagination from "../../components/Pagination"
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { MoviePage } from "../../types/movies";


export default function Listing() {
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data)
            })
    }, [pageNumber])

    const handlePageChange = (nextPageNumber: number) => {
        setPageNumber(nextPageNumber);
    }

    return (
        <>
            <Pagination onChange={handlePageChange} page={page} />
            <div className="container">
                <div className="row ">
                    {page?.content.map((movie) => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
