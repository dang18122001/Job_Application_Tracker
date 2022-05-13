import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
    applications: state,
});
  
const mapDispatchToProps = (dispatch) => ({
    deleteApplication: (id) => {
        dispatch({ type: "DELETE_APPLICATION", payload: id });
    },
});

const MainPage = ({ applications, deleteApplication }) => {
  return (
    <div className="container">
        <div>
            <table id="applications">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {applications.length > 0 ? (
                    applications.map((application, id) => (
                        <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{application.companyName}</td>
                            <td>{application.position}</td>
                            <td>{application.status}</td>
                            <td>
                                <Link class="button" to={`/edit/${application.id}`}>
                                    Edit
                                </Link>
                                <button class="button" type="button"
                                onClick={() => deleteApplication(application.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <th>You are not applying to any job yet!</th>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>

        <Link className="button" to="/add">
            Add New Application
        </Link>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
