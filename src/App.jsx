import BlogImage from "./assets/illustration-article.svg";
import UserProfile from "./assets/image-avatar.webp";

const App = () => {
  return (
    <main className="grid min-h-screen w-full place-items-center bg-yellow-main p-6">
      <article className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-black bg-white-main p-6 shadow-[6px_6px_0_0_#000]">
        <img
          src={BlogImage}
          alt="Article illustration"
          className="block w-full rounded-xl"
        />

        <div className="self-start rounded bg-yellow-main px-3 py-1">
          <p className="text-sm font-extrabold">Learning</p>
        </div>

        <p className="text-sm text-gray-950">Published 21 Dec 2023</p>

        <h1 className="text-2xl font-extrabold leading-tight text-gray-950">
          HTML &amp; CSS foundations
        </h1>

        <p className="text-base leading-relaxed text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <div className="flex items-center gap-3 pt-2">
          <img src={UserProfile} alt="Greg Hooper avatar" className="h-8 w-8" />
          <p className="text-sm font-extrabold text-gray-950">Greg Hooper</p>
        </div>
      </article>
    </main>
  );
};

export default App;
