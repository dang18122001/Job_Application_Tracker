import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditApplication = ({ applications, updateApplication }) => {

    const [companyName, setName] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("");

    const history = useHistory();

    const { id } = useParams();
    const thisApplication = applications.find(
        (application) => application.id === parseInt(id)
    );

    useEffect(() => {
        setName(thisApplication.companyName);
        setPosition(thisApplication.position);
        setStatus(thisApplication.status);
    }, [thisApplication]);

  const applicationEdit = (event) => {
    event.preventDefault();

    if (!companyName || !position || !status) {
      return toast.warning("Please makesure you have filled in all information!");
    }

    const data = {
      id: thisApplication.id,
      companyName,
      position,
      status,
    };

    updateApplication(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div>
        <button onClick={() => history.push("/")}>
          Back to main page
        </button>

        <div>
          {thisApplication ? (
            <form onSubmit={applicationEdit}>
                <input
                  value={companyName}
                  placeholder={"Amazon"}
                  onChange={(event) => setName(event.target.value)}/>

                <input
                  value={position}
                  placeholder={"Front-end Developer"}
                  onChange={(event) => setPosition(event.target.value)}/>

                <input
                  value={status}
                  placeholder={"Applied"}
                  onChange={(event) => setStatus(event.target.value)}/>

                <button type="submit">
                  Update Application
                </button>
                <button type="button"
                  onClick={() => history.push("/")}>
                  Cancel Changes
                </button>
            </form>
          ) : (
            <h2>There is no application.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    applications: state,
});
    
const mapDispatchToProps = (dispatch) => ({
    updateApplication: (data) => {
        dispatch({ type: "UPDATE_APPLICATION", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditApplication);
