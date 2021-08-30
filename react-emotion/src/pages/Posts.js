import { useServerSideEffect } from 'webshift';
import axios from 'axios';

import logger from '@logger';

export default function Posts() {
    logger.verbose({message: "[Render]", meta: { component: 'Users'}});

    const [data, error] = useServerSideEffect('posts', () => {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }, []);

    return (
        <div>
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