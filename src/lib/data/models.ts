export type Project = {
    name: string;
    icon: string;
    text: string;
    tech_stack: string;
    link?: string;
};

export type Benefit = {
    name: string;
    description: string;
}

export type Tab = {
    name: string;
    link: string;
    external: boolean;
}