import { ConditionDefinitionNode } from "../definition/types";
import { AbstractCondition, ConditionEvaluator, ConditionGenerator } from "./types";

export const ConditionNames = [
    'Day', 'FetchStatus', 'InArray', 'InBounds', 'Logic', 'Month', 'Time',
];

export const Conditions = Promise.all(ConditionNames.map(name => import(`./${name}`).then(({ default: condition }) => condition)));
export const ConditionMap: Promise<Map<string, ConditionGenerator>> = (async () => Object.fromEntries(await Promise.all((await Conditions).map(condition => [condition.conditionType || condition.toString(), condition]))))();

const Condition: ConditionGenerator = async (definition: ConditionDefinitionNode) => {
    if (definition instanceof Array) {
        const innerConditions: ConditionEvaluator[] = await Promise.all(definition.map(Condition));
        // "AND" conditions in arrays by default
        return async () => (await Promise.all(innerConditions.map(func => func()))).every(Boolean);
    }
    const rootType = definition.type;
    const conditionMap = await ConditionMap;
    if (!rootType || typeof rootType !== 'string' || !Object.prototype.hasOwnProperty.call(conditionMap, definition.type)) {
        throw new Error(`Unknown condition: ${rootType} in ${JSON.stringify(definition, undefined, 2)}`);
    }
    return (conditionMap.get(rootType)?.(definition)) || (() => Promise.resolve(true));
};
