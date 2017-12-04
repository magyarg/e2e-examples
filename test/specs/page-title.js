import assert from 'assert';

describe('fixture', function() {
    it('has the expected page title', function() {
        browser.url('/');
        assert.equal(browser.getTitle(), 'End-to-End Testing');
    });
});