import "./App.css";
import Person from "./components/ui/Person/Person";
import User from "./components/ui/User/User";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [
      {
        id: "idies",
        name: "Godwin",
        age: "15",
        email: "toto@t.fr",
        isHide: false,
      },
      {
        id: "idiess",
        name: "Vivien",
        age: "15",
        email: "toto@t.fr",
        isHide: false,
      },
      {
        id: "12ed",
        name: "Pierre",
        age: "15",
        email: "toto@t.fr",
        isHide: false,
      },
      {
        id: "52dh",
        name: "Arnaud",
        age: "15",
        email: "toto@t.fr",
        isHide: false,
      },
      {
        id: "85kdjjkd",
        name: "Neymar",
        age: "15",
        email: "toto@t.fr",
        isHide: false,
      },
      {
        id: "45sdqfdsq",
        name: "Messi",
        age: "15",
        email: "toto@t.fr",
        isHide: false,
      },
    ],
    others: "data",
    isHide: false,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response));

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response.data));
  }

  changeeOrderHandler = () => {
    const [u1, u2, u3, u4, u5, u6] = this.state.users;
    this.setState({ users: [u6, u1, u2, u3, u4, u5] }); // Obligatoire modifiern une propriété dans le state.
  };

  onChangeHandler = (e) => {
    console.log(
      e
    ); /*
    let saveUsers = [...this.state.users];
    const selectedUser = saveUsers.filter(
      (u) => u.name.toLowerCase() === e.target.defaultValue.toLowerCase()
    )[0];
    selectedUser.name = e.target.value;

    this.setState({ users: [...saveUsers] });*/

    this.setState({
      users: this.state.users.map((item) => {
        if (item.name.toLowerCase() === e.target.defaultValue.toLowerCase())
          item.name = e.target.value;

        return item;
      }),
    });
  };

  hideInput = (userId) => {
    let nUsers = [...this.state.users];
    nUsers.forEach((element) => {
      if (element.id === userId) element.isHide = !element.isHide;
    });

    this.setState({ users: nUsers });
  };

  render() {
    let users = [];

    if (this.state.users.length > 0)
      users = this.state.users.map((u) => (
        <Person
          name={u.name}
          age={u.age}
          email={u.email}
          key={u.id}
          isHide={u.isHide}
          hideEvent={() => this.hideInput(u.id)} // {this.hideInput.bind(u.id)}
          onChangeHandlerEvent={this.onChangeHandler}
        />
      ));
    let wrapper = "";
    if (users.length > 0) wrapper = users;
    else wrapper = <p>No user </p>;
    return (
      <>
        {wrapper}
        <button
          className="btn-perso"
          style={{ backgroundColor: "yellow" }}
          onClick={this.changeeOrderHandler}
        >
          Change order{" "}
        </button>

        <p>Couleur de font du "p" du parent </p>
      </>
    );
  }
}

export default App;

/*const numbers = [1, 2, 3, 4];
  const pers = {
    name: "Pierre",
    age: 20,
  };

  const { name } = pers;

  console.log("Nom de l'utilisateur pers est => ", name.toUpperCase());

  const [, num2, , num4] = numbers;
  const [num1, , num3] = numbers;
  const nPers = {
    ...pers,
    email: "t@t.fr",
  };
  let copyNpers = { ...nPers, address: "1 rue de paris 98000" };

  // Turple
  console.log("Valeur num2==> ", num2, "Valeur num4 ==>", num4);
  console.log("Valeur num1==> ", num1, "Valeur num3 ==>", num3);

  // Spread operators
  const nNumbers = [...numbers, 56, 125];
  console.log("nNumbers => ", nNumbers);
  console.log("nPers ==>", nPers);
  console.log("pers ==>", pers);

  copyNpers.name = "Godwin"; // Je modifie le nom de copyNpers
  console.log("//////////////////////////////////////////////");
  console.log("nPers ==>", nPers);
  console.log("copyNpers ==>", copyNpers);
  console.log("//////////////////////////////////////////////");

  const numbersFactor5 = numbers.map((item) => item * 5);

  console.log("NumbersFactor5 ==>", numbersFactor5);
  console.log("Numbers ==>", numbers);
  */
