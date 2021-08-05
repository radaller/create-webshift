import logger from '@logger';

export default () => {
    logger.verbose({message: "[Render]", meta: { component: 'Welcome'}});

    return (
        <div>
            <h2>Welcome</h2>
        </div>
    );
}