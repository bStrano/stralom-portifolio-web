import {ReactNode, useMemo} from "react";
import { twMerge } from 'tailwind-merge'


export interface CodeTagProps {
    name: string;
    description?: string;
    className?: string;
    indentationLevel?: number;
    children?: ReactNode;
    href?: string;
}

export function CodeTag({name, description, indentationLevel = 1, children, className, href}: CodeTagProps) {
    const marginPerLevel = 30;
    const formattedTagName = useMemo(() => {
        return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },[name])


    return (
        <div className={description && 'hover:bg-dracula-current-line '}>
            <div style={{paddingLeft: marginPerLevel*indentationLevel}}>
                {
                    (children != null || description != null) &&
                    <>
                        <a href={href} className={twMerge('font-italic text-dracula-pink',className, href && 'hover:cursor-pointer')}>{`<${formattedTagName}>`}</a>
                        {
                            children ?
                                <>
                                    <br/>
                                    {children}
                                </>
                                :
                                <a href={href} className={'text-gray-300'}>{` ${description} `}</a>
                        }
                    </>

                }

                <a href={href} className={twMerge('font-italic text-dracula-pink',className)}>{`</${formattedTagName}>`}</a>
            </div>
        </div>
    )
}
