import { MoviesList } from './MoviesList';
import { Filters } from './Filters';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

export const MainContent = () => {
    return (
        <Content>
          <Layout className='container'>
            <Sider style={{backgroundColor: "#f0f2f5", padding: 10}}>
              <Filters />
            </Sider>
            <Content>
              <MoviesList />
            </Content>
          </Layout>
        </Content>
    )
}
