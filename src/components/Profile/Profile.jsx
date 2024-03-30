import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats}) {
    return (  <div className={css.container}>
                <div className={css.profileContainer}>
                    <img className={css.photo}
                    src={image}
                    alt="User avatar"
                    />
                    <p className={css.userName}>{name}</p>
                    <p className={css.userTag}>{tag}</p>
                    <p className={css.userLocation}>{location}</p>
                </div>

                <ul className={css.list}>
                    <li className={css.item}>
                        <span className={css.text}>Followers</span>
                        <span className={css.value}>{stats.followers}</span>
                    </li>
                    <li className={css.item}>
                        <span className={css.text}>Views</span>
                        <span className={css.value}>{stats.views}</span>
                    </li>
                    <li className={css.item}>
                        <span className={css.text}>Likes</span>
                        <span className={css.value}>{stats.likes}</span>
                    </li>
                </ul>
    </div>
    )
      
    
}