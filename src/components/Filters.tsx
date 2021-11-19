import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import { Select, Typography } from 'antd';

const { Title } = Typography;

const { Option } = Select;
export const Filters = () => {
    const  { filters } = useTypedSelector( state => state.filters);
    
    const { fetchFilters, fetchPage } = useActions();

    function handleChange(value:string) {
        fetchFilters(value);
        fetchPage(1);
    }

    return (
        <>
            <Title level={3}>Фильтры:</Title>
            <div style={{marginBottom: 10}}>Сортировать по:</div>
            <Select defaultValue={filters} style={{ width: 150 }} onChange={handleChange}>
                <Option key='popularity.desc' value="popularity.desc">Популярные по убыванию</Option>
                <Option key="popularity.asc" value="popularity.asc">Популярные по возростанию</Option>
                <Option key="vote-average.desc" value="vote-average.desc">Рейтинг по убыванию</Option>
                <Option key="vote_average.asc" value="vote_average.asc">Рейтинг по возрастанию</Option>
            </Select>
        </>
    )
}
