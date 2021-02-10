class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!!!id) {
            throw new Error('error: no id');
        }

        if (this.alarmCollection.findIndex((elem) => elem.id == id) != -1) {
            return console.error("error: more than one id");
        }

        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback
        });
    }

    removeClock(id) {
        const len = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((elem) => id != elem.id);
        return (len != this.alarmCollection.length);
    }

    getCurrentFormattedTime() {
        return `${new Date().getHours()}:${new Date().getMinutes()}`;
    }

    start() {
        function checkCloak(alarm) { 
            if(`${new Date().getHours()}:${new Date().getMinutes()}` === alarm.time) {
                return alarm.callback();
            }

            // if(this.getCurrentFormattedTime() === alarm.time) {
            //     return alarm.callback();
            // }
        }

        this.timerId = setInterval(() => this.alarmCollection.forEach(elem => checkCloak(elem)),1000);
    }

    stop() {
        if(!!this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`alarms: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(elem => console.log(`${elem.id} ${elem.time}`));
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}

const example = new AlarmClock();
example.addClock(`${new Date().getHours()}:${new Date().getMinutes()}`, () => console.log("wake up"), 1);
example.addClock(`${new Date().getHours()}:${new Date().getMinutes() + 1}`, () => {console.log("wake up, please"); example.removeClock(2)}, 2);
example.addClock(`${new Date().getHours()}:${new Date().getMinutes() + 1}`, () => {console.log("wake up, please"); example.removeClock(2)}, 1);
example.addClock(`${new Date().getHours()}:${new Date().getMinutes() + 2}`, () => {
    console.log("hoo, insted of waking up you're sleeping");
    example.clearAlarms();
    example.printAlarms();
}, 3);
example.printAlarms();
example.start();