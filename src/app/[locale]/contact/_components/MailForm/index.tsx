'use client'
import React, {ChangeEvent, useState} from "react";
import Toast from "@/app/_components/Toast";


export interface MailFormProps {
    labels: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        description: string;
        submit: string;
        sending: string;
    }
}

export default function MailForm(props: MailFormProps) {
    const [successToast, setSuccessToast] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        description: "",
    });

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        setLoading(true)
        e.preventDefault();
        const response = await fetch('https://maz35av5ic.execute-api.us-east-2.amazonaws.com/PRODUCTION/email', {
            method: 'POST',
            body: JSON.stringify({
                destination: 'bruno@stralom.com',
                subject: 'Contato pelo site',
                message: ` {
                    <h1>Contato pelo site</h1>
                    <p>Nome: ${formData.firstName} ${formData.lastName}</p>
                    <p>Telefone: ${formData.phone}</p>
                    <p>Email: ${formData.email}</p>
                    <p>Descrição: ${formData.description}</p>
                `
            }),
        })

        // Handle response if necessary
        const data = await response.json()
        if (data.MessageId) {
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                description: "",
            })
            setSuccessToast(true);
        }
        setLoading(false)
        console.log(data);
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const fieldName = e.target.getAttribute('id') as string;
        const fieldValue = e.target.value;
        console.log(fieldName, fieldValue)
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    return (
        <form onSubmit={onSubmit} className={'flex flex-1 flex-col p-0 md:p-10'}>
            <Toast title={'Mensagem enviada com sucesso!'} type={'success'} visible={successToast}/>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="firstName"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labels.firstName}</label>
                    <input type="text" id="firstName" name={'firstName'} value={formData.firstName}
                           onChange={handleInput}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <div>
                    <label htmlFor="lastName"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labels.lastName}</label>
                    <input type="text" id="lastName" onChange={handleInput} value={formData.lastName}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="phone"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labels.phone}</label>
                    <input type="tel" id="phone" onChange={handleInput} value={formData.phone}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labels.email}</label>
                    <input type="email" id="email" onChange={handleInput} value={formData.email}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
            </div>
            <div>
                <label htmlFor="description"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.labels.description}</label>
                <textarea id="description" onChange={handleInput} value={formData.description}
                          className="bg-gray-50 h-52 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required/>
            </div>
            <button type="submit"
                    disabled={loading}
                    className="flex justify-center align-middle text-white bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8">
                {loading &&
                    <div role="loading">
                        <svg aria-hidden="true"
                             className="w-6 h-6 mr-5 text-gray-200 animate-spin dark:shadow-blue-400 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                <span>
                        {
                            loading ? props.labels.sending + '...' : props.labels.submit
                        }
                    </span>
            </button>
        </form>
    )
}
