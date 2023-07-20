const mes = () =>{
    let ten = prompt('Nhập tên: ')
    document.write('Xin chào: '+ten)
}
//==========================================

const logger = (a,b) => console.log(a+b)

logger(2,3)
//==========================================

const human = {
    name: 'Vũ Quang Huy',
    age: 20,
    sayHi: function(){
        return 'Xin chào: '+ this.name + ', '+this.age + ' tuổi'
    }
}

console.log(human.sayHi())