"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODE = exports.CUCUMBER_STATUS = exports.CUCUMBER_TYPE = exports.TYPE = exports.LEVEL = exports.STATUS = exports.EVENTS = void 0;
var EVENTS;
(function (EVENTS) {
    EVENTS["RP_LOG"] = "rp:log";
    EVENTS["RP_FILE"] = "rp:file";
    EVENTS["RP_TEST_LOG"] = "rp:failedLog";
    EVENTS["RP_TEST_FILE"] = "rp:failedFile";
    EVENTS["RP_TEST_RETRY"] = "rp:testRetry";
    EVENTS["RP_TEST_ATTRIBUTES"] = "rp:testAttributes";
})(EVENTS = exports.EVENTS || (exports.EVENTS = {}));
var STATUS;
(function (STATUS) {
    STATUS["PASSED"] = "PASSED";
    STATUS["FAILED"] = "FAILED";
    STATUS["STOPPED"] = "STOPPED";
    STATUS["SKIPPED"] = "SKIPPED";
    STATUS["RESETED"] = "RESETED";
    STATUS["CANCELLED"] = "CANCELLED";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var LEVEL;
(function (LEVEL) {
    LEVEL["ERROR"] = "ERROR";
    LEVEL["TRACE"] = "TRACE";
    LEVEL["DEBUG"] = "DEBUG";
    LEVEL["INFO"] = "INFO";
    LEVEL["WARN"] = "WARN";
    LEVEL["EMPTY"] = "";
})(LEVEL = exports.LEVEL || (exports.LEVEL = {}));
var TYPE;
(function (TYPE) {
    TYPE["SUITE"] = "SUITE";
    TYPE["STORY"] = "STORY";
    TYPE["TEST"] = "TEST";
    TYPE["SCENARIO"] = "SCENARIO";
    TYPE["STEP"] = "STEP";
    TYPE["BEFORE_CLASS"] = "BEFORE_CLASS";
    TYPE["BEFORE_GROUPS"] = "BEFORE_GROUPS";
    TYPE["BEFORE_METHOD"] = "BEFORE_METHOD";
    TYPE["BEFORE_SUITE"] = "BEFORE_SUITE";
    TYPE["BEFORE_TEST"] = "BEFORE_TEST";
    TYPE["AFTER_CLASS"] = "AFTER_CLASS";
    TYPE["AFTER_GROUPS"] = "AFTER_GROUPS";
    TYPE["AFTER_METHOD"] = "AFTER_METHOD";
    TYPE["AFTER_SUITE"] = "AFTER_SUITE";
    TYPE["AFTER_TEST"] = "AFTER_TEST";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var CUCUMBER_TYPE;
(function (CUCUMBER_TYPE) {
    CUCUMBER_TYPE["FEATURE"] = "feature";
    CUCUMBER_TYPE["SCENARIO"] = "scenario";
})(CUCUMBER_TYPE = exports.CUCUMBER_TYPE || (exports.CUCUMBER_TYPE = {}));
var CUCUMBER_STATUS;
(function (CUCUMBER_STATUS) {
    CUCUMBER_STATUS["PASSED"] = "passed";
    CUCUMBER_STATUS["FAILED"] = "failed";
    CUCUMBER_STATUS["SKIPPED"] = "skipped";
})(CUCUMBER_STATUS = exports.CUCUMBER_STATUS || (exports.CUCUMBER_STATUS = {}));
var MODE;
(function (MODE) {
    MODE["DEFAULT"] = "DEFAULT";
    MODE["DEBUG"] = "DEBUG";
})(MODE = exports.MODE || (exports.MODE = {}));
