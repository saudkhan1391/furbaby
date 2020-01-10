const login = require('./sequentialTests/userLogin/userLogin');
const createFurbaby = require('./sequentialTests/createFurbaby/createFurbaby');
const checkinFb = require('./sequentialTests/checkinFurbaby/checkinFb');
const fbTracker = require('./sequentialTests/furBabyTracker/furbabyTracker');
const searchFb = require('./sequentialTests/searchFurbaby/searchFb');
const logout = require('./sequentialTests/userLogout/userLogout');

describe('sequentially run tests', () => {

    login();
    createFurbaby();
    checkinFb();
    fbTracker();
    searchFb();
    logout();

});