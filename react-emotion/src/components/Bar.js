import styled from '@emotion/styled';
import {
    space,
    color,
} from 'styled-system';

const Bar = styled('div')`
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    ${space}
    ${color}
`;

Bar.defaultProps = {
    padding: 'small',
    backgroundColor: 'primary',
    color: 'white',
};

export default Bar;