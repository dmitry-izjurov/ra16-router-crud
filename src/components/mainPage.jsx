import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import NewPost from './newPost';
import PostsCollection from './postsCollection'

function MainPage() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:id" element={<PostsCollection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainPage;