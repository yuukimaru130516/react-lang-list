import {Button} from 'react-bootstrap';


function List ( { langs, onDeleteLang }) {

  const deleteLang  = (index) => {
    onDeleteLang(index);
  }

  return(
    <div>
      <h3 className="pt-3 pb-3">リストを表示</h3>
      {
          // JSXの繰り返しでは {key属性} が必須
          langs.map((lang, index) => {
            return <div className="d-flex justify-content-between mt-2" key={index} > 
              <div className="p-2"> { lang } </div>
              <div>
                <Button variant="outline-dark" onClick={ () => deleteLang(index)}>削除</Button>
              </div>
            </div>
          })
      }
    </div>
  )
}

export { List };