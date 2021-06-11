import styled from '@emotion/styled';
import {
    space,
    color,
    fontSize,
    layout,
} from 'styled-system';

const Button = styled('button')`
    outline: none;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    ${space}
    ${color}
    ${fontSize}
    ${layout}
    &:hover {
        color: white;
    }
`;

Button.defaultProps = {
    fontSize: 'button',
    color: 'white',
    padding: 'small',
    margin: 'small',
    backgroundColor: 'primary',
    minWidth: '90px',
};

export default Button;