import "./App.css";
import BlogImage from "./assets/illustration-article.svg";
import UserProfile from "./assets/image-avatar.webp";

const App = () => {
  return (
    <main id="blog-main" className="blog-main">
      <article id="card" className="card">
        <img
          id="card-illustration"
          src={BlogImage}
          alt="Article illustration"
          className="card-illustration"
        />

        <div id="article-badge" className="article-badge">
          <p id="article-badge-text" className="article-badge-text">
            Learning
          </p>
        </div>
        <p id="article-date" className="article-date">
          Published 21 Dec 2023
        </p>
        <h1 id="article-title" className="article-title">
          Html & CSS foundations
        </h1>
        <p id="article-description" className="article-description">
          These languages are the backbone of every website; defining structure,
          content, and presentation.
        </p>

        <div id="article-user-badge" className="article-user-badge">
          <img
            id="user-profile"
            className="user-profile"
            src={UserProfile}
            alt="User avatar"
          />
          <p id="user-name" className="user-name">
            Greg Hooper
          </p>
        </div>
      </article>
    </main>
  );
};

export default App;
