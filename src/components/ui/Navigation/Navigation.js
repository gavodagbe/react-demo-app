import { Route, NavLink, Switch } from "react-router-dom";
import App from "./../../../App";
import UserAdmin from "./../../container/UserAdmin/UserAdmin";
import UserAdminHooks from "./../../container/UserAdminHooks/UserAdminHooks";
import NewPost from "./../Blog/NewPost/NewPost";
import Posts from "./../Blog/Posts/Posts";
import FullPost from "./../../ui/Blog/FullPost/FullPost";
import Counter from "./../Counter/Counter";
import UserDetail from "./../UserDetail/UserDetail";

const Navigation = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Training React
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="/"
                  exact
                  activeClassName="my-active"
                >
                  Acceuil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/users"
                  activeClassName="my-active"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/users-hooks"
                  activeClassName="my-active"
                >
                  Hooks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/posts"
                  activeClassName="my-active"
                >
                  Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/new-post"
                  activeClassName="my-active"
                >
                  Nouveau post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/redux"
                  activeClassName="my-active"
                >
                  Redux
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route component={App} path="/" exact />
        <Route component={UserAdminHooks} path="/users-hooks" exact />
        <Route component={UserDetail} path="/users-hooks/:id" />
        <Route component={UserAdmin} path="/users" />

        <Route path="/new-post" component={NewPost} />
        <Route path="/posts" component={Posts} exact />
        <Route path="/redux" component={Counter} />
        {<Route path="/posts/:id" component={FullPost} />}
        {/*<Redirect from="/" to="/posts" />*/}
      </Switch>
    </div>
  );
};

export default Navigation;
