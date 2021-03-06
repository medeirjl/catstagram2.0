// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, {useState, useContext} from 'react';
import {PhotosContext} from '../App'

function Likes(props) {
	const { addLikedPhoto, removeLikedPhoto, likedPhotos } = useContext(PhotosContext)
	const { number, id } = props;

	const isInLikedArray = () => {
		return likedPhotos.includes(id)
	}

	const [isLiked, setIsLiked] = useState(isInLikedArray);
	const [numLikes, setNumLikes] = useState(number);


	const updateLike = () => {
		// if already liked, we are unliking, so decrease
		if (isLiked) {
			setNumLikes(numLikes - 1)
			removeLikedPhoto(id)
		} else {
			setNumLikes(numLikes + 1)
			addLikedPhoto(id)
		}

		setIsLiked(!isLiked)
	}

    return (
        <div className="Likes">
        	<span>{numLikes} Likes</span>
        	<button className="LikesButton" type="button" onClick={updateLike}>{ isLiked ? '<3' : '</3' }</button>
        </div>
    );
}

export default Likes;