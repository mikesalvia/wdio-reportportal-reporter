import { STATUS, TYPE } from "./constants";
import { Attribute } from "./ReporterOptions";
export declare class StartTestItem {
    name: string;
    description?: string;
    parameters?: any[];
    attributes: any[];
    type: TYPE;
    codeRef?: string;
    retry: boolean;
    hasStats?: boolean;
    constructor(name: string, type: TYPE);
    addTags(): void;
    addSLID(id: string): void;
    addSLDC(id: string): void;
}
export declare class EndTestItem {
    status: STATUS;
    issue?: Issue;
    description?: string;
    attributes: Attribute[];
    constructor(status: STATUS, issue?: Issue);
}
export declare class Issue {
    private issueType;
    constructor(issueType: string);
}
export declare class StorageEntity {
    readonly type: TYPE;
    readonly id: string;
    readonly promise: Promise<any>;
    readonly wdioEntity: any;
    constructor(type: TYPE, id: string, promise: Promise<any>, wdioEntity: any);
}
