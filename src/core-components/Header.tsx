import Container from "../components/container";
import Longo from "../assets/images/logo.svg?react";
export default function Header() {
  return (
    <>
      <Container as="header" className="mt-3 md:mt-20">
        <Longo className="h-9 md:h-12" />
      </Container>
    </>
  );
}
