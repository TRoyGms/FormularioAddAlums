import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    color: #0308a3;
    padding: 0 10px;

    /* Additional styles for checkbox to avoid height issues */
    ${(props) => props.type === 'checkbox' && `
        width: auto;
        height: auto;
        padding: 0;
        margin-right: 10px;
    `}
`;

function Input(props) {
    const handlerOnChange = (event) => {
        if (props.type === "checkbox") {
            props.fnVal(event.target.checked);
        } else {
            props.fnVal(event.target.value);
        }
    };

    return (
        <InputStyled type={props.type} placeholder={props.placeholder} value={props.type !== "checkbox" ? props.val : undefined} 
            checked={props.type === "checkbox" ? props.val : undefined} onChange={handlerOnChange} 
        />
    );
}

export default Input;
