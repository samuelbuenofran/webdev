// const Menu = () => {}
function Menu(props) {
  const { title } = props;
  return (
    <nav>
      <span>{title}</span>
      <br />
      <a href="#">Link 1</a>
      <br />
      <a href="#">Link 1</a>
    </nav>
  );
}

export default Menu;
