var obj = {
  name: 'Nguyen Vinh',
  greet: function(params) {
    console.log('Hello ' + this.name);
  }
};

obj.greet();
obj.greet.call({ name: 'Vinh Nguyen' }, 'value1', 'value2');
obj.greet.apply({ name: 'Vinh Nguyen' }, ['value1', 'value2']);
