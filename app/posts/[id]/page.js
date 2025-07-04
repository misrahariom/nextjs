import {posts} from '../../data/posts'
import styles from './Post.module.css'
import Layout from '@/app/navigation';

export default function Post({params}){
    const post = posts.find(post => post.id === params.id)
    if(!post)
        return <h1>Post not found</h1>;
    return (
        <Layout>
        <main className={styles.container}>
             <h1 className={styles.title}>Post Id: {post.title}</h1><br/>
             <p  className={styles.content}>Post Id: {post.content}</p><br/>
             <p>Public key is {process.env.NEXT_PUBLIC_API_KEY}
      </p>
        </main>
        </Layout>
    )
}