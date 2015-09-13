module.exports = function() {

  /**
   *  Validates a boolean.
   *
   *  @param cb The callback function.
   */
  this.main.boolean = function bool(cb) {
    if(this.shouldValidate()) {
      this.required();

      // straight typeof check
      if(typeof(this.value) !== this.rule.type) {
        this.raise(
          this.reasons.type,
          this.messages.types[this.rule.type],
          this.field, this.rule.type);
      }
    }
    cb();
  }

}
