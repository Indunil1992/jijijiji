module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["hhh"] = {
        host: process.env.EndPoint_rdsHhh,
        port: process.env.Port_rdsHhh,
        user: process.env.User_rdsHhh,
        password: process.env.Password_rdsHhh,
        database: "ccc"
    };
    this.dbConnections["uiuijjj"] = {
        host: process.env.EndPoint_rdsUiuijjj,
        port: process.env.Port_rdsUiuijjj,
        user: process.env.User_rdsUiuijjj,
        password: process.env.Password_rdsUiuijjj,
        database: "jiu"
    };
};