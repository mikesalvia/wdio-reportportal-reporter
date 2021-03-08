"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageEntity = exports.Issue = exports.EndTestItem = exports.StartTestItem = void 0;
const ReporterOptions_1 = require("./ReporterOptions");
const utils_1 = require("./utils");
class StartTestItem {
    constructor(name, type) {
        this.name = "";
        this.attributes = [];
        this.retry = false;
        this.name = name;
        this.type = type;
        if (this.name.length > 256) {
            this.name = this.name.slice(0, 256);
        }
    }
    addTags() {
        const tags = utils_1.parseTags(this.name);
        if (tags.length > 0) {
            const attrs = tags.map((value) => (new ReporterOptions_1.Attribute(undefined, value)));
            this.attributes.push(...attrs);
        }
    }
    addSLID(id) {
        this.attributes.push({ key: "SLID", value: id });
    }
    addSLDC(id) {
        this.attributes.push({ key: "SLDC", value: id });
    }
}
exports.StartTestItem = StartTestItem;
class EndTestItem {
    constructor(status, issue) {
        this.attributes = [];
        this.status = status;
        if (issue) {
            this.issue = issue;
        }
    }
}
exports.EndTestItem = EndTestItem;
class Issue {
    constructor(issueType) {
        this.issueType = issueType;
    }
}
exports.Issue = Issue;
class StorageEntity {
    constructor(type, id, promise, wdioEntity) {
        this.type = type;
        this.id = id;
        this.promise = promise;
        this.wdioEntity = wdioEntity;
    }
}
exports.StorageEntity = StorageEntity;
