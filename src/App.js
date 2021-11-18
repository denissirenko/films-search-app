import { MainContent } from './components/MainContent';
import { Layout, BackTop } from 'antd';
const { Header, Footer } = Layout;



function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Layout>
        <Header style={{backgroundColor: "#f0f2f5"}}>
          <div className="container">
            films-app
          </div>
        </Header>
        <MainContent />
        <BackTop />
        <Footer>
          <div className="container" style={{ textAlign: 'center' }}>
            films-app ©{year}
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
