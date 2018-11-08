# Decoder

`A browser-based game using ES6, React and Redux`

## Description

* User has to guess the colors chosen by the application. 
* Application chooses five distinct colors from *Red*, *Green*, *Blue*, *White*, *Black*, *Yellow*, *Pink*, *Orange*, *Cyan* and *Brown*. 
* User enters her choice of colors

* Program reports the user's result using colors. 
* **Red** means **no match**
* **White** means **a match of color**
* **Black** means **positional match**

## Sample IO
* Assume the program has choosen the colors

* **Red**, **Blue**, **White**, **Brown**, **Pink**

* Here is a sequence of input from the user and the response.

| Input| Response|
|---|---|
|Cyan, Brown, Pink, Green, Yellow|`White, White, Red, Red, Red` |
|Red, Brown, Pink, Blue, White|`Black, White, White, White, White`|
|Red, Blue, Brown, Pink, White|`Black, Black, White, White, White`|
|Red, Blue, White, Brown, Pink|`Black, Black, Black, Black, Black`|


## 3 levels

* **beginner level**, where the generated colors are unique. 
* **intermediate level**, where just one color is replicated 
* **advanced level** where several colors can be replicated.

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

