import { useServerSideEffect } from 'webshift';
import axios from 'axios';

import logger from '@logger';

export default () => {
    logger.verbose({message: "Render", meta: { component: 'Users'}});

    const [data, error] = useServerSideEffect('users', () => {
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                { data?.map(item => (
                    <li key={item?.id}>
                        <h3>{ item?.name } (Company: { item?.company.name })</h3>
                    </li>
                )) }
            </ul>
        </div>
    );
}