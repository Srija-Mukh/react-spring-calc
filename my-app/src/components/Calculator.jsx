import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Calculator() {
  const CalculatorFrame = styled(Box)({
    marginTop: '50px',
    height: '500px',
    width: '350px',
    border: '1px solid black',
    display: 'flex',
  });

  const CalculatorScreen = styled(Box)({
    height: '150px',
    width: '80%',
    border: '1px solid black',
    backgroundColor: '#bebebe',
  });

  const ButtonBox = styled(Box)({
    textAlign: 'center',
    width: '80%',
  });

  const CalcButton = styled(Button)({
    margin: '5px',
  });

  //const [result, setResult] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [operator, setOperator] = useState('');
  const [display, setDisplay] = useState('');
  let [result, setResult] = useState('');

  useEffect(() => {
    if (result.length > 0) {
      setDisplay(`${x} ${operator} ${y} = ${result}`);
    } else {
      setDisplay(`${x} ${operator} ${y}`);
    }
  }, [x, y, operator, result]);

  const setNum = (n) => {
    if (operator.length > 0) {
      setY(y + n);
    } else {
      console.log('x is ' + x);
      setX(x + n);
    }
  };

  const calculate = () => {

    if (operator === '+') {
      add(x, y);
    } else if (operator === '-') {
      subtract(x, y);
    } else if (operator === 'x') {
      multiply(x, y);
    } else if (operator === '/') {
      divide(x, y);
    }
  };

   /* Functions that call the relevant API and get results of the operation.
   TODO: Move to a different file.
   */
   const add = async (x, y) => {
    console.log(x, y);
    const response = await fetch(/*`http://localhost:8080/add/${x}/${y}`*/).then(
      (r) => r.json()
    );

    setResult(response.result.toString());
  };

  const subtract = async (x, y) => {
    console.log(x, y);
    const response = await fetch(
      /*`http://localhost:8080/subtract/${x}/${y}`*/
    ).then((r) => r.json());

    setResult(response.result.toString());
  };

  const multiply = async (x, y) => {
    console.log(x, y);
    const response = await fetch(
     /*`http://localhost:8080/multiply/${x}/${y}`*/
    ).then((r) => r.json());

    setResult(response.result.toString());
  };

  const divide = async (x, y) => {
    const response = await fetch(/*`http://localhost:8080/divide/${x}/${y}`*/).then(
      (r) => r.json()
    );

    setResult(response.result.toString());
  };

  return (
    <>
      <div style={{ display: 'flex', alignContent: 'center', height: '100vh' }}>
        <CalculatorFrame style={{ margin: 'auto' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <CalculatorScreen style={{ textAlign: 'center' }}>
              <h1>{display}</h1>
            </CalculatorScreen>
            <ButtonBox>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('1');
                }}
              >
                1
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('2');
                }}
              >
                2
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('3');
                }}
              >
                3
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('4');
                }}
              >
                4
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('5');
                }}
              >
                5
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('6');
                }}
              >
                6
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('7');
                }}
              >
                7
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('8');
                }}
              >
                8
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('9');
                }}
              >
                9
              </CalcButton>
              <CalcButton
                variant='outlined'
                onClick={() => {
                  setNum('0');
                }}
              >
                0
              </CalcButton>
              <CalcButton
                variant='outlined'
                color='secondary'
                onClick={() => {
                  setOperator('+');
                }}
              >
                +
              </CalcButton>
              <CalcButton
                variant='outlined'
                color='secondary'
                onClick={() => {
                  setOperator('-');
                }}
              >
                -
              </CalcButton>
              <CalcButton
                variant='outlined'
                color='secondary'
                onClick={() => {
                  setOperator('x');
                }}
              >
                x
              </CalcButton>
              <CalcButton
                variant='outlined'
                color='secondary'
                onClick={() => {
                  setOperator('/');
                }}
              >
                /
              </CalcButton>
              <CalcButton
                variant='contained'
                color='success'
                onClick={() => {
                  calculate();
                }}
              >
                =
              </CalcButton>
              <CalcButton
                variant='contained'
                color='warning'
                onClick={() => {
                  setX('');
                  setY('');
                  setOperator('');
                }}
              >
                Clear
              </CalcButton>
            </ButtonBox>
          </div>
        </CalculatorFrame>
      </div>
    </>
  );
}

export default Calculator;
