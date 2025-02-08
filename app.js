const data = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Vue.js",
    "Angular",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "PHP",
    "Go",
    "Swift",
    "Kotlin"
  ];


function displayResults(results) {

    resultsContainer.innerHTML = '';
  

    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>Tidak ditemukan</p>';
    } else {
      
      results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = result;
        resultsContainer.appendChild(resultItem);
      });
    }
  

    resultsContainer.style.display = results.length > 0 || searchBox.value !== '' ? 'block' : 'none';
  }
  
  // Fungsi untuk melakukan pencarian real-time
  function search() {
    const query = searchBox.value.toLowerCase(); // Ambil kata kunci pencarian
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query)
    );
    displayResults(filteredResults); // Tampilkan hasil pencarian
  }
  