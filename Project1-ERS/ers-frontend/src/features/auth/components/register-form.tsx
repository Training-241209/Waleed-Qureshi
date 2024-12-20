import { useState } from "react";
import { Input } from "../../../components/shared/input";
import { Button } from "../../../components/shared/button";

export function RegisterForm()
{
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div>
        <FormHeader/>
        <FormContent
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            />
        </div>
    )
}

function FormHeader()
{
    return (
        <div>
            <h1>REGISTER</h1>
            <p>Please Enter Your Information</p>
        </div>
    )
}

interface FormContentProps
{
    firstName: string;
    setFirstName: (firstName: string) => void;
    lastName: string;
    setLastName: (lastName: string) => void;
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

function FormContent({firstName, setFirstName
    , lastName, setLastName
    , username, setUsername
    , password, setPassword}: FormContentProps)
{
    return (
        <div className="flex flex-col w-64">
            <Input value={firstName} setValue={setFirstName} placeholder="First Name"/>
            <Input value={lastName} setValue={setLastName} placeholder="Last Name"/>
            <Input value={username} setValue={setUsername} placeholder="Username"/>
            <Input value={password} setValue={setPassword} placeholder="Password" type="password"/>

            <Button>ENTER</Button>
        </div>
    )
}