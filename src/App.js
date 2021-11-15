import { MoviesList } from './components/MoviesList';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          Header
        </Header>
        <Content>
          <Layout>
            <Sider>
              aside
            </Sider>
            <Content>
              <MoviesList />
            </Content>
          </Layout>
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
