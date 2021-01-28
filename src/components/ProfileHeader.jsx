import React from 'react';

function ProfileHeader() {
    return (
        <div className="ProfileHeader">
            <img className="ProfileBackground" src="https://scontent.fluk1-1.fna.fbcdn.net/v/t1.15752-9/136676433_1323144184722744_1089949965056793103_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=z9ONjq5yhsYAX_dagIc&_nc_ht=scontent.fluk1-1.fna&oh=937cfc9593a064dfd6c24ce1a434c599&oe=6036A870" alt="" />
            <img className="ProfilePicture" src="https://scontent.fluk1-1.fna.fbcdn.net/v/t1.0-9/70225686_10157620935964224_6421086062977744896_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=GGwP9rEYpWoAX-jqatp&_nc_ht=scontent.fluk1-1.fna&oh=9407a94f2f611875f001666aece384bd&oe=6037E539" alt="" />
        	<h2 className="ProfileName">Jorge Medeiros</h2>
        </div>
    );
}

export default ProfileHeader;