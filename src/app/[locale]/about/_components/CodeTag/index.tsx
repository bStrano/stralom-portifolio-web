import {ReactNode} from "react";
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

    return (
        <div  style={{marginLeft: marginPerLevel*indentationLevel}}>
            {
                (children != null || description != null) &&
                <>
                    <a href={href} className={twMerge('font-bold',className, href && 'hover:cursor-pointer')}>{`<${name}>`}</a>
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

            <a href={href} className={twMerge('font-bold',className)}>{`</${name}>`}</a>
        </div>
    )
}
