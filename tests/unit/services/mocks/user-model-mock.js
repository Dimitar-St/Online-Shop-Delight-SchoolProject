class UserModelMock {
    constructor(obj) {}
    
    save() {
        return Promise.resolve();
    }
}

module.exports = UserModelMock;