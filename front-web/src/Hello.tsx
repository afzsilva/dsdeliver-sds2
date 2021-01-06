import { useEffect } from "react";

type Props = {
    message: String;
}

function Hello({ message }: Props) {

    useEffect(() => {
        console.log("Chama API");
    }, []);


    return (
        <h1>Hello {message}</h1>
    )
}

export default Hello;

