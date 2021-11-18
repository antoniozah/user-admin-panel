import './UserForm.css';
function UserForm({
    editData,
    editFormChange,
    editFormSubmit,
    cancelBtn,
    saveBtn,
    cancelChanges,
}) {
    return (
        <div className="userform">
            <form>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="inputName"
                        placeholder="Enter Name"
                        value={editData.name}
                        onChange={(e) => editFormChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Enter Email"
                        value={editData.email}
                        onChange={(e) => editFormChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="inputPhone"
                        placeholder="Enter Phone"
                        value={editData.phone}
                        onChange={(e) => editFormChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="inputAddress"
                        placeholder="Enter Address"
                        value={editData.address}
                        onChange={(e) => editFormChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputCompany">Company</label>
                    <input
                        type="text"
                        name="company"
                        id="inputCompany"
                        placeholder="Enter Company"
                        value={editData.company}
                        onChange={(e) => editFormChange(e)}
                    />
                </div>
                <div className="form-group button-group">
                    {cancelBtn && (
                        <button
                            className="btn btn--cancel"
                            onClick={(e) => cancelChanges(e)}
                        >
                            Cancel
                        </button>
                    )}

                    <button
                        type="submit"
                        className={`btn btn--save ${
                            !saveBtn ? 'disabled' : ''
                        }`}
                        onClick={(e) => editFormSubmit(e)}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;
