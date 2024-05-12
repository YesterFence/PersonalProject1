// This is the function that will check if a number is Prime or not
function checkPrime()
{
    //This will clear the output section so if there new inputs, they will calculate the new number.
    document.getElementById("output").innerHTML = "";

    //This variable will collect the user input from the html file
    var number = parseInt(document.getElementById("numberInput").value);

    //This checks if the number is 1 or less. Meaning it can not be a Prime Number. 
    var isPrime = true;
    if (number <= 1)
    {
        {
            isPrime = false;
        }
    }
    // If the number is larger than 1, then it continues here.
    else 
    { 
        for (var i = 2; i <= Math.sqrt(number); i++)
        {
            if (number % i === 0)
            {
                isPrime = false;
                break;
            }
        }
    }

    //Here is the function to display to the html if the number is Prime or not.
    var output = document.getElementById("output");
    if (isPrime)
    {
        output.innerHTML = number + " is a prime number!";
    }

    else
    {
        output.innerHTML = number + " is not a prime number!";
    }
}



// The function to call the word count of a web page.
async function countWords()
{
    //Make a variable to hold the inputed URL
    const url = document.getElementById("urlInput").value;

    try
    {
        // This line requests info from the URL.
        const response = await fetch(url);
        // When confirmation is recieved, we store the info in the variable.
        const html = await response.text();
        // Gets rid of spaces, line breaks, tabs, and other things to help identify each word. 
        const wordCount = html.trim().split(/\s+/).length;
        // Displays the word count
        document.getElementById("wordCount").textContent = "Word count: " + wordCount;
    }

    // If an error occurs, we can see an output for an error
    catch (error)
    {
        console.error('Error:', error);
        document.getElementById("wordCount").textContent = "Error: Invalid Website"
    }
}


// Function to calculate factorial using recursion
function calculateFactorial() 
{
    // Get the input value
    var number = document.getElementById("factorialInput").value;
    // Convert input to a number
    number = parseInt(number);

    // Check to see if Number is a valid or not
    if (isNaN(number)) 
    {
        document.getElementById("factorialOutput").innerHTML = "Please enter a valid number.";
    } 
    
    else 
    {
        // Call the recursive factorial function
        var result = factorial(number);

        // Display the result
        document.getElementById("factorialOutput").innerHTML = "Factorial of " + number + " is: " + result;
    }
}

// Recursive factorial function
function factorial(n) 
{
    // Checks the numbers and returns 1 if the number is 0 or 1.
    if (n === 0 || n === 1) 
    {
        return 1;
    }
    // Returns
    else 
    {
        return n * factorial(n - 1);
    }
}