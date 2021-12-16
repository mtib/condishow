import { ConditionDefinitionNode } from "../definition/types";
import { AbstractCondition } from "./types";

export const wrapCondition = (func: (definition: ConditionDefinitionNode) => () => boolean, name: string) => {
    const innerFunc = func as AbstractCondition;
    innerFunc.conditionName = name;
    innerFunc.toString = () => innerFunc.conditionName;
    const wrap = (definition: ConditionDefinitionNode) => {
        const conditionEvaluator = innerFunc(definition);
        conditionEvaluator.conditionType = wrap.conditionType;
        conditionEvaluator.conditionName = wrap.conditionName;
        return conditionEvaluator;
    };
    wrap.conditionName = name;
    wrap.conditionType = [name[0].toLowerCase(), name.slice(1)].join('');
    return wrap;
};
