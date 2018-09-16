import React from "react";
import Thumbnail from "../Thumbnail";
import {Col} from "../Grid";

export const Game = props => {
    return (
        <div>
            <Col size="xs-4 sm-3">
                <div id={props.id} clicked={props.clicked} onClick={()=> {props.handleClick(props)}}>
                    <Thumbnail src={props.image} />
                </div>
            </Col>
        </div>
    );
}