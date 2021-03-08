"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SauceLabOptions = exports.Attribute = void 0;
const constants_1 = require("./constants");
class Attribute {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
exports.Attribute = Attribute;
class SauceLabOptions {
    constructor(enabled, sldc) {
        this.enabled = enabled;
        this.sldc = sldc;
    }
}
exports.SauceLabOptions = SauceLabOptions;
class ReporterOptions {
    constructor() {
        this.debug = false;
        this.autoAttachScreenshots = false;
        this.screenshotsLogLevel = constants_1.LEVEL.INFO;
        this.reportSeleniumCommands = false;
        this.seleniumCommandsLogLevel = constants_1.LEVEL.DEBUG;
        this.parseTagsFromTestTitle = false;
        this.setRetryTrue = false;
        this.isSauseLabRun = false;
        this.cucumberNestedSteps = false;
        this.autoAttachCucumberFeatureToScenario = false;
        this.reportPortalClientConfig = { mode: constants_1.MODE.DEFAULT, attributes: [Attribute], description: "" };
        this.writeLaunchIdToFile = false;
    }
}
exports.default = ReporterOptions;
