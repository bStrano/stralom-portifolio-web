import React, {useMemo} from 'react';
import {CodeTag} from "@/app/[locale]/about/_components/CodeTag";
import {useFormatter, useTranslations} from "next-intl";

interface IPeriodTagProps {
    start: Date;
    end: Date;
    label: string;
}

function PeriodTag({start, end, label}: IPeriodTagProps) {
    const w = useTranslations('Words');
    const format = useFormatter();

    const duration = format.relativeTime(new Date(start), { now: end, unit: 'month'}).replace(/ago|há/g, '').trim();


    const startDate = useMemo(() => {
        return format.dateTime(start, {
            year: 'numeric',
            month: 'short',
        });
    }, [format, start]);

    const endDate = useMemo(() => {
        if(end.getMonth() === new Date().getMonth() && end.getFullYear() === new Date().getFullYear()) {
            return w('present');
        }
        return format.dateTime(end, {
            year: 'numeric',
            month: 'short',
        });
    }, [end, format, w]);

    return (
     <CodeTag name={label} description={`${startDate} - ${endDate} (${duration})`}/>
 );}

export default PeriodTag;
