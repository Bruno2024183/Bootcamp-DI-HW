from anagram_checker import AnagramChecker

def main():
    # The main function serves as the entry point of the program.
    # It handles the user interface and interacts with the AnagramChecker class.

    # Instantiate the AnagramChecker class with the path to the word list file.
    # Here, 'sowpods.txt' is the file containing the list of valid words.
    anagram_checker = AnagramChecker('sowpods.txt')

    # Start an infinite loop to continuously show the menu until the user decides to exit.
    while True:
        # Display the menu options to the user.
        print("\nANAGRAM CHECKER")
        print("1. Enter a word")
        print("2. Exit")
        
        # Prompt the user to choose an option.
        choice = input("Choose an option: ")

        # Check if the user selected the option to exit.
        if choice == '2':
            # Print a goodbye message and break the loop to terminate the program.
            print("Goodbye!")
            break

        # If the user chooses to enter a word.
        elif choice == '1':
            # Prompt the user to enter a word and remove any leading or trailing whitespace.
            word = input("Enter a word: ").strip()

            # Validate the input to ensure it meets the criteria:
            # 1. The word must contain only alphabetic characters (no numbers or symbols).
            # 2. The input should be a single word (no spaces).
            if not word.isalpha():
                # If the input contains non-alphabetic characters, show an error message.
                print("Error: Only alphabetic characters are allowed.")
            elif len(word.split()) > 1:
                # If the input contains more than one word, show an error message.
                print("Error: Only a single word is allowed.")
            else:
                # If the input is valid, check if it's a valid English word.
                if anagram_checker.is_valid_word(word):
                    # If the word is valid, find all possible anagrams for the word.
                    anagrams = anagram_checker.get_anagrams(word)
                    
                    # Display the user's word in uppercase and confirm it's valid.
                    print(f"YOUR WORD: \"{word.upper()}\"")
                    print("This is a valid English word.")
                    
                    # Check if any anagrams were found.
                    if anagrams:
                        # If anagrams are found, display them as a comma-separated list.
                        print(f"Anagrams for your word: {', '.join(anagrams)}.")
                    else:
                        # If no anagrams are found, inform the user.
                        print("No anagrams found.")
                else:
                    # If the word is not valid, inform the user.
                    print(f"\"{word}\" is not a valid English word.")

# This block ensures that the main function is called when the script is run directly.
# The __name__ variable will be set to "__main__" when the script is executed.
if __name__ == "__main__":
    main()