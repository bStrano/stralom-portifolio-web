import {ProjectTypeEnum} from "@/app/[locale]/projects/_enums/ProjectTypeEnum";

export interface ProjectInterface {
    type: ProjectTypeEnum,
    title: string,
    description: string,
    year: number,
    image: string
}
