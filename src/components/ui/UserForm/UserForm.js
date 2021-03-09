const UserForm = (props) => {
  console.log(props);
  return (
    <div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={props.name}
            name="username"
            onChange={props.onChangeFormHandler}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={props.email}
            name="email"
            onChange={props.onChangeFormHandler}
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
            value={props.age}
            onChange={props.onChangeFormHandler}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <button
          className="btn btn-success"
          onClick={props.onSaveUserFormHandler}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
};
export default UserForm;
