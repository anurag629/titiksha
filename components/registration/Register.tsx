"use client";
import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [year, setYear] = useState('');
    const [phone, setPhone] = useState('');
    const [branch, setBranch] = useState('');
    const [event, setEvent] = useState('');
    const [accomodation, setAccomodation] = useState('');
    const [payment, setPayment] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                college,
                year,
                phone,
                branch,
                event,
                accomodation,
                payment,
                transactionId,
            }),
        });

        const data = await res.json();

        if (data.error) {
            setError(data.error);
            setSuccess('');
        } else {
            setError('');
            setSuccess(data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl mb-5">
                Register
            </h1>
            <div className="w-full max-w-md">
                <form
                    className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>  
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="college"
                        >
                            College
                        </label>
                        <input
                            id="college"
                            type="text"
                            placeholder="College"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="year"
                        >
                            Year
                        </label>
                        <input
                            id="year"
                            type="text"
                            placeholder="Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="branch"
                        >
                            Branch
                        </label>
                        <input
                            id="branch"
                            type="text"
                            placeholder="Branch"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="event"
                        >
                            Event
                        </label>
                        <input
                            id="event"
                            type="text"
                            placeholder="Event"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="accomodation"
                            type="checkbox"
                            value={accomodation}
                            onChange={(e) => setAccomodation(e.target.value)}
                            className="form-checkbox h-4 w-4 text-gray-700 dark:text-gray-200"
                        />
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2 ml-2"
                            htmlFor="accomodation"
                        >
                            Accomodation
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="payment"
                            type="checkbox"
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                            className="form-checkbox h-4 w-4 text-gray-700 dark:text-gray-200"
                        />
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2 ml-2"
                            htmlFor="payment"
                        >
                            Payment
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
                            htmlFor="transactionId"
                        >
                            Transaction Id
                        </label>
                        <input
                            id="transactionId"
                            type="text"
                            placeholder="Transaction Id"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </div>
        </div>
    );
}

export default Register;
