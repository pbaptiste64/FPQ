const workers = [
    { name: "Phil Baptiste", hourlyRate: 40.75, hoursWorked: 74.25 },
    { name: "Lebron James", hourlyRate: 75.50, hoursWorked: 40 },
    { name: "Dwayne Wade", hourlyRate: 69.65, hoursWorked: 50.25 },
]

class Payroll {
    constructor(workers) {
        this.workers = workers
        this.names = this.getNames(this.workers)
        
        // this.fullTime = this.getFullTime(this.workers)
    }
    getNames(workers) {
        let names = workers
        return names.map((name) => {
            return names.sort(names.name)
        })
    }
    getFullTime(workers) {
        return workers.hoursWorked.filter((hours) => {
            return (workers > 60) ? 1 : 0
        })
    }
    getTotalLabor(workers) {
        return workers.reduce((acc, cur, index) => {
            return (index === workers.length - 1) ? acc * cur + workers : 1 //I got a bit lost here
        })
    }
}

let readyMart = new Payroll(workers)
console.log(readyMart.workers) //Lebron and Wade work for ReadyMart...... *this has nothing to do with anything*
console.log(readyMart.names)