import css from "./FriendListItem.module.css";
// import clsx from 'clsx';

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={css.isOnline}>{isOnline}</p>
        </div>
    )
}