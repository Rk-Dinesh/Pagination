const data = [
    {
        "id": "1",
        "name": "Lura Senger",
        "email": "Xander_Collier@yahoo.com"
      },
      {
        "id": "2",
        "name": "Wilburn Weber",
        "email": "Bennett_Kreiger11@yahoo.com"
      },
      {
        "id": "3",
        "name": "Tyrique Hahn",
        "email": "Juston.Altenwerth@yahoo.com"
      },
      {
        "id": "4",
        "name": "Lenny Bailey",
        "email": "Guiseppe_Hegmann@yahoo.com"
      },
      {
        "id": "5",
        "name": "Vladimir Keeling",
        "email": "Louisa_Walsh18@hotmail.com"
      },
      {
        "id": "6",
        "name": "Kellie Crona",
        "email": "Chandler_Abernathy@yahoo.com"
      },
      {
        "id": "7",
        "name": "Carolina White",
        "email": "Royal50@hotmail.com"
      },
      {
        "id": "8",
        "name": "Alfredo Conn",
        "email": "Clarabelle34@hotmail.com"
      }
    ];
  
    const itemsPerPage = 1;
    let currentPage = 1;
  
    const dataContainer = document.getElementById('data-container');
    const pagination = document.getElementById('pagination');
  
    function displayData(page) {
      dataContainer.innerHTML = '';
  
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const item = data[i];
        const listItem = document.createElement('div');
        listItem.innerHTML = `<p>ID: ${item.id}</p><p>Name: ${item.name}</p><p>Email: ${item.email}</p>`;
        dataContainer.appendChild(listItem);
      }
    }
  
    function updatePagination() {
      pagination.innerHTML = '';
  
      const totalPages = Math.ceil(data.length / itemsPerPage);
  
      const firstPage = document.createElement('li');
      firstPage.textContent = 'First';
      firstPage.addEventListener('click', () => navigateToPage(1));
      pagination.appendChild(firstPage);
  
      const previousPage = document.createElement('li');
      previousPage.textContent = 'Previous';
      previousPage.addEventListener('click', () => navigateToPage(currentPage - 1));
      pagination.appendChild(previousPage);
  
      const pagesToShow = 4;
      const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  
      for (let i = startPage; i <= endPage; i++) {
        const pageItem = document.createElement('li');
        pageItem.textContent = i;
        if (i === currentPage) {
          pageItem.classList.add('active');
        }
        pageItem.addEventListener('click', () => navigateToPage(i));
        pagination.appendChild(pageItem);
      }
  
      const nextPage = document.createElement('li');
      nextPage.textContent = 'Next';
      nextPage.addEventListener('click', () => navigateToPage(currentPage + 1));
      pagination.appendChild(nextPage);
  
      const lastPage = document.createElement('li');
      lastPage.textContent = 'Last';
      lastPage.addEventListener('click', () => navigateToPage(totalPages));
      pagination.appendChild(lastPage);
    }
  
    function navigateToPage(page) {
      currentPage = Math.max(1, Math.min(page, Math.ceil(data.length / itemsPerPage)));
      displayData(currentPage);
      updatePagination();
    }
  
    navigateToPage(1);