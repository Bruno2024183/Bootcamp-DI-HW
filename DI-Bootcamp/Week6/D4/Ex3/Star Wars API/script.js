document.getElementById('find-character-btn').addEventListener('click', getCharacter);

async function getCharacter() {
    const characterInfo = document.getElementById('character-info');
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    const characterDetails = document.getElementById('character-details');
    const randomId = Math.floor(Math.random() * 83) + 1; // Random ID between 1-83

    loading.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    characterDetails.classList.add('hidden');

    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        const data = await response.json();

        if (!data.result) {
            throw new Error('Character not found');
        }

        const character = data.result.properties;

        // Fetch Homeworld
        const homeworldResponse = await fetch(character.homeworld);
        const homeworldData = await homeworldResponse.json();

        // Update the DOM with character details
        document.getElementById('character-name').innerText = character.name;
        document.getElementById('character-height').innerText = character.height;
        document.getElementById('character-gender').innerText = character.gender;
        document.getElementById('character-birth-year').innerText = character.birth_year;
        document.getElementById('character-home-world').innerText = homeworldData.result.properties.name;

        characterDetails.classList.remove('hidden');
    } catch (error) {
        errorMessage.classList.remove('hidden');
    } finally {
        loading.classList.add('hidden');
    }
}