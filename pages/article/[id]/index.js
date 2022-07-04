import { server } from '../../../config'
import Link from 'next/link'
import Meta from "../../../components/Meta"

const article = ({ article }) => {
//     const router = useRouter();
//     const { id } = router.query
//   return (
//     <div>This is in hopefull {id}
//     </div>

return (
    <>
    <Meta title={article.title}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
    </>
  )
}

// Fetch data at the time of request
/* export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
        props: {
            article
         }
    }
 } */

//  Much fast -> Static end
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map(({id}) => id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))
//     return {paths, fallback: false}
// }


// =============================
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map(({id}) => id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {paths, fallback: false}
}


export default article