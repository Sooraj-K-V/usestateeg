import { useState } from "react";
import "./profileCard.css";
export default function ProfileCard(props) {
  return (
    <div class="profile-card" key={props.key}>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
    </div>
  );
}
