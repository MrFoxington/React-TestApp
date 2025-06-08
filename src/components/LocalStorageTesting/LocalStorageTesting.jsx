import React from "react";





export default function LocalStorageTesting() {
    const [name, setName] = React.useState("");
    function handleInputChange(event) {
        setName(event.target.value);
    }
    return (
        <>
            <h2>LocalStorage Testing</h2>
            <h3>Colour Picker</h3>
            <h3>Font Picker</h3>
            <h3>Save Selection Button</h3>
            <h3>Load Saved Selection Button</h3>

        </>


    )
}