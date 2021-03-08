import { StartTestItem } from "./entities";
import ReporterOptions from "./ReporterOptions";
export declare const promiseErrorHandler: (promise: Promise<any>) => void;
export declare const isEmpty: (object: object) => boolean;
/**
 * Limit the length of an arbitrary variable of any type, suitable for being logged or displayed
 * @param  {Any} val Any variable
 * @return {Any} Limited var of same type
 */
export declare const limit: (val: any) => any;
export declare const addBrowserParam: (browser: string, testItem: StartTestItem) => void;
export declare const addSauceLabAttributes: (options: ReporterOptions, testItem: StartTestItem, sessionId: string) => void;
export declare const addDescription: (description: string, testItem: StartTestItem) => void;
export declare const parseTags: (text: string) => string[];
export declare const isScreenshotCommand: (command: any) => boolean;
export declare const sendToReporter: (event: any, msg?: {}) => void;
