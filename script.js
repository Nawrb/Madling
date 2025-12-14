
<script>
    // Fonction pour ajouter un nouveau titre de chapitre ET une nouvelle grille
    function ajouterChapitre() {
        const num = prompt("Numéro du chapitre (ex: 13) ?", "XX");
        const titre = prompt("Titre du chapitre ?", "Le Réveil");

        if (num && titre) {
            const mainDiv = document.querySelector('.content-box');
            
            // 1. On crée le conteneur du titre
            const newHeader = document.createElement('div');
            newHeader.className = 'chapter-header';
            newHeader.style.marginTop = "60px"; // Espace avant le nouveau chapitre
            newHeader.style.borderTop = "2px dashed #333"; // Séparateur visuel
            newHeader.style.paddingTop = "40px";
            newHeader.innerHTML = `<h2>- Chapter ${num} -</h2><h3>${titre}</h3>`;
            
            // 2. On crée une NOUVELLE grille pour ce chapitre
            const newGrid = document.createElement('div');
            newGrid.className = 'gallery-grid';
            
            // 3. On ajoute le tout à la suite
            mainDiv.appendChild(newHeader);
            mainDiv.appendChild(newGrid);

            // Petit scroll pour voir le résultat
            newHeader.scrollIntoView({behavior: "smooth"});
        }
    }

    // Fonction pour ajouter une page dans la DERNIÈRE grille disponible
    function ajouterPage() {
        const nomPage = prompt("Nom de la page ?", "Page XX");
        // Image par défaut (placeholder)
        const urlImage = "https://via.placeholder.com/200x300/5dcefa/000?text=NEW";

        if (nomPage) {
            // C'EST ICI QUE ÇA CHANGE :
            // On sélectionne TOUTES les grilles, et on prend la dernière
            const allGrids = document.querySelectorAll('.gallery-grid');
            const lastGrid = allGrids[allGrids.length - 1];

            // Création de la page
            const newPageItem = document.createElement('div');
            newPageItem.className = 'page-item';
            
            newPageItem.innerHTML = `
                <div class="img-wrapper">
                    <img src="${urlImage}" alt="${nomPage}">
                </div>
                <span class="page-label">${nomPage}</span>
            `;

            // Ajout à la dernière grille trouvée
            lastGrid.appendChild(newPageItem);
            
            newPageItem.scrollIntoView({behavior: "smooth"});
        }
    }
</script>
