import { Container } from '@mui/material';

export default function Layout(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}
