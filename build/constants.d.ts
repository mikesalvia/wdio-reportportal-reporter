export declare enum EVENTS {
    RP_LOG = "rp:log",
    RP_FILE = "rp:file",
    RP_TEST_LOG = "rp:failedLog",
    RP_TEST_FILE = "rp:failedFile",
    RP_TEST_RETRY = "rp:testRetry",
    RP_TEST_ATTRIBUTES = "rp:testAttributes"
}
export declare enum STATUS {
    PASSED = "PASSED",
    FAILED = "FAILED",
    STOPPED = "STOPPED",
    SKIPPED = "SKIPPED",
    RESETED = "RESETED",
    CANCELLED = "CANCELLED"
}
export declare enum LEVEL {
    ERROR = "ERROR",
    TRACE = "TRACE",
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    EMPTY = ""
}
export declare enum TYPE {
    SUITE = "SUITE",
    STORY = "STORY",
    TEST = "TEST",
    SCENARIO = "SCENARIO",
    STEP = "STEP",
    BEFORE_CLASS = "BEFORE_CLASS",
    BEFORE_GROUPS = "BEFORE_GROUPS",
    BEFORE_METHOD = "BEFORE_METHOD",
    BEFORE_SUITE = "BEFORE_SUITE",
    BEFORE_TEST = "BEFORE_TEST",
    AFTER_CLASS = "AFTER_CLASS",
    AFTER_GROUPS = "AFTER_GROUPS",
    AFTER_METHOD = "AFTER_METHOD",
    AFTER_SUITE = "AFTER_SUITE",
    AFTER_TEST = "AFTER_TEST"
}
export declare enum CUCUMBER_TYPE {
    FEATURE = "feature",
    SCENARIO = "scenario"
}
export declare enum CUCUMBER_STATUS {
    PASSED = "passed",
    FAILED = "failed",
    SKIPPED = "skipped"
}
export declare enum MODE {
    DEFAULT = "DEFAULT",
    DEBUG = "DEBUG"
}
