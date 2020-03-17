import React from "react";
import UserCard from "./UserCard";
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
        return <>
            <UserCard {...this.state.cardInfo} />
            <h1>Followers:</h1>
            {this.state.followerInfo.map((entry, idx) =>
                <UserCard {...entry} key={idx} />)}
        </>;
    }
}
export default UserCardContainer;
