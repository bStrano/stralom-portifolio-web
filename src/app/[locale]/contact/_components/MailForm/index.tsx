'use client'
import React, {ChangeEvent, useState} from "react";
import Toast from "@/app/_components/Toast";
import Icon from "@/app/_components/Icon";
import {Icon as Iconify} from "@iconify/react";


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

const inputClass =
    "block w-full rounded-xl px-4 py-3 text-sm text-white placeholder-blue-dark-11 bg-white/[0.03] border border-white/[0.08] transition-[border-color,box-shadow,background-color] duration-200 ease-out focus:outline-none focus:bg-white/[0.05] focus:border-dracula-purple/60 focus:shadow-[0_0_0_3px_rgba(189,147,249,0.18)]";

const labelClass =
    "block mb-1.5 text-[11px] font-medium tracking-[0.18em] uppercase text-blue-dark-11";

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
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const fieldName = e.target.getAttribute('id') as string;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    return (
        <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_0_32px_-12px_rgba(189,147,249,0.25)] overflow-hidden">
            <div className="relative flex items-center px-5 py-3 bg-white/[0.04] border-b border-white/[0.08]">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]"/>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"/>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]"/>
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 text-sm text-blue-dark-11 font-medium select-none">
                    message.tsx
                </span>
                <Iconify icon="lucide:mail" className="ml-auto text-dracula-purple" width={20} height={20}/>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col p-5 md:p-7 gap-5">
                <Toast title={'Mensagem enviada com sucesso!'} type={'success'} visible={successToast}/>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className={labelClass}>{props.labels.firstName}</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInput}
                            className={inputClass}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className={labelClass}>{props.labels.lastName}</label>
                        <input
                            type="text"
                            id="lastName"
                            onChange={handleInput}
                            value={formData.lastName}
                            className={inputClass}
                            required
                        />
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label htmlFor="phone" className={labelClass}>{props.labels.phone}</label>
                        <input
                            type="tel"
                            id="phone"
                            onChange={handleInput}
                            value={formData.phone}
                            className={inputClass}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClass}>{props.labels.email}</label>
                        <input
                            type="email"
                            id="email"
                            onChange={handleInput}
                            value={formData.email}
                            className={inputClass}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className={labelClass}>{props.labels.description}</label>
                    <textarea
                        id="description"
                        onChange={handleInput}
                        value={formData.description}
                        rows={6}
                        className={`${inputClass} resize-none min-h-[160px]`}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="group relative mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white overflow-hidden bg-gradient-to-r from-dracula-purple to-dracula-pink shadow-[0_8px_24px_-8px_rgba(189,147,249,0.55)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(255,121,198,0.55)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                    <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    {loading ? (
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 animate-spin text-white/40 fill-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    ) : (
                        <Icon
                            icon="lucide:send-horizontal"
                            width={18}
                            height={18}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                    )}
                    <span>{loading ? props.labels.sending + '...' : props.labels.submit}</span>
                </button>
            </form>
        </div>
    )
}
