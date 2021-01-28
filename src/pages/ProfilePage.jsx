import "../components/ProfileStyles.css"

import React, {useContext} from 'react';
import ProfileHeader from '../components/ProfileHeader.jsx';
import {PhotosContext} from '../App'

function ProfilePage() {
	const { likedPhotos } = useContext(PhotosContext)
    return (
        <div className="ProfilePage">
        	<ProfileHeader />
        	<div className="ProfileContent">
        		<div className="ProfileContentLeft">
        			<h2>Jorge's Intro</h2>
        			<p>Lives in <strong>Cincinnati, OH</strong></p>
        			<p><strong>Favorite hobbies:</strong> wet food, attacking momther while she's working, sleeping on my heating pad, splashing water on the floor</p>
        		</div>
        		<div className="ProfileContentRight">
        			<h2>Jorge's Liked Photos</h2>
        			{ (likedPhotos.length === 0) && <p>No photos yet</p>}

        			{ likedPhotos.map((photo, i) => <img src={photo.url} key={photo.id} alt="" /> ) }
        		</div>
        	</div>
        </div>
    );
}

export default ProfilePage;