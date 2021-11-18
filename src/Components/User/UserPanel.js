import { useState } from 'react';
import UserForm from './UserForm';
import User from './User';
import './UserPanel.css';
import { USERS } from '../../Data/user_data';

function UserPanel() {
    const [users, setUsers] = useState(USERS);
    const [activeTab, setActiveTab] = useState('');
    const [cancelIsActive, setCancelIsActive] = useState(false);
    const [saveIsEnabled, setSaveIsEnabled] = useState(false);
    const [editFormData, setEditFormData] = useState({
        id: '',
        photo: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
    });

    const [currentUserData, setCurrentUserData] = useState({
        id: '',
        photo: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleActiveUserValues = (user) => {
        const formValues = {
            id: user?.id,
            photo: user?.photo,
            name: user?.name,
            company: user?.company,
            email: user?.email,
            phone: user?.phone,
            address: user?.address,
        };

        setCurrentUserData(formValues);
        setEditFormData(formValues);
        setActiveTab(user?.id);
    };

    const handleEditFormChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setCancelIsActive(true);
        setSaveIsEnabled(true);
        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        const editedUser = {
            id: editFormData.id,
            photo: editFormData.photo,
            name: editFormData.name,
            company: editFormData.company,
            email: editFormData.email,
            phone: editFormData.phone,
            address: editFormData.address,
        };

        const newUsers = [...users];
        const index = users.findIndex((user) => user.id === editFormData.id);
        newUsers[index] = editedUser;

        setCancelIsActive(false);
        setSaveIsEnabled(false);
        setUsers(newUsers);
        setCurrentUserData(editedUser);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

        const newUsers = [...users];
        const index = users.findIndex((user) => user.id === currentUserData.id);
        newUsers[index] = currentUserData;

        setUsers(newUsers);
        setEditFormData(currentUserData);
        setCancelIsActive(false);
        setSaveIsEnabled(false);
    };
    return (
        <div className="userpanel">
            <div className="usernav">
                <ul className="userlist">
                    {users.map((user) => (
                        <User
                            key={user.id}
                            user={user}
                            activeTab={activeTab}
                            activeUserValues={handleActiveUserValues}
                        />
                    ))}
                </ul>
            </div>
            {activeTab !== '' && (
                <UserForm
                    editData={editFormData}
                    editFormChange={handleEditFormChange}
                    editFormSubmit={handleEditFormSubmit}
                    cancelChanges={handleCancelClick}
                    cancelBtn={cancelIsActive}
                    saveBtn={saveIsEnabled}
                />
            )}
        </div>
    );
}

export default UserPanel;
