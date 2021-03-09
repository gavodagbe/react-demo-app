import React, { Component } from "react";
import UserForm from "./../../ui/UserForm/UserForm";
class UserAdmin extends Component {
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
    isShowId: false,
    selectedUser: null,
    searchTexte: "",
  };

  searchUserHandler = (e) => {
    console.log("User à rechercher ", e.target.value);
  };

  deleteUserHandler = (userId) => {
    //const nUsers = this.state.users.filter((u) => u.id !== userId);
    this.setState({ users: this.state.users.filter((u) => u.id !== userId) });
  };

  selectUserHandler = (userObj) => {
    this.setState({ selectedUser: userObj });
  };

  onChangeFormHandler = (e) => {
    let lSelectedUser = this.state.selectedUser;
    switch (e.target.name) {
      case "username":
        lSelectedUser.name = e.target.value;
        break;
      case "email":
        lSelectedUser.email = e.target.value;
        break;

      case "age":
        lSelectedUser.age = e.target.value;
        break;

      default:
        break;
    }
    this.setState({ selectedUser: lSelectedUser });
  };

  saveUserHandler = () => {
    let lUsers = this.state.users;
    lUsers.forEach((item) => {
      if (item.id === this.state.selectedUser.id)
        item = { ...this.state.selectedUser };
    });

    this.setState({ users: lUsers });
  };

  render() {
    let users = null;

    if (this.state.users.length > 0)
      // Récupération de notre list de users
      users = this.state.users.map((u) => (
        <tr key={u.id}>
          <th scope="row">{this.state.isShowId === true ? u.id : ""}</th>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.age}</td>
          <td>
            <div className="row ">
              <button
                className="btn btn-primary col-6"
                onClick={() => this.selectUserHandler(u)}
              >
                edit
              </button>
              <button
                className="btn btn-danger col-6"
                onClick={() => this.deleteUserHandler(u.id)}
              >
                delete
              </button>
            </div>
          </td>
        </tr>
      ));

    return (
      <>
        {users ? (
          <div className="container">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                {/* Bloc filter */}
                <div className="row">
                  <label className="col-2">Filter by : </label>
                  <input
                    className="col-3"
                    type="text"
                    name="search"
                    value={this.state.searchTexte}
                    onChange={this.searchUserHandler}
                  />
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.setState({ isShowId: !this.state.isShowId });
                          }}
                        >
                          {this.state.isShowId === true
                            ? "Cacher "
                            : "Afficher"}
                        </button>
                      </th>
                      <th scope="col">Name </th>
                      <th scope="col">Email</th>
                      <th scope="col">Age</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>{users}</tbody>
                </table>
              </div>
              {this.state.selectedUser ? (
                <div className="card-footer">
                  <UserForm
                    name={this.state.selectedUser.name}
                    age={this.state.selectedUser.age}
                    email={this.state.selectedUser.email}
                    onChangeFormHandler={this.onChangeFormHandler}
                    onSaveUserFormHandler={this.saveUserHandler}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>No user </h1>
        )}
      </>
    );
  }
}
export default UserAdmin;

/*
// Passage du props
<UserForm {...this.props} />


{...this.state.selectedUser, onChangeHandler : this.onChangeFormHandler()}
*/
