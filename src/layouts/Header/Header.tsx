interface Props {
  mobile: boolean;
}
export default function Header({ mobile }: Props) {
  return <header>{"header: " + mobile}</header>;
}
