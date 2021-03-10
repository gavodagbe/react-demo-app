import { React, useEffect, useState } from "react";
import axios from "./../../../axios";
import Spinner from "./../Spinner/Spinner";

const UserDetail = (props) => {
  const [loadedUser, setLoadedUser] = useState(null);

  useEffect(() => {
    if (
      !loadedUser ||
      (loadedUser && loadedUser.id !== +props.match.params.id)
    ) {
      axios.get("/users/" + props.match.params.id).then((response) => {
        // console.log(response);
        response.data.age = Date.now();
        console.log(response.data);
        setLoadedUser(response.data);
      });
    }
  }, []);

  const noLoaded =
    !loadedUser || (loadedUser && loadedUser.id !== +props.match.params.id);
  return (
    <div>
      {noLoaded ? (
        <Spinner />
      ) : (
        <div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={loadedUser.name}
                readOnly
                name="username"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={loadedUser.email}
                name="email"
                readOnly
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="age"
                readOnly
                value={loadedUser.age}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <span className="col-4"></span>
            <button
              className="btn btn-success col-4"
              onClick={() => props.history.push("/users-hooks")}
            >
              Retour
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserDetail;
