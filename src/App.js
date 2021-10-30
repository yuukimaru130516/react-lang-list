import { List } from './List';
import { Form } from './Form';
import {useState} from 'react';
import {LANGUAGES} from './const/language';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from 'react-bootstrap';


function App() {
  const [tab, setTab] = useState('list');
  
  const [langs, setLangs] = useState(LANGUAGES);

  
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  const deleteLang = (index) => {
    setLangs([...langs.slice(0, index), ...langs.slice(index + 1)]);
    setTab('list')
  }
  
  const body = tab === 'list' ? <List langs={langs} onDeleteLang={ deleteLang } /> : <Form onAddLang={addLang} />
  return (
    <div>
      <header className="container">
        <h2 className="mt-5">Reactによる言語リスト</h2>
        <Tabs onSelect={(k) => setTab(k)} defaultActiveKey="list" className="mb-3 mt-5">
          <Tab eventKey="list" title="リスト">
          </Tab>
          <Tab eventKey="form" title="フォーム">
          </Tab>
        </Tabs>
      </header>

      {/* tab の stateによって表示を変える(三項演算子) */}
      <div className="container">
        { body }
      </div>
    </div>
  );
}

export default App;
