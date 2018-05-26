'use strict';

const should = require('should');
const BulkUpdateBuilder = require('../index');

describe('es-bulk-update-builder', function() {
    it('should build an empty bulk update', function() {
        const subject = new BulkUpdateBuilder();
        const result = subject.build();
        should(result).eql([]);
    });

    it('should build a bulk update with one index that has a version', function() {
        const subject = new BulkUpdateBuilder();
        subject.index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3);

        const result = subject.build();

        should(result).eql([
            {
                index: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external'
                }
            },
            {
                name: 'my-doc'
            }
        ]);
    });

    it('should build a bulk update with one index that has a version and version type', function() {
        const subject = new BulkUpdateBuilder();
        subject.index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3, 'external_gt');

        const result = subject.build();

        should(result).eql([
            {
                index: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external_gt'
                }
            },
            {
                name: 'my-doc'
            }
        ]);
    });

    it('should build a bulk update with one index that has no version', function() {
        const subject = new BulkUpdateBuilder();
        subject.index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id');

        const result = subject.build();

        should(result).eql([
            {
                index: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id'
                }
            },
            {
                name: 'my-doc'
            }
        ]);
    });

    it('should build a bulk update with one update that has a version', function() {
        const subject = new BulkUpdateBuilder();
        subject.update({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3);

        const result = subject.build();

        should(result).eql([
            {
                update: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external'
                }
            },
            {
                name: 'my-doc'
            }
        ]);
    });

    it('should build a bulk update with one update that has a version and version type', function() {
        const subject = new BulkUpdateBuilder();
        subject.update({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3, 'external_gt');

        const result = subject.build();

        should(result).eql([
            {
                update: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external_gt'
                }
            },
            {
                name: 'my-doc'
            }
        ]);
    });

    it('should build a bulk update with one update that has no version', function() {
        const subject = new BulkUpdateBuilder();
        subject.update({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id');

        const result = subject.build();

        should(result).eql([
            {
                update: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id'
                }
            },
            {
                name: 'my-doc'
            }
        ]);
    });

    it('should build a bulk update with one delete that has a version', function() {
        const subject = new BulkUpdateBuilder();
        subject.delete('some-index', 'some-type', 'some-id', 3);

        const result = subject.build();

        should(result).eql([
            {
                delete: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external'
                }
            }
        ]);
    });

    it('should build a bulk update with one delete that has a version and version type', function() {
        const subject = new BulkUpdateBuilder();
        subject.delete('some-index', 'some-type', 'some-id', 3, 'external_gt');

        const result = subject.build();

        should(result).eql([
            {
                delete: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external_gt'
                }
            }
        ]);
    });

    it('should build a bulk update with one delete that has no version', function() {
        const subject = new BulkUpdateBuilder();
        subject.delete('some-index', 'some-type', 'some-id');

        const result = subject.build();

        should(result).eql([
            {
                delete: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id'
                }
            }
        ]);
    });

    it('should build a bulk update with multiple indexes', function() {
        const subject = new BulkUpdateBuilder();

        subject
            .index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3)
            .index({ name: 'other-doc' }, 'other-index', 'other-type', 'other-id', 4);

        const result = subject.build();

        should(result).eql([
            {
                index: {
                    _index: 'some-index',
                    _type: 'some-type',
                    _id: 'some-id',
                    _version: 3,
                    _version_type: 'external'
                }
            },
            {
                name: 'my-doc'
            },
            {
                index: {
                    _index: 'other-index',
                    _type: 'other-type',
                    _id: 'other-id',
                    _version: 4,
                    _version_type: 'external'
                }
            },
            {
                name: 'other-doc'
            }
        ]);
    });
});


