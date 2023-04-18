import Contacts from "./Contacts";
import Email from "./Emails";
const Admin = () => {
  return (
    <div className="admin container-fuild pt-4">
      <h1>Admin Dashboard</h1>
      <div className="row">
        <div className="col-lg-6 contacts">
          <Contacts />
        </div>
        <div className="col-lg-6 emails">
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Admin;
