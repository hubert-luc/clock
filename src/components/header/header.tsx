import { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => <h1>{title}</h1>;

export default Header;
