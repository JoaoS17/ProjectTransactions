const transactionUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#text')
//console.log(transactionUl);

const dummyTransactions = [
  { id: 1, name: "Bolo de brigadeiro", amout: -20 },
  { id: 2, name: "Salário", amout: 300 },
  { id: 3, name: "Torta de frango", amout: -10 },
  { id: 4, name: "Violão", amout: 150 },
];

const removeTransaction = ID => {
    dummyTransactions = dummyTransactions.filter(transaction => transaction.id !== ID)
    const removeTransaction = ID => {
        transactions = transactions.filter(transaction => transaction.id !== ID)
        // console.log(transactions);
        upDateLocalStorage()
        init()
        
    }
}

const addTransactionIntoDOM = (transaction) => {
  const operator = transaction.amout < 0 ? "-" : "+";
  const CSSClass = transaction.amout < 0 ? "minus" : "plus";
  const amoutWithoutOperator = Math.abs(transaction.amout);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `
        ${transaction.name} <span> ${operator} R$ ${amoutWithoutOperator}</span><button class="delete-btn">x</button>
  `;
  // transactionUl.append(li);
  transactionUl.prepend(li);

  // console.log(li);
  //console.log(operator);

  {
    // <li class="minus">
    //     Salário <span>-$400</span><button class="delete-btn">x</button>
    // </li>
  }
};

// addTransactionIntoDOM(dummyTransactions[0]);
// addTransactionIntoDOM(dummyTransactions[1]);

const updateBalanceValues = () => {
  const transactionsAmounts = dummyTransactions.map(
    (transaction) => transaction.amout
  );

  const income = transactionsAmounts
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);
  const expense = transactionsAmounts
    .filter((value) => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);
  const total = transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);
  balanceDisplay.textContent = `R$ ${total}`
  incomeDisplay.textContent = `R$ ${income}`
  expenseDisplay.textContent = `R$ ${expense}`
  console.log(income);
};

const init = () => {
    
  dummyTransactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
};

init();
 form.addEventListener('Submit', event =>){
    event.preventDefault()
    if(inputTransctionNAme.values.trim()==''||inputTransctionAmount.value.trim()==''){
        alert('Por gentileza preencha tanto o nome quanto o valor da transação!!!')
        return
    
    }
    const transaction = { 
     id: generateID(), 
     name: transName, 
     amount: NumbertransAmount }
    //console.log(transaction);

    
    dummyTransactions.push(transaction)
 }/
// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// sum

// const randomNumbers = [36, 97, 37, 63]
// const numbersGreaterThan = randomNumbers.filter(item => item > 37)
// numbersGreaterThan
