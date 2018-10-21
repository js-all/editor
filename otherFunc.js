String.prototype.toFirstLetterUpperCase = function() {
    if (this.length > 0) {
        if (this.length == 1) {
            return this.toUpperCase();
        } else {
            let firstLetter = this.substring(0,1);
            let restLetters = this.substring(1, this.length);
            return firstLetter.toUpperCase() + restLetters;
        }
    } else {
        return this;
    }
}
