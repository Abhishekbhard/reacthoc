import withtimeTaken from "./withTimeTaken";

function ComponentTimeTaken() {
  return <div>ComponentTimeTaken</div>;
}
const TimeTaken = withtimeTaken(ComponentTimeTaken);
export default TimeTaken;
