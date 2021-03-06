import {CUCUMBER_TYPE, TYPE} from "../constants";
import {suiteStartEvent, testStartEvent} from "./fixtures/events";
import {getDefaultOptions, RPClientMock} from "./reportportal-client.mock";

const Reporter = require("../../build/reporter");

describe("startSuite", () => {
  let reporter: any;

  beforeEach(() => {
    reporter = new Reporter(getDefaultOptions());
    reporter.client = new RPClientMock();
    reporter.tempLaunchId = "tempLaunchId";
  });

  test("should not add sldc/slid to cucumber step", () => {
    const sauceLabOptions =  {
      enabled: true,
      sldc: "foo"
    }
    Object.assign(reporter.options, {cucumberNestedSteps: true,  sauceLabOptions});
    reporter.sessionId = "bar";

    reporter.onSuiteStart(Object.assign(suiteStartEvent(), {type: CUCUMBER_TYPE.FEATURE}));
    reporter.onTestStart(testStartEvent());

    expect(reporter.client.startTestItem).toBeCalledTimes(2);
    expect(reporter.client.startTestItem).toHaveBeenNthCalledWith(
      2,
      {description: undefined, codeRef: undefined, hasStats: false, attributes: [], name: "foo", type: TYPE.STEP, retry: false},
      "tempLaunchId",
      "startTestItem",
    );
  });

  test("should add sldc/slid to test", () => {
    const sauceLabOptions =  {
      enabled: true,
      sldc: "foo"
    }
    Object.assign(reporter.options, {sauceLabOptions});
    reporter.sessionId = "bar";

    reporter.onSuiteStart(Object.assign(suiteStartEvent(), {type: CUCUMBER_TYPE.FEATURE}));
    reporter.onTestStart(testStartEvent());

    expect(reporter.client.startTestItem).toBeCalledTimes(2);
    expect(reporter.client.startTestItem).toHaveBeenNthCalledWith(
      2,
      {description: undefined, codeRef: undefined, attributes: [{key: "SLID", value: "bar"}, {key: "SLDC", value: "foo"}], name: "foo", type: TYPE.STEP, retry: false},
      "tempLaunchId",
      "startTestItem",
    );
  });
});
