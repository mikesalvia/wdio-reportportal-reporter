import { StorageEntity } from "./entities";
export declare class Storage {
    private testItems;
    private allTestItems;
    private suites;
    getCurrentSuite(): StorageEntity;
    getCurrentTest(): StorageEntity;
    addSuite(value: StorageEntity): void;
    removeSuite(): void;
    addTest(uid: string, value: StorageEntity): void;
    removeTest(item: StorageEntity): boolean;
    getStartedTests(): StorageEntity[];
}
