import './User.css';

function User({ user, activeTab, activeUserValues }) {
    const { id, photo, name, email } = user;
    return (
        <li
            className={activeTab === id ? 'user active' : 'user'}
            onClick={() => activeUserValues(user)}
        >
            <figure className="user__photo">
                <img src={photo} alt="" />
            </figure>
            <div className="user__info desktop-visible">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </li>
    );
}

export default User;
