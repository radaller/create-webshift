import { useServerSideEffect } from 'webshift';
import axios from 'axios';

export default () => {

    const [data] = useServerSideEffect('posts', () => {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }, []);

    return (
        <div>
            { console.log("[Render]","<Posts />") }
            <h2>Posts</h2>
            <ul>
                { data?.map(item => (
                    <li key={ item?.id }>
                        <h3>{ item?.title }</h3>
                        <p>{ item?.body }</p>
                    </li>
                )) }
            </ul>
        </div>
    );
}