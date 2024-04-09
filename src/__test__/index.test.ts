import { NodeEnv, appConfig } from "@config";

test("ci environment test", () => {
    expect(appConfig.NODE_ENV).toBe(NodeEnv.TEST);
});
