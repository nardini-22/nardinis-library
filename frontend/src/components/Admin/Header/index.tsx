import Logo from "../../../assets/logo.svg";
import { HeaderContainer, Img } from "./styles";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Img alt="logo" src={Logo} />
        <h1>Nardini's Library</h1>
      </HeaderContainer>
    </>
  );
}
