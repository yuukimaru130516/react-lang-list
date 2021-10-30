import { useState } from "react";
import { Button } from 'react-bootstrap';

export const Form = ( { onAddLang }) => {
  const [text, setText] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    onAddLang(text);
  }

  return(
    <div>
      <h3 className="pt-3 pb-3">フォームを表示</h3>
      <form onSubmit = {submitForm}>
        <div className="form-floating mb-3">
          <input id="floatingInput" className="form-control" type="text" value={text} placeholder="言語を追加" 
                onChange={(e) => setText(e.target.value)} />
          <label for="floatingInput">言語を追加する</label>
        </div>
        <Button variant="outline-dark" type="submit">追加</Button>     
      </form>
    </div>
  )
}