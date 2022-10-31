import { Link } from "react-router-dom";

function NewPost() {

  const handleSubmit = e => {
    e.preventDefault();
    const elemForm = document.querySelector('.form-post_create');
    const formData = new FormData(elemForm);
    formData.append('id', 0);
    formData.append('content', document.querySelector('textarea').value);
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:7070/posts';
    xhr.open('POST', url);
    xhr.send(formData);
  }

  return (
    <>
      <form className="form-post_create">
        <label className="label">
          <textarea className="textarea"></textarea>
        </label>
        <button className="button_create" type="button" onClick={handleSubmit}><Link to="/">Опубликовать</Link></button>
        <button className="button_cancel" type="button"><Link to="/">X</Link></button>
      </form>
    </>
  )
}

export default NewPost;