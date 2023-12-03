import Tag from "@/app/_components/Tag";
import {SkillsEnums} from "@/constants/SkillsEnums";
import {ColorType} from "@/@types/ColorType";
import {GenericLookupInterface} from "@/@types/LookupType";

export interface ProjectTagInterface {
    skill: SkillsEnums;
}

interface SkillLookupInterface {
    title: string;
    color: ColorType;
}

const skills: GenericLookupInterface<SkillsEnums, SkillLookupInterface> = {
    [SkillsEnums.SQLITE]: {
        title: 'SQLite',
        color: 'sky'
    },
    [SkillsEnums.AWS]: {
        title: 'AWS',
        color: 'orange'
    },
    [SkillsEnums.C_SHARP]: {
        title: 'C#',
        color: 'blue'
    },
    [SkillsEnums.CLOUDFLARE]: {
        title: 'Cloudflare',
        color: 'orange'
    },
    [SkillsEnums.DART]: {
        title: 'Dart',
        color: 'blue'
    },
    [SkillsEnums.EC2]: {
        title: 'EC2',
        color: 'amber'
    },
    [SkillsEnums.EXPRESS]: {
        title: 'Express',
        color: 'green'
    },
    [SkillsEnums.FIREBASE]: {
        title: 'Firebase',
        color: 'yellow'
    },
    [SkillsEnums.FLUTTER]: {
        title: 'Flutter',
        color: 'cyan'
    },
    [SkillsEnums.GIT]: {
        title: 'Git',
        color: 'red'
    },
    [SkillsEnums.JAVA]: {
        title: 'Java',
        color: 'blue'
    },
    [SkillsEnums.JAVASCRIPT]: {
        title: 'Javascript',
        color: 'yellow'
    },
    [SkillsEnums.JEST]: {
        title: 'Docker',
        color: 'rose'
    },
    [SkillsEnums.MONGODB]: {
        title: 'Mongodb',
        color: 'lime'
    },
    [SkillsEnums.POSTGRES]: {
        title: 'Postgres',
        color: 'blue'
    },
    [SkillsEnums.PRISMA]: {
        title: 'Prisma',
        color: 'gray'
    },
    [SkillsEnums.REACT_NATIVE]: {
        title: 'React Native',
        color: 'cyan'
    },
    [SkillsEnums.S3]: {
        title: 'Amazon S3',
        color: 'blue'
    },
    [SkillsEnums.UNITY]: {
        title: 'Unity',
        color: 'gray'
    },
    [SkillsEnums.DOCKER]: {
        title: 'Docker',
        color: 'cyan'
    },
    [SkillsEnums.NEST]: {
        title: 'Nestjs',
        color: 'fuchsia'
    },
    [SkillsEnums.NEXT]: {
        title: 'Nextjs',
        color: 'zinc'
    },
    [SkillsEnums.TYPEORM]: {
        title: 'Typeorm',
        color: 'orange'
    },
    [SkillsEnums.TYPESCRIPT]: {
        title: 'Typescript',
        color: 'blue'
    },
    [SkillsEnums.ORACLE_OBJECT_STORAGE]: {
        title: 'Oracle Object Storage',
        color: 'violet'
    },
    [SkillsEnums.ORACLE_DATABASE]: {
        title: 'Oracle Database',
        color: 'red'
    },
    [SkillsEnums.REACT]: {
        title: 'React',
        color: 'cyan'
    },
    [SkillsEnums.NODE]: {
        title: 'Nodejs',
        color: 'lime'
    },
    [SkillsEnums.TAILWIND]: {
        title: 'Tailwind',
        color: 'cyan'
    },
    [SkillsEnums.DOTNET]: {
        title: '.NET',
        color: 'purple'
    },
    [SkillsEnums.REDIS]: {
        title: 'Redis',
        color: 'red'
    },
    [SkillsEnums.ANDROID]: {
        title: 'Android',
        color: 'green'
    }
}

export function ProjectTag({skill}: ProjectTagInterface) {
    const {title, color} = skills[skill];

    return (
        <>
            <Tag title={title} color={color}/>
        </>
    )
}
