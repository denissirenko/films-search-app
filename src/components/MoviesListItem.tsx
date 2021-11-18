import { Card } from 'antd';
import { Col } from 'antd';
const { Meta } = Card;


interface IMovies {
    backdrop_path?: string;
    poster_path: string;
    title: string;
    vote_average: number;
}

export const MoviesListItem = ({backdrop_path, poster_path, title, vote_average}: IMovies) => {
    return (
        <Col span={6} className="CardItemHolder">
            <Card 
                hoverable
                cover={<img alt={title} src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`} />}
            >
                <Meta title={title} description={`рейтинг: ${vote_average}`} />
            </Card>
        </Col>
    )
}
