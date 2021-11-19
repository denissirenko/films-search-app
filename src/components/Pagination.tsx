import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import { Pagination } from 'antd';

export const PaginationUI = () => {
    const  { page } = useTypedSelector( state => state.page);
    
    const { fetchPage } = useActions();

    function handleChange(value:number) {
        fetchPage(value)
    }

    return (
        <Pagination onChange={handleChange} style={{marginTop: 30, marginRight: 'auto', marginLeft: 'auto'}} defaultCurrent={page} total={500} pageSizeOptions={['20']}/>
    )
}
