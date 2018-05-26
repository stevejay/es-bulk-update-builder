'use strict';

class BulkUpdateBuilder {
    constructor() {
        this.body = [];
    }

    index(document, index, type, id, version, versionType) {
        const metadata = this._createMetadata(index, type, id, version, versionType);
        this.body.push({ index: metadata });
        this.body.push(document);
        return this;
    }

    update(document, index, type, id, version, versionType) {
        const metadata = this._createMetadata(index, type, id, version, versionType);
        this.body.push({ update: metadata });
        this.body.push(document);
        return this;
    }

    delete(index, type, id, version, versionType) {
        const metadata = this._createMetadata(index, type, id, version, versionType);
        this.body.push({ delete: metadata });
        return this;
    }

    build() {
        return this.body;
    }

    _createMetadata(index, type, id, version, versionType='external') {
        const metadata = {
            _index: index,
            _type: type,
            _id: id
        };

        if (version) {
            metadata._version = version;
            metadata._version_type = versionType;
        }

        return metadata;
    }
}

module.exports = exports = BulkUpdateBuilder;
