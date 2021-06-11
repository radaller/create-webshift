import styled from '@emotion/styled';
import {
    space,
    fontSize,
} from 'styled-system';

const Header = styled('h3')`
    border: 0;
    ${space}
    ${fontSize}
`;
Header.defaultProps = {
    fontSize: 'h3',
    margin: 'small',
};

export default Header;