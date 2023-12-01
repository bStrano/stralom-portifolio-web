import {ProjectTypeEnum} from "@/app/[locale]/projects/_enums/ProjectTypeEnum";
import {SkillsEnums} from "@/constants/SkillsEnums";

export interface ProjectInterface {
    type: ProjectTypeEnum,
    title: string,
    description: string,
    year: number,
    image: string,
    skills: SkillsEnums[]
}
