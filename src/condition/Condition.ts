import { AbstractCondition } from "./types";

export const ConditionNames = [
    'Day', 'FetchStatus', 'InArray', 'InBounds', 'Logic', 'Month', 'Time',
];

export const Conditions = Promise.all(ConditionNames.map(name => import(`./${name}`).then(({ default: condition }) => condition)));
export const ConditionMap = (async () => Object.fromEntries(await Promise.all((await Conditions).map(condition => [condition.conditionType || condition.toString(), condition]))))();
