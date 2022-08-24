//Mosiuoa Motlhapo
function EventHandler(events) {
    this.events = events;

    this.getEventsBetweenDates = function(start, end) {
        return this.events.filter(function(e) {
            return e.dateStart >= start && e.dateEnd <= end;
        })
    }

    this.getByMonth = function(month) {
        // return this.events.filter(function(e) {
        //       return e.month == month;
        //   })
        var currMonth = this.events.filter(function(e) {
            return e.dateStart.substr(5, 7) == month;
        })
        return currMonth;
    }

    this.getUniqueDateAndSort = function() {
        sortedDates = this.events.sort(function(first, second) {
            // return first.dateStart.localeCompare(second.dateStart);
            return first.dateStart.localeCompare(second.dateStart);
        }).filter((first, result, second) =>
            second.findIndex((e) => e.dateStart === first.dateStart) === result
        );
        return sortedDates;
    }


    // this.getSummary = function(optional) {

    // }
}

var handler = new EventHandler(events);

//Part 2 – Extend Array functionality

Array.prototype.getByMonth = function(month) {
    return this.events.filter(function(element) { return element.dateStart.substring(5, 7) == month });
}

Array.prototype.getByMonth = function(month) {
    // return this.events.filter(function(e) {
    //       return e.month == month;
    //   })
    var currMonth = this.events.filter(function(e) {
        return e.dateStart.substr(5, 7) == month;
    })
    return currMonth;
}

Array.prototype.getUniqueDateAndSort = function() {
    sortedDates = this.events.sort(function(first, second) {
        // return first.dateStart.localeCompare(second.dateStart);
        return first.dateStart.localeCompare(second.dateStart);
    }).filter((first, result, second) =>
        second.findIndex((e) => e.dateStart === first.dateStart) === result
    );
    return sortedDates;
}

// Array.prototype.getSummary = function(optional) {

// }

// console.log(handler.getEventsBetweenDates('2022/02/01', '2022/02/16'));
// console.log(handler.getByMonth(06));
// console.log(handler.getUniqueDateAndSort());
// console.log(handler.getSummary());