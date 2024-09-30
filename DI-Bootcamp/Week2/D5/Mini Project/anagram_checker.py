class AnagramChecker:
    # This is the class definition for AnagramChecker. This class will encapsulate
    # all the logic related to checking whether a word is valid and finding its anagrams.

    def __init__(self, word_list_file):
        # Constructor method that initializes an instance of the AnagramChecker class.
        # It takes a single argument, 'word_list_file', which is the file path to a list of words.
        
        # Open the word list file in read mode. 
        # The 'with' statement ensures that the file is properly closed after reading.
        with open(word_list_file, 'r') as file:
            # Read the file line by line, strip any surrounding whitespace from each word,
            # convert it to lowercase, and store it in a set.
            # Using a set for 'word_list' ensures quick lookup and eliminates duplicate words.
            self.word_list = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):
        # Method to check if the given word is valid.
        # The word is converted to lowercase and checked against the 'word_list' set.
        # Returns True if the word exists in the word list, otherwise False.
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        # Method to check if two words are anagrams of each other.
        # Both words are converted to lowercase, sorted alphabetically, and then compared.
        # If the sorted characters match, the words are anagrams, and the method returns True.
        # Otherwise, it returns False.
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        # Method to find all anagrams of a given word within the word list.
        # It iterates over each word in 'word_list' and checks if it's an anagram of the input word.
        # The word must also be different from the input word (to exclude the word itself).
        # Returns a list of all found anagrams.
        return [w for w in self.word_list if self.is_anagram(word, w) and w != word.lower()]