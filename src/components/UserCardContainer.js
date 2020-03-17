import React from "react";
import UserCard from "./UserCard";
import {CardDeck}from "reactstrap";
class UserCardContainer extends React.Component {
    state = {
        cardInfo: "",
        followerInfo: [],
    };
    componentDidMount = () => {
        fetch("https://api.github.com/users/ddhorstman")
            .then(res => res.json())
            .then(res => this.setState({ cardInfo: res }));
        fetch("https://api.github.com/users/ddhorstman/followers")
            .then(res => res.json())
            .then(res => res.map(entry => fetch(entry.url)
                .then(res => res.json())
                //.then(r => { console.log(r); return r; })
                .then(res => this.setState({ followerInfo: [...this.state.followerInfo, res] }))
            ));
    };
    render() {
        return <CardDeck>
            <UserCard {...this.state.cardInfo} />
            {this.state.followerInfo.map((entry, idx) =>
                <UserCard {...entry} key={idx} />)}
        </CardDeck>;
    }
}
export default UserCardContainer;
