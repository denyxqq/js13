
let history = [];
const bankAccount = {
  login: "Denis",
  password: 21344,
  number: 1234432156788765,
  balance: 1234,
      deposit(money) {
        let newBalance = bankAccount.balance += money;
        history.push(`балансі ${newBalance}`)
        return newBalance;

      },
    
      withdraw(money) {
        let newBalance = bankAccount.balance -= money;
        history.push(`залишилось ${newBalance}`)
        return newBalance;
      },
    history () {
        if(confirm("показати історію") === true){
            return(history);
        }
    }
};
bankAccount.deposit(Number(prompt("скільки хочете покласти грошей")));
alert(`сума на карті ${bankAccount.balance}`)
bankAccount.withdraw(Number(prompt("скільки хочете покласти грошей")));
alert(`сума на карті ${bankAccount.balance}`)
console.log(bankAccount.history());