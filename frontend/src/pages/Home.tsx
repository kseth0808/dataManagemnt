import { useState } from "react";
import axios from "axios";
import { postGreetUser } from "../appRoutes";

const Greeting: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const fetchGreeting = async () => {
        if (!name.trim()) {
            setMessage("Please enter your name.");
            return;
        }
        axios.post(postGreetUser, { name })
            .then((res) => {
                setMessage(res.data.message)
                setName("")
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h1 className="text-2xl font-bold mb-4">Get Your Greeting</h1>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded-md w-full mb-4"
                />
                <button
                    onClick={fetchGreeting}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition"
                >
                    Get Greeting
                </button>
                {message && <p className="mt-4 text-lg text-gray-700">{message}</p>}
            </div>
        </div>
    );
};

export default Greeting;
