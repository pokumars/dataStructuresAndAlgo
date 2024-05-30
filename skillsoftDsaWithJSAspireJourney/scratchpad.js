class HistoricalStop {
    constructor(url) {
        this.url = url;
        this.previous = null;
        this.next = null;
    }

    setPrevious (prev) {
        if(prev instanceof HistoricalStop || prev === null){
            this.previous = prev;
        }
    }
    getPrevious() {
        return this.previous;
    }
    setNext (next) {
        if(next instanceof HistoricalStop || next === null){
            this.next = next;
        }
    }
    getNext(){
        return this.next;
    }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.current = new HistoricalStop(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const newSite = new HistoricalStop(url);
    this.current.setNext(newSite);
    newSite.setPrevious(this.current);
    this.current = newSite;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.current.getPrevious() && steps > 0){
        this.current= this.current.getPrevious()
        steps--
    }
    return this.current.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(this.current.getNext() && steps > 0){
        this.current= this.current.getNext()
        steps--
    }
    return this.current.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */