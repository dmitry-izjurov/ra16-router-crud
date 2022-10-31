import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Icon from './img/photo.png';

function PostEdit({ text, editPost }) {

  const [valueTextArr, setvalueTextArr] = useState(text);
  const { id } = useParams();

  const handlerChange = e => {
    setvalueTextArr(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const elemForm = document.querySelector('.form-post_edit');
    const formData = new FormData(elemForm);
    formData.append('id', id);
    formData.append('content', document.querySelector('textarea').value);
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:7070/posts';
    xhr.open('POST', url);
    xhr.send(formData);
  }

  return (
    <form className="form-post_edit">
      <div className="box-header_edit">
        <header>Редактировать публикацию</header>
        <button className="button_cancel-edit" type="button" onClick={editPost}>X</button>
      </div>
      <div className="box-content">
        <img className="icon" src={Icon} alt="icon"/>
      </div>
      <label className="label">
        <textarea className="textarea" onChange={handlerChange} value={valueTextArr}></textarea>
      </label>
      <div className="box-buttons">
        <button className="button_edit-post" onClick={handleSubmit}><Link to="/">Сохранить</Link></button>
      </div>
    </form>
  )
}

export default PostEdit;
