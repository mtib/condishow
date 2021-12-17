import { ConditionDefinitionNode } from "../definition/types";

export type ConditionMetaData = { conditionName: string; conditionType: string; };
export type ConditionEvaluator = (() => Promise<boolean>);
export type ConditionGenerator = ((definition: ConditionDefinitionNode) => Promise<ConditionEvaluator>);
export type AbstractCondition = ConditionGenerator & ConditionMetaData;
