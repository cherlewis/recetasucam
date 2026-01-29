// navbar.js DEFINITIVO con nombres de archivo corregidos

const menuHTML = `
<nav class="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-900/95 backdrop-blur-md text-white">
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="index.html" class="flex items-center space-x-2 z-50">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span class="self-center text-xl font-bold">Mi Cocina Digital</span>
        </a>
        
        <button onclick="toggleMenu()" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 z-50">
            <span class="sr-only">Abrir menú</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div class="hidden md:block w-full md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center">
                <li>
                    <a href="index.html" class="block py-2 px-3 text-white rounded hover:text-blue-400 md:p-0 transition">Recetas</a>
                </li>
                <li>
                    <a href="plan-semanal.html" class="block py-2 px-3 text-white rounded hover:text-blue-400 md:p-0 transition">Plan Semanal</a>
                </li>
                <li>
                    <a href="lista.html" class="block py-2 px-3 text-white rounded hover:text-blue-400 md:p-0 transition">Lista Compra</a>
                </li>

                <li class="relative group">
                    <button class="flex items-center gap-1 py-2 px-3 text-white rounded hover:text-blue-400 md:p-0 transition focus:outline-none">
                        ⚙️ Admin
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute right-0 w-56 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 border border-slate-200 overflow-hidden">
                        <a href="admin-editor-menus.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100">
                            📝 Editor de Menús
                        </a>
                        <a href="admin-editor-recetas.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100">
                            👨‍🍳 Gestor Recetas
                        </a>
                        <a href="admin.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100">
                            ➕ Añadir Receta
                        </a>
                        <a href="admin-editor-fotos.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                            📸 Gestor Fotos
                        </a>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>

    <div id="menu-movil" class="hidden md:hidden absolute top-16 left-0 w-full bg-slate-800 border-b border-white/10 shadow-xl max-h-[80vh] overflow-y-auto">
        <ul class="flex flex-col p-4 space-y-3 font-medium text-center">
            <li>
                <a href="index.html" class="block py-3 text-white bg-slate-700/50 rounded-lg active:bg-blue-600">🥘 Ver Recetas</a>
            </li>
            <li>
                <a href="plan-semanal.html" class="block py-3 text-white bg-slate-700/50 rounded-lg active:bg-blue-600">📅 Plan Semanal</a>
            </li>
            <li>
                <a href="lista.html" class="block py-3 text-white bg-slate-700/50 rounded-lg active:bg-blue-600">🛒 Lista Compra</a>
            </li>
            
            <li class="border-t border-slate-600 pt-2 pb-1">
                <span class="text-xs text-gray-400 uppercase font-bold">Administración</span>
            </li>

            <li><a href="admin-editor-menus.html" class="block py-2 text-gray-300 hover:text-white">📝 Editar Menús</a></li>
            <li><a href="admin-editor-recetas.html" class="block py-2 text-gray-300 hover:text-white">👨‍🍳 Gestor Recetas</a></li>
            <li><a href="admin.html" class="block py-2 text-gray-300 hover:text-white">➕ Añadir Receta</a></li>
            <li><a href="admin-editor-fotos.html" class="block py-2 text-gray-300 hover:text-white">📸 Gestor Fotos</a></li>
        </ul>
    </div>
</nav>
`;

// 1. Pegamos el HTML en el contenedor específico
const contenedorMenu = document.getElementById('mi-menu-reutilizable');
if (contenedorMenu) {
    contenedorMenu.innerHTML = menuHTML;
} else {
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
}

// 2. Definimos la función que abre y cierra el menú
function toggleMenu() {
    const menu = document.getElementById('menu-movil');
    menu.classList.toggle('hidden');
}