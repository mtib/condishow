import { ConditionMap, Conditions } from './Condition';

describe('Conditions', () => {
    test('resolves', async () => {
        await expect(Conditions).resolves.toBeTruthy();
        console.log(await Conditions);
    });
});

describe('ConditionMap', () => {
    test('resolves', async () => {
        await expect(ConditionMap).resolves.toBeTruthy();
        console.log(await ConditionMap);
    });
});
