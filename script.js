function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    if (input.startsWith("pet_") && /^[a-zA-Z0-9_]+$/.test(input.slice(4))){


        result= "Valid Syntax"

    }else{
        result = "Invalid Syntax"
    }// TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}