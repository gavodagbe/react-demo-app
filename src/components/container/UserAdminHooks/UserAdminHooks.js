import { React, useState, useEffect } from "react";
import UserForm from "../../ui/UserForm/UserForm";
import axios from "axios";
import { Link } from "react-router-dom";
const UserAdminHooks = (props) => {
  const [users, setUsers] = useState([]);
  const [isShowId, setIsShowId] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTexte, setSearchTexte] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response.data);
          //users = response.data;
          setUsers(response.data);
        });
    }
  }, []);

  const searchUserHandler = (e) => {
    console.log("User à rechercher ", e.target.value);
  };

  const deleteUserHandler = (userId) => {
    //const nUsers = this.state.users.filter((u) => u.id !== userId);
    setUsers(users.filter((u) => u.id !== userId));
  };

  const selectUserHandler = (userObj) => {
    setSelectedUser(userObj);
  };

  const onChangeFormHandler = (e) => {
    let lSelectedUser = selectedUser;
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
    setSelectedUser(lSelectedUser);
  };

  const saveUserHandler = () => {
    let lUsers = [...users];
    lUsers.forEach((item) => {
      if (item.id === selectedUser.id) item = { ...selectedUser };
    });
    setUsers(lUsers);
  };

  let usersScreen = null;

  if (users && users.length > 0) {
    console.log(users);
    usersScreen = users.map((u) => (
      <tr key={u.id}>
        <th scope="row">{isShowId === true ? u.id : ""}</th>
        <td>
          <Link to={"/users-hooks/" + u.id}>{u.name}</Link>
        </td>
        <td>{u.email}</td>
        <td>{u.age}</td>
        <td>
          <div className="row ">
            <button
              className="btn btn-primary col-6"
              onClick={() => selectUserHandler(u)}
            >
              edit
            </button>
            <button
              className="btn btn-danger col-6"
              onClick={() => deleteUserHandler(u.id)}
            >
              delete
            </button>
          </div>
        </td>
      </tr>
    ));
  }
  // Récupération de notre list de users
  return (
    <>
      {usersScreen ? (
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
                  value={searchTexte}
                  onChange={searchUserHandler}
                />
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setIsShowId(!isShowId);
                        }}
                      >
                        {isShowId === true ? "Cacher " : "Afficher"}
                      </button>
                    </th>
                    <th scope="col">Name </th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{usersScreen}</tbody>
              </table>
            </div>
            {selectedUser ? (
              <div className="card-footer">
                <UserForm
                  name={selectedUser.name}
                  age={selectedUser.age}
                  email={selectedUser.email}
                  onChangeFormHandler={onChangeFormHandler}
                  onSaveUserFormHandler={saveUserHandler}
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
};
export default UserAdminHooks;

/*
// Passage du props
<UserForm {...this.props} />


{...this.state.selectedUser, onChangeHandler : this.onChangeFormHandler()}
*/
