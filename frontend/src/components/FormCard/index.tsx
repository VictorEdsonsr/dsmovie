import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../../utils/requests";
import { validateEmail } from "../../utils/validate";

type Props = {
    movieId: string;
}

export default function FormCard({ movieId }: Props) {
    const [movie, setMovie] = useState<Movie>();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data)
            })
    }, [movieId])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        console.log(email, score);
        if (!validateEmail(email)) {
            window.alert("Email invalido!")
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                value: score
            }
        }

        axios(config).then((_response: AxiosResponse) => {
            navigate("/")
        });

    }

    return (
        <>
            <div className="dsmovie-form-container">
                <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
                <div className="dsmovie-card-bottom-container">
                    <h3>{movie?.title}</h3>
                    <form className="dsmovie-form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group dsmovie-form-group">
                            <label htmlFor="email">Informe seu email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group dsmovie-form-group">
                            <label htmlFor="score">Informe sua avaliação</label>
                            <select className="form-control" id="score">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="dsmovie-form-btn-container">
                            <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                        </div>
                    </form >
                    <Link to="/">
                        <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                    </Link>
                </div >
            </div >
        </>
    )
}
