def get_words_from_file(filename):
    with open(filename, 'r') as file:
        words = file.read().splitlines()
    return words

import random

def get_random_sentence(length):
    words = get_words_from_file('words.txt')
    random_words = randow.sample(words, lenght)
    sentence = ' '.join(random_words).lower()
    return sentence

def main():
    print("This program generates a random sentence with the number of words you choose.")

    try:
        lengh = int(input("How long should the sentence be (2-20 words)? "))

        if 2 <= length <= 20:
            sentence = get_random_sentence(length)
            print(f"Here is your random sentence: {sentence}")
        else:
            print("Error: Please enter a number between 2 and 20.")
    
    except ValueError:
        print("Error: Please enter a valid integer.")

# Run the main function
if __name__ == "__main__":
    main()