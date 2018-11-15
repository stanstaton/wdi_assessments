# Week 10 Conceptual - NAME: __________ `__/16` 

## All questions pertain to the Python language

```python
accounts = {'no123':  100, 'no456': -22, 'no789': 444}

def get_balance(acct):
	return accounts[acct]

```
#### Assuming the Python code above has ran:

##### Q1) What will the value of `bal` be after the following code runs:

```python
bal = accounts['no789']
```
<br>

##### Q2) What will the value of `bal` be after the following code runs:

```python
acct = 'no456'
bal = accounts[acct]
```
<br>

##### Q3) What will the value of `bal` be after the following code runs:

```python
bal = get_balance('no123')
```
<br>

##### Q4) What will the value of `bal` be after the following code runs:
```python
bal = len(accounts)
```
<br>

##### Q5) What is the data-type of the variable named `accounts`?
<br>

```python
flowers = ['rose', 'tulip', 'daisy']
num_flowers = len(flowers)

for f in flowers:
	print(f)
```

#### Assuming the Python code above has ran:

##### Q6) What data type is the variable named `flowers`?

##### Q7) What is the value of `num_flowers`?

##### Q8) What is the resulting output?
<br><br><br>

##### Q9) What will the value of `bouquet` be after the following code runs:

```python
bouquet = flowers[1:]
```
<br>

##### Q10) What will the value of `flower` be after the following code runs:

```python
flower = flowers.pop(1)
```
<br>

##### Q11) What will the value of `result` be after the following code runs:

```python
foods = ['banana', 'cheeseburger', 'taco', 'pizza']
result = [food.upper() for food in foods if food.startswith('c')]
```
<br>

##### Q12) What _keyword_ is used to define functions/methods in Python?

##### Q13) When defining a function/method, the first line always ends with what character?

##### Q14) What _keyword_ is used to define a class in Python?

##### Q15) When defining a class, what is the naming convention?

##### Q16) What is the name of the special method in a class that is automatically called when creating an instance of the class?

