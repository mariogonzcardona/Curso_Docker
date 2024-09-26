let times = 0;
const syncDB = () => {
    times++
    console.log('Tick cada 1 segundo: ', times);
    return times;
};

module.exports = syncDB;