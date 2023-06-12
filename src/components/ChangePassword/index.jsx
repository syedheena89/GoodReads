import React from "react";

const ChangePassword = ({modal,setModal}) => {
    const handleSubmit = () => {
        console.log("your password has been changed here")
    }
    
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Change Password</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="newPassword" className="col-form-label">
                  NewPassword
                </label>
                <input type="text" className="form-control" id="newPassword" />
              </div>
              <div className="form-group">
                <label htmlFor="repeatPassword" className="col-form-label">
                  NewPassword
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="repeatPassword"
                />
              </div>
              <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
