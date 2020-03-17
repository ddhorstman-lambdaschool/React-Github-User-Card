import React from "react";
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, CardLink, CardText } from "reactstrap";
export default function UserCard(props) {
    return props.login
        ? (<Card>
            <CardHeader><CardTitle tag="h3">{props.name}</CardTitle></CardHeader>
            <CardBody><CardImg alt={props.login + " image"} src={props.avatar_url} /><br />
            {props.location && <p>Location: {props.location}</p>}
            </CardBody>
            <CardFooter><CardText>{"Profile: "}
                <CardLink href={props.html_url}>{props.login}</CardLink>
            </CardText>
                </CardFooter>
        </Card>)
        : <div />;
}