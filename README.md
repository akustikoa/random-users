# Random Users App 📱

És una aplicació React que mostra usuaris aleatoris de l'API [Random User Generator]<a href="https://random-users-akustikoa.netlify.app/" target="_blank" rel="noopener noreferrer">, amb funcionalitats de cerca, filtrat i gestió de favorits.

## ✨ Funcionalitats

- **👥 Llista d'usuaris**: Mostra 50 usuaris aleatoris amb foto, nom, email i telèfon
- **⚡ Filtres per gènere**: Filtra usuaris per home, dona o tots
- **❤️ Gestió de favorits**: Afegeix/elimina usuaris dels teus favorits
- **💾 Persistència**: Els favorits es guarden al localStorage
- **🔄 Refresh**: Actualitza la llista d'usuaris
- **📱 Disseny responsive**: Adaptat per a mòbils i escriptori

## 🛠️ Tecnologies Utilitzades

- **React 18** - Framework principal
- **CSS3** - Estils i disseny responsive
- **Font Awesome** - Icones
- **Random User API** - Dades d'usuaris
- **LocalStorage** - Persistència de dades

## 🚀 Instal·lació i Execució

### Prerequisits

- Node.js (versió 14 o superior)
- npm o yarn

### Passos d'instal·lació

1. **Clona el repositori**:
   \`\`\`bash
   git clone [url-del-repositori]
   cd random-users-app
   \`\`\`

2. **Instal·la les dependències**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Executa l'aplicació**:
   \`\`\`bash
   npm start
   \`\`\`

4. **Obre el navegador**:
   \`\`\`
   http://localhost:3000
   \`\`\`

## 🎯 Com Utilitzar l'App

1. **Veure usuaris**: Al carregar l'app es mostren 50 usuaris aleatoris
2. **Filtrar per gènere**: Fes clic als botons "Male" o "Female"
3. **Afegir favorits**: Fes clic sobre qualsevol usuari per afegir-lo/treure'l dels favorits
4. **Veure favorits**: Fes clic al botó "Favorites" per obrir el modal
5. **Actualitzar llista**: Fes clic a "Refresh" per obtenir nous usuaris

## 📁 Estructura del Projecte

\`\`\`
src/
├── components/
│ ├── Header.jsx # Barra de navegació amb filtres
│ ├── People.jsx # Llista d'usuaris
│ ├── Person.jsx # Component individual d'usuari
│ ├── FavoritesModal.jsx # Modal de favorits
│ └── Footer.jsx # Peu de pàgina
├── App.jsx # Component principal
└── index.js # Punt d'entrada
\`\`\`

## 🎨 Característiques de Disseny

- **Colors**: Paleta de colors moderna amb variables CSS
- **Animacions**: Transicions suaus en les interaccions
- **Icones**: Font Awesome per a una experiència visual rica
- **Responsive**: Disseny adaptable a diferents mides de pantalla

## 🌐 API Utilizada

- **URL**: \`https://randomuser.me/api/\`
- **Paràmetres**: \`seed\` (per consistència) i \`results=50\`
- **Format**: JSON amb informació d'usuaris reals

## 👨‍💻 Autor

**Xavier Prat**

- LinkedIn: [Xavier Prat](https://www.linkedin.com/in/xavierprat/)
- GitHub: [@akustikoa](https://github.com/akustikoa)
