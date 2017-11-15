class UserModelMock {
    constructor(obj) {}
    
    save() {
        return Promise.resolve();
    }
    
    static find(searchingPattern, action) {
        return Promise.resolve();
    }
    
    static update(searchPar, newInfo, action) {
        return Promise.resolve();
    }
    
    static findOne(searchedObj, action) {
    }
}

module.exports = UserModelMock;