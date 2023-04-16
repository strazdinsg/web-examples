/**
 * Represents profile page
 * @return {JSX.Element}
 * @constructor
 */
import { useEffect, useState } from "react";
import "./ProfilePage.css";
import {asyncApiRequest} from "../tools/requests";

export function ProfilePage(props) {
  const [bio, setBio] = useState("Loading data...");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [editsDisabled, setEditsDisabled] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Note: in real projects we would not re-load profile data every time we go away from the profile page!
  // We would store it in a Redux store
  useEffect(loadData);

  let errorMessage = null;
  if (!props.username) {
    errorMessage = (
      <p className="error">Need to log in to access profile page!</p>
    );
  } else if (error) {
    errorMessage = <p className="error">{error}</p>;
  }
  let successMessage = null;
  if (success) {
    successMessage = <p className="success">{success}</p>;
  }

  return (
    <form className="bio">
      <p>Here you can see and modify your profile:</p>
      <label htmlFor="bio" className="sr-only"></label>
      <textarea
        name="bio"
        id="bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        disabled={editsDisabled}
      />
      {errorMessage}
      {successMessage}
      <input
        type="submit"
        value="Save"
        disabled={editsDisabled}
        onClick={submitForm}
      />
    </form>
  );

  function loadData() {
    if (!dataLoaded && props.username) {
      setDataLoaded(true);
      setEditsDisabled(true);
      asyncApiRequest("GET", "/users/" + props.username)
        .then(showProfileData);
    }
  }

  /**
   * This function is called when profile data is loaded from the backend
   * @param profileData The profile data received from the backend, contains bio field
   */
  function showProfileData(profileData) {
    setEditsDisabled(false);
    setError("");
    setSuccess("");
    if (profileData.bio) {
      setBio(profileData.bio);
    } else {
      setBio("");
    }
  }

  /**
   * Submit profile form to backend
   */
  function submitForm(event) {
    event.preventDefault();
    const profileData = {
      bio: bio,
    };
    setEditsDisabled(true);
    asyncApiRequest("PUT", "/users/" + props.username, profileData, true)
      .then(profileSaveSuccess)
      .catch(error => profileSaveError(error.message));
  }

  /**
   * This function is called when profile was successfully saved
   */
  function profileSaveSuccess() {
    setEditsDisabled(false);
    setSuccess("Profile saved");
    setError("");
  }

  /**
   * This function is called when profile saving failed
   * @param errorMessage Error message received from the backend
   */
  function profileSaveError(errorMessage) {
    setEditsDisabled(false);
    setSuccess("");
    setError(errorMessage);
  }
}
