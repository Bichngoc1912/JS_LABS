const student = {
  name: 'Easy Frontend',

  sayHello() {
    console.log('NAME', this.name);
    console.log('THIS', this);
  }
}

setTimeout(student.sayHello) // => global object
setTimeout.call(student, student.sayHello) // => error

// solution for bind with setTimeout, khong bind truc tiep setTimeout ma tao mot inline function trong setTimeout
setTimeout(() => {
  student.sayHello() // => work 
})

setTimeout(student.sayHello.bind(student)); // trong ham sayHello bind obj student

const student1 = {
  name: 'Easy Frontend',

  normal() {
    console.log('NAME', this.name);
    console.log('THIS', this);
  },

  arrow: () => {
    // @ts-ignore
    console.log('NAME', this.name);
    console.log('THIS', this);
  },

  timeoutNormal() {
    console.log('OUTER THIS', this);

    setTimeout(function() {
      console.log('NAME', this.name); // global object boi vi day la function mac dinh
      console.log('THIS', this);
    });
  },

  timeoutArrow() {
    console.log('OUTER THIS', this);

    setTimeout(() => {
      console.log('NAME', this.name); // => work exspect ly do la dang dung errow function
      console.log('THIS', this);
    })
  }
}