import Layout from "../components/Layout.server";
import poster from "./poster.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="container pt-2 flex items-center justify-center flex-col prose">
        <h1 className="mt-10 pt-5 text-2xl">
          {" "}
          Welcome to <span className="text-5xl">The Soul Store</span>
        </h1>
        <p>
          If you are looking for cool t-shirts ,You are where you wanted to be.
        </p>
        <p>Make sure to checkout the catalog for our latest collections</p>
      </div>
      <img className="h-[70%] w-[100%] mt-10 pt-8" src={poster} />
    </Layout>
  );
}
