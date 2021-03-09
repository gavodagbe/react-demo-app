import "./Person.css";

const Person = (props) => {
  //const { name, age, email } = props;
  const fullTexte = `My name is ${props.name}, i'm ${props.age} years old and my email is ${props.email}`;
  return (
    <div>
      <p
        className="p-perso"
        style={{ color: "orange" }}
        onClick={props.hideEvent}
      >
        {fullTexte}
      </p>
      {props.isHide === false && (
        <input
          type="text"
          name="username"
          className="form-control"
          value={props.name}
          onChange={props.onChangeHandlerEvent}
        />
      )}
    </div>
  );
};

export default Person;
