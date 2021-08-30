import { useState } from 'react';
import logger from '@logger';

import Button from '../components/Button';

export default function Welcome() {
    logger.verbose({message: "[Render]", meta: { component: 'Welcome'}});

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Welcome</h2>
            <p><b>Current state of count:</b> <span>{count}</span></p>
            <Button onClick={ () => setCount(count + 1) }>Increment +2</Button>
        </div>
    );
}