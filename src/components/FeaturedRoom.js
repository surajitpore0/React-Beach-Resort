import React, { Component } from "react";
import { RoomContext } from "../context";
export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        const { FeaturedRoom: rooms } = this.context;
        console.log(rooms);
        return (
            <div>
                <h1>hello from featured rooms </h1>
            </div>
        );
    }
}
