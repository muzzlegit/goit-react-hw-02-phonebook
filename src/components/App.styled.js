import styled from '@emotion/styled';
import theme from 'theme';
export const Section = styled.section({
  margin: '2vh auto',
  height: '96vh',
  width: '820px',
  color: theme.colors.blue,
  background: theme.img.bg,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
});
export const Container = styled.div({
  margin: '0 auto',
  padding: '16px 8px 16px 90px',
  minHeight: '100%',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '6px',
});
export const Content = styled.div({
  width: '90%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  outline: '1px solid blue',
});
export const SideBar = styled.div({
  height: '100%',
  width: '14.1%',
  outline: '1px solid blue',
});
export const Title = styled.h1({
  fontSize: '42px',
  textDecoration: 'underline',
});
