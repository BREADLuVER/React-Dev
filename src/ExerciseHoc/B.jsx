import withError from "./withError";

function B() {
  const person = {
    name: "bard",
    age: 0,
  };
  return <div>{person}</div>;
  //   return <div>{person.name.firstName.fullName}</div>;
}

export default withError(B, (errorMsg) => {
  return (<div style={{ backgroundColor: "red" }}>{errorMsg}</div>
)});
