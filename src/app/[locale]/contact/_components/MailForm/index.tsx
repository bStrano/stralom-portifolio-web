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
        sent: string;
        successMessage: string;
        errorMessage: string;
        rateLimitMessage: string;
        invalidEmail: string;
        invalidPhone: string;
        charactersUsedTemplate: string;
    }
}

const DESCRIPTION_MAX = 2000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputBaseClass =
    "block w-full rounded-xl px-4 py-3 text-sm text-white placeholder-blue-dark-11 bg-white/[0.03] border transition-[border-color,box-shadow,background-color] duration-200 ease-out focus:outline-none focus:bg-white/[0.05] disabled:opacity-60 disabled:cursor-not-allowed"

const inputValidClass =
    "border-white/[0.08] focus:border-dracula-purple/60 focus:shadow-[0_0_0_3px_rgba(189,147,249,0.18)]"

const inputInvalidClass =
    "border-red-500/60 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.18)]"

const labelClass =
    "block mb-1.5 text-[11px] font-medium tracking-[0.18em] uppercase text-blue-dark-11"

const errorTextClass =
    "mt-1.5 text-xs text-red-400"

function maskPhoneBR(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length === 0) return ''
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function isPhoneValid(masked: string): boolean {
    const digits = masked.replace(/\D/g, '')
    return digits.length === 10 || digits.length === 11
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function MailForm(props: MailFormProps) {
    const [status, setStatus] = useState<Status>('idle')
    const [successToast, setSuccessToast] = useState(false)
    const [errorToast, setErrorToast] = useState<string | null>(null)
    const [touched, setTouched] = useState({email: false, phone: false})
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        description: "",
        website: "",
    });

    const loading = status === 'loading'
    const showSuccess = status === 'success'

    const emailInvalid = touched.email && formData.email.length > 0 && !EMAIL_RE.test(formData.email)
    const phoneInvalid = touched.phone && formData.phone.length > 0 && !isPhoneValid(formData.phone)
    const descriptionLength = formData.description.length
    const descriptionExceeded = descriptionLength > DESCRIPTION_MAX

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loading) return

        setTouched({email: true, phone: true})
        if (!EMAIL_RE.test(formData.email) || !isPhoneValid(formData.phone) || descriptionExceeded) {
            return
        }

        setStatus('loading')
        setErrorToast(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            })

            const data = await response.json().catch(() => ({}))

            if (response.ok && data.MessageId) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    description: "",
                    website: "",
                })
                setTouched({email: false, phone: false})
                setStatus('success')
                setSuccessToast(true)
                setTimeout(() => setStatus('idle'), 1800)
                return
            }

            setStatus('error')
            setErrorToast(response.status === 429 ? props.labels.rateLimitMessage : props.labels.errorMessage)
        } catch {
            setStatus('error')
            setErrorToast(props.labels.errorMessage)
        }
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const fieldName = e.target.getAttribute('id') as string;
        let fieldValue = e.target.value;
        if (fieldName === 'phone') {
            fieldValue = maskPhoneBR(fieldValue)
        }
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const handleBlur = (field: 'email' | 'phone') => () => {
        setTouched(prev => ({...prev, [field]: true}))
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

            <form onSubmit={onSubmit} className="flex flex-col p-5 md:p-7 gap-5" noValidate>
                <Toast title={props.labels.successMessage} type={'success'} visible={successToast}/>
                {errorToast && <Toast title={errorToast} type={'danger'} visible={true}/>}

                <div
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none -left-[9999px] -top-[9999px]"
                >
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleInput}
                    />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className={labelClass}>{props.labels.firstName}</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInput}
                            disabled={loading}
                            className={`${inputBaseClass} ${inputValidClass}`}
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
                            disabled={loading}
                            className={`${inputBaseClass} ${inputValidClass}`}
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
                            inputMode="tel"
                            placeholder="(11) 91234-5678"
                            onChange={handleInput}
                            onBlur={handleBlur('phone')}
                            value={formData.phone}
                            disabled={loading}
                            aria-invalid={phoneInvalid}
                            className={`${inputBaseClass} ${phoneInvalid ? inputInvalidClass : inputValidClass}`}
                            required
                        />
                        {phoneInvalid && <p className={errorTextClass}>{props.labels.invalidPhone}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClass}>{props.labels.email}</label>
                        <input
                            type="email"
                            id="email"
                            inputMode="email"
                            autoComplete="email"
                            onChange={handleInput}
                            onBlur={handleBlur('email')}
                            value={formData.email}
                            disabled={loading}
                            aria-invalid={emailInvalid}
                            className={`${inputBaseClass} ${emailInvalid ? inputInvalidClass : inputValidClass}`}
                            required
                        />
                        {emailInvalid && <p className={errorTextClass}>{props.labels.invalidEmail}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className={labelClass}>{props.labels.description}</label>
                    <textarea
                        id="description"
                        onChange={handleInput}
                        value={formData.description}
                        rows={6}
                        maxLength={DESCRIPTION_MAX}
                        disabled={loading}
                        aria-invalid={descriptionExceeded}
                        className={`${inputBaseClass} ${descriptionExceeded ? inputInvalidClass : inputValidClass} resize-none min-h-[160px]`}
                        required
                    />
                    <div className="mt-1.5 flex justify-end">
                        <span className={`text-xs tabular-nums ${descriptionLength > DESCRIPTION_MAX * 0.9 ? 'text-yellow-400' : 'text-blue-dark-11'}`}>
                            {props.labels.charactersUsedTemplate
                                .replace('{count}', String(descriptionLength))
                                .replace('{max}', String(DESCRIPTION_MAX))}
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading || showSuccess}
                    aria-busy={loading}
                    className={`group relative mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white overflow-hidden shadow-[0_8px_24px_-8px_rgba(189,147,249,0.55)] transition-[transform,box-shadow,filter,background] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(255,121,198,0.55)] disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                        showSuccess
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                            : 'bg-gradient-to-r from-dracula-purple to-dracula-pink disabled:opacity-70'
                    }`}
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
                    ) : showSuccess ? (
                        <Icon
                            icon="lucide:check"
                            width={18}
                            height={18}
                            className="animate-scale-in"
                        />
                    ) : (
                        <Icon
                            icon="lucide:send-horizontal"
                            width={18}
                            height={18}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                    )}
                    <span>
                        {loading
                            ? props.labels.sending + '...'
                            : showSuccess
                                ? props.labels.sent
                                : props.labels.submit}
                    </span>
                </button>
            </form>
        </div>
    )
}
