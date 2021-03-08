import { LEVEL, MODE } from "./constants";
export declare class Attribute {
    key?: string;
    value?: string;
    constructor(key?: string, value?: string);
}
export declare class SauceLabOptions {
    enabled: boolean;
    sldc?: string;
    constructor(enabled: boolean, sldc?: string);
}
export default class ReporterOptions {
    debug: boolean;
    autoAttachScreenshots: boolean;
    screenshotsLogLevel: LEVEL;
    reportSeleniumCommands: boolean;
    seleniumCommandsLogLevel: LEVEL;
    parseTagsFromTestTitle: boolean;
    setRetryTrue: boolean;
    isSauseLabRun: boolean;
    sauceLabOptions?: SauceLabOptions;
    cucumberNestedSteps: boolean;
    autoAttachCucumberFeatureToScenario: boolean;
    reportPortalClientConfig: {
        mode: MODE;
        attributes: (typeof Attribute)[];
        description: string;
    };
    writeLaunchIdToFile: boolean;
}
