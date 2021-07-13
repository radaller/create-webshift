import { useServerSideEffect } from 'webshift';
import axios from 'axios';

export default () => {

    const [data] = useServerSideEffect('users', () => {
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }, []);

    return (
        <div>
            { console.log("[Render]", "<Users />") }
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