import {ColorType} from "@/@types/ColorType";

export interface TagProps {
    title: string;
    color?: ColorType;
}

const colorClassesMap = {
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-300 border-cyan-500',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-700 dark:text-amber-300 border-amber-500',
    emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-700 dark:text-emerald-300 border-emerald-500',
    teal: 'bg-teal-100 text-teal-800 dark:bg-teal-700 dark:text-teal-300 border-teal-500',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-300 border-indigo-500',
    lime: 'bg-lime-100 text-lime-800 dark:bg-lime-700 dark:text-lime-300 border-lime-500',
    violet: 'bg-violet-100 text-violet-800 dark:bg-violet-700 dark:text-violet-300 border-violet-500',
    sky: 'bg-sky-100 text-sky-800 dark:bg-sky-700 dark:text-sky-300 border-sky-500',
    slate: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300 border-slate-500',
    rose: 'bg-rose-100 text-rose-800 dark:bg-rose-700 dark:text-rose-300 border-rose-500',
    red: 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-300 border-red-500',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-orange-300 border-orange-500',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-300 border-yellow-500',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-300 border-purple-500',
    green: 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-300 border-green-500',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-300 border-blue-500',
    zinc: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 border-zinc-500',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-500',
};

const getColorClasses = (color: ColorType) => {
    return colorClassesMap[color];
};

export default function Tag({ color = 'cyan', title }: TagProps) {
    const colorClasses = getColorClasses(color);


    return (
        <span className={`whitespace-nowrap text-xs font-medium me-2 px-2.5 py-0.5 rounded border ${colorClasses}`}>{title}</span>
    )
}
