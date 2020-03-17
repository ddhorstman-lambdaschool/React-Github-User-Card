import React from "react";
export default function UserCard(props) {
    return props.login
        ? (<div>
            <h2>{props.name}</h2>
            <img alt={props.login+" image"} src={props.avatar_url} /><br/>
            <a href={props.html_url}>{props.login}</a>
            {props.location && <p>Location: {props.location}</p>}
        </div>)
        : <div />;
}