# Password Generator

A simple password generator which provides a password after prompting the user to choose the following:

1. Password length (between 8 - 128 characters); and
2. Character types from the following categories:
    - Upper case letters
    - Lower case letters
    - Digits (0 - 9)
    - Special characters

![gitPageScreenshot](https://raw.githubusercontent.com/jordanlrothwell/passwordGenerator/main/images/gitPageScreenshot.JPG)

[Try out the generator through GitHub Pages](https://jordanlrothwell.github.io/passwordGenerator/)

## Validation

Alerts the user under the following conditions:

- Password length is shorter than 8 characters
- Password length is longer than 128 characters
- Input for password length is non-numeric
- If no categories are chosen

## Future Improvements

- User input through something other than dialogues
- Ability to determine relative frequency of character types 
- More options for categories (to align with common password requirements)
- Display password strength to user