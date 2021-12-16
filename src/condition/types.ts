import { ConditionDefinitionNode } from "../definition/types";

export type ConditionMetaData = { conditionName: string; conditionType: string; };
export type AbstractCondition = ((definition: ConditionDefinitionNode) => ConditionEvaluator) & ConditionMetaData;
export type ConditionEvaluator = (() => boolean) & ConditionMetaData;
