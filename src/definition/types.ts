export type ConditionDefinitionNode = {
    type: string,
    [key: string]: any,
    inBounds?: [number, number],
    inArray?: [number],
    conditions?: ConditionDefinitionNode[],
} | ConditionDefinitionNode[];

export type Slide = {
    url: string,
    weight?: number,
    conditions: ConditionDefinitionNode[],
};

export type Settings = {
    unitTimeMs?: number,
    backgroundColor?: string,
    hardRefreshMin?: number,
    softRefreshMin?: number,
};

export type Definition = {
    slides?: Slide[],
    settings?: Settings,
};
