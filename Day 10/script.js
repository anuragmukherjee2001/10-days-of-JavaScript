document.getElementById('btn0').addEventListener('click', () =>
{
    set_Values('0');
});

document.getElementById('btn1').addEventListener('click', () =>
{
  set_Values('1');
});
document.getElementById('btnSum').addEventListener('click', () =>
{
  set_Operator('+');
});
document.getElementById('btnSub').addEventListener('click', () =>
{
  set_Operator('-');
});
document.getElementById('btnMul').addEventListener('click', () =>
{
  set_Operator('*');
});
document.getElementById('btnDiv').addEventListener('click', () =>
{
  set_Operator('/');
});

let input = [];
let operator = '';


document.getElementById('btnClr').addEventListener('click', () =>
{
  input = [''];
  operator = '';
  display_Result();
});


const display_Result = () => {
    const res = document.getElementById('res');
    let val1 = input[0];
    let val2 = input[1] === undefined ? '' : input[1];
    res.innerText = `${val1}${operator}${val2}`;
};

const set_Operator = op => {
    if (input[1] === undefined) {
         operator = op;
    }      display_Result();
};

const set_Values = num => {
    if (input.length === 0) {
         input[0] = num;
    } else if (input.length === 1 && operator.length === 0) {
         input[0] += num;
    } else if (input.length === 1 && operator.length > 0) {
         input[1] = num;
    } else if (input.length === 2 && operator.length > 0) {
         input[1] += num;
    }      display_Result();
};

document.getElementById('btnEql').addEventListener('click', () => {
        if (input.length === 2 && operator.length > 0) {
            let a = parseInt(input[0], 2);
            let b = parseInt(input[1], 2); 

            switch (operator) {
                case '+':
                     input = [(a + b).toString(2)];
                break;
                case '-':
                     input = [(a - b).toString(2)];
                break;
                case '*':
                     input = [parseInt(a * b, 0).toString(2)];
                break;
                case '/':
                     input = [parseInt(a / b, 0).toString(2)];
                break;
            }           operator = '';
                       display_Result();
        }
  });

 
