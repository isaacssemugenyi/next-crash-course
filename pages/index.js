import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Testing this one</title>
        <meta name="keywords" content="web development"></meta>
      </Head>
     <ArticleList articles={articles}/>
    </div>
  );
}

// getStaticProps => Fetch at buildtime
// getServersideProps => Fetch data on every request (but a little slower)
// getStaticPath => Dynamically generate the paths based on the data being fetched

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
