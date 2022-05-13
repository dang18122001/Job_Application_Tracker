import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddApplication = ({ applications, addApplication }) => {
    const [companyName, setName] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("");

    const history = useHistory();

  const applicationAdd = (event) => {
    event.preventDefault();
    
    if (!position || !companyName || !status) {
        return toast.warning("Please makesure you have filled in all information!");
    }

    const data = {
      id: applications.length > 0 ? applications[applications.length - 1].id + 1 : 0,
      companyName,
      position,
      status,
    };

    addApplication(data);
    history.push("/");
  };

  return (
    <div className="container">
      <h1>Add New Application</h1>
        <div>
          <form onSubmit={applicationAdd}>
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(event) => setName(event.target.value)}/>

              <input
                type="text"
                placeholder="Position: Ex: Front-end Dev"
                value={position}
                onChange={(event) => setPosition(event.target.value)}/>

              <input
                type="text"
                placeholder="Status: Ex: applied / first-round / ..."
                value={status}
                onChange={(event) => setStatus(event.target.value)}/>

              <input type="submit" value="Add Application"/>
          </form>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  applications: state,
});

const mapDispatchToProps = (dispatch) => ({
  addApplication: (data) => {
    dispatch({ type: "ADD_APPLICATION", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddApplication);
