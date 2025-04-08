import withError from "./withError";

function C() {
  console.log(person);
  const person = {
    name: null,
    age: 0,
  };
  return <div>{person}</div>;
  //   return <div>{person.name.firstName.fullName}</div>;
}

export default withError(C, (errorMsg) => {
  return (
    <div style={{ margin: "10px", padding: "10px", backgroundColor: "green" }}>
      {errorMsg}
    </div>
  );
});
