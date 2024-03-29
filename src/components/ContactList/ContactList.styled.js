import styled from '@emotion/styled';
import theme from 'theme';

export const List = styled.ul({
  height: '710px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  gap: '16px',
  overflowY: 'auto',
});
export const Item = styled.li(
  {
    fontSize: '28px',
    display: 'flex',
    gap: '20px',
  },
  props => ({
    color: props.color,
  })
);
export const Button = styled.button({
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.colors.red,
  '&:hover': {
    cursor: 'pointer',
  },
});
