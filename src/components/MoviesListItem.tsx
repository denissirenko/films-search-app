interface IMovies {
    backdrop_path?: string;
    poster_path: string;
    title: string;
    vote_average: number;
}

export const MoviesListItem = ({backdrop_path, poster_path, title, vote_average}: IMovies) => {
    return (
        <div className="card">
            <img
            className="card-img-top card-img--height"
            src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
            alt={title}
            />
            <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <div className="card-text">Рейтинг: {vote_average}</div>
            </div>
        </div>
    )
}
