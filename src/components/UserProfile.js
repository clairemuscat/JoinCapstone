import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import swal from "sweetalert";
import swal from "@sweetalert/with-react";
import UpdateProfile from './UpdateProfile'
import updateUserProfile from '../store/profile'

const UserProfile = () => {
    const profile = useSelector((state) => state.profile);
    const updateUser= useDispatch((dispatch)=>{})
    console.log("lemon", profile.hobbies_interests);

    const updateEvent = () =>{
        swal({  title: "Profile",
        content: <UpdateProfile profile={profile}/>,
        buttons: {
          cancel:true,
          confirm:{
            text:'Update Profile',
          }
        }
        })
        .then(val=>{
            updateUser(val.value)
        })
       
    }

	return (
		<div id="user-profile">
			<div>
				<h1>
					{profile.firstName} {profile.lastName} (she/her/hers)
				</h1>
			</div>
			<div id="user-profile-img">
				<img src={profile.imageUrl} />
			</div>
			<br />
			<div>
				<p className="paragraph">{profile.about}</p>
			</div>
			<br />
			<div>
				{profile.city}, {profile.state_province}, {profile.country} |{" "}
				{profile.company} | {profile.role}{" "}
			</div>
			<br />
			<br />
			<div className="listed-items">
				<b>Programming Languages:</b>
				<br />
				<br />
				<ul>
					{profile.programming_languages.map((language) => {
						return <li>{language}</li>;
					})}
				</ul>
			</div>
			<br />
			<br />
			<div className="listed-items">
				<b>Hobbies and Interests:</b>
				<br />
				<br />
				<ul>
					{profile.hobbies_interests.map((hobby) => {
						return <li>{hobby}</li>;
					})}
				</ul>
			</div>
            <button type='button' onClick={this.updateEvent}>Edit Profile</button>
		</div>
	);
};

export default UserProfile;
