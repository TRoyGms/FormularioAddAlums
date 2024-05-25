import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

function Field(props) {
    return (
        <div style={{ width: "80%" }}>
            <div>
                <Label text={props.text} />
            </div>
            <div>
                <Input 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    val={props.val} 
                    fnVal={props.fnVal} 
                />
            </div>
        </div>
    );
}

export default Field;
