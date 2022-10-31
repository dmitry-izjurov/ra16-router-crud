import { Link } from "react-router-dom";
import Icon from './img/photo.png'

function PostShow({ id, text, editPost }) {

  const remove = e => {
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:7070/posts/${id}`;
    xhr.open('DELETE', url);
    xhr.send();
  }

  return (
    <div className="box-post" data-id={id}>
      <div className="box-content">
        <img className="icon" src={Icon} alt="icon"/>
        <span>Имя и Фамилия</span>
      </div>
      <p className="text-post">{text}</p>
      <div className="box-buttons">
        <button className="button_edit-post" type="button" onClick={editPost}>Изменить</button>
        <button className="button_delete-post" type="button" onClick={remove}><Link to="/">Удалить</Link></button>
      </div>
    </div>
  )
}

export default PostShow;
