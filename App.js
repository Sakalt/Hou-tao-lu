const container = document.getElementById('dictionary-container');
const searchBox = document.getElementById('search-box');
const pagination = document.getElementById('pagination');
const itemsPerPage = 2;
let currentPage = 1;

function displayDictionary(entries) {
    container.innerHTML = '';
    entries.forEach(entry => {
        const wordCard = document.createElement('div');
        wordCard.classList.add('word-card');

        const word = document.createElement('h2');
        word.textContent = entry.word;
        wordCard.appendChild(word);

        const pronunciation = document.createElement('p');
        pronunciation.textContent = `発音: ${entry.pronunciation} (${entry.bopomofo})`;
        wordCard.appendChild(pronunciation);

        entry.mean.forEach(mean => {
            const type = document.createElement('p');
            type.textContent = mean.type;
            type.classList.add(mean.type);
            wordCard.appendChild(type);

            mean.explanation.forEach(exp => {
                const translate = document.createElement('p');
                translate.textContent = exp.translate;
                wordCard.appendChild(translate);

                exp.example.forEach(ex => {
                    const exampleFrame = document.createElement('div');
                    exampleFrame.classList.add('example-frame');

                    const exampleHT = document.createElement('p');
                    exampleHT.textContent = ex.ht;
                    exampleFrame.appendChild(exampleHT);

                    const exampleJA = document.createElement('p');
                    exampleJA.textContent = ex.ja;
                    exampleFrame.appendChild(exampleJA);

                    const exampleHTPron = document.createElement('p');
                    exampleHTPron.textContent = ex.htPron;
                    exampleFrame.appendChild(exampleHTPron);

                    wordCard.appendChild(exampleFrame);
                });
            });
        });

        container.appendChild(wordCard);
    });
}

function searchDictionary(query) {
    const filteredEntries = dictionary.filter(entry => {
        return entry.word.includes(query) || entry.mean.some(mean => {
            return mean.explanation.some(exp => {
                return exp.translate.includes(query) || exp.example.some(ex => ex.ht.includes(query));
            });
        });
    });
    displayDictionary(filteredEntries);
}

function paginate(items, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    return items.slice(start, end);
}

function renderPagination(totalItems, itemsPerPage, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('span');
        pageItem.classList.add('page-item');
        if (i === currentPage) {
            pageItem.classList.add('active');
        }

        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            const paginatedEntries = paginate(dictionary, currentPage, itemsPerPage);
            displayDictionary(paginatedEntries);
            renderPagination(dictionary.length, itemsPerPage, currentPage);
        });

        pageItem.appendChild(pageLink);
        pagination.appendChild(pageItem);
    }
}

searchBox.addEventListener('input', () => {
    const query = searchBox.value;
    searchDictionary(query);
});

// 初期表示
const paginatedEntries = paginate(dictionary, currentPage, itemsPerPage);
displayDictionary(paginatedEntries);
renderPagination(dictionary.length, itemsPerPage, currentPage);
