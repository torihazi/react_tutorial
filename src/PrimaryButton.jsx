export const PrimaryButton = (props) => {
  const { count, onClick } = props;
  console.log(props);
  return <button onClick={onClick}>Click {count} times</button>;
};
