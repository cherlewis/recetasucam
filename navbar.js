// LÓGICA DE CEREBRO (Se ejecuta nada más cargar)
// 1. Comprueba si el usuario ya guardó una preferencia manual
// 2. Si no, comprueba la preferencia del sistema (Móvil/PC)
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// FUNCIÓN PARA CAMBIAR EL MODO (Al pulsar el botón)
function toggleModoOscuro() {
    // Si tiene la clase dark, se la quitamos y guardamos 'light'
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        actualizarIcono(false);
    } else {
        // Si no la tiene, se la ponemos y guardamos 'dark'
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        actualizarIcono(true);
    }
}

// Función auxiliar para cambiar el icono del sol a la luna
function actualizarIcono(esOscuro) {
    const btn = document.getElementById('btn-tema-icon');
    if (btn) {
        if (esOscuro) {
            // Icono de LUNA (Modo noche activo) -> Mostrar SOL para cambiar a día
            btn.innerHTML = `<svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
        } else {
            // Icono de SOL (Modo día activo) -> Mostrar LUNA para cambiar a noche
            btn.innerHTML = `<svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
        }
    }
}

// EL HTML DE LA BARRA (Actualizado con el botón)
const menuHTML = `
<nav class="fixed w-full z-50 top-0 start-0 border-b border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-white transition-colors duration-300">
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="index.html" class="flex items-center space-x-2 z-50">
            <svg class="w-8 h-8 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span class="self-center text-xl font-bold">Mi Cocina</span>
        </a>

        <div class="flex items-center gap-2 md:order-2">
            
            <button onclick="toggleModoOscuro()" id="btn-tema-icon" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition focus:outline-none">
                </button>

            <button onclick="toggleMenu()" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none z-50">
                <span class="sr-only">Abrir menú</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>

        <div class="hidden md:block w-full md:w-auto md:order-1" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center">
                <li><a href="index.html" class="block py-2 px-3 rounded hover:text-blue-600 dark:hover:text-blue-400 transition">Recetas</a></li>
                <li><a href="plan-semanal.html" class="block py-2 px-3 rounded hover:text-blue-600 dark:hover:text-blue-400 transition">Plan Semanal</a></li>
                <li><a href="lista.html" class="block py-2 px-3 rounded hover:text-blue-600 dark:hover:text-blue-400 transition">Lista Compra</a></li>

                <li class="relative group">
                    <button class="flex items-center gap-1 py-2 px-3 rounded hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none">
                        ⚙️ Admin
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute right-0 w-56 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <a href="admin-editor-menus.html" class="block px-4 py-3 text-sm hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 border-b border-gray-100 dark:border-slate-700">📝 Editor Menús</a>
                        <a href="admin-editor-recetas.html" class="block px-4 py-3 text-sm hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 border-b border-gray-100 dark:border-slate-700">👨‍🍳 Gestor Recetas</a>
                        <a href="admin-editor-fotos.html" class="block px-4 py-3 text-sm hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600">📸 Gestor Fotos</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div id="menu-movil" class="hidden md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl max-h-[80vh] overflow-y-auto z-40">
        <ul class="flex flex-col p-4 space-y-3 font-medium text-center text-slate-800 dark:text-white">
            <li><a href="index.html" class="block py-3 bg-slate-50 dark:bg-slate-800 rounded-lg active:bg-blue-600 active:text-white">🥘 Ver Recetas</a></li>
            <li><a href="plan-semanal.html" class="block py-3 bg-slate-50 dark:bg-slate-800 rounded-lg active:bg-blue-600 active:text-white">📅 Plan Semanal</a></li>
            <li><a href="lista.html" class="block py-3 bg-slate-50 dark:bg-slate-800 rounded-lg active:bg-blue-600 active:text-white">🛒 Lista Compra</a></li>
            <li class="border-t border-slate-200 dark:border-slate-700 pt-2 pb-1">
                <span class="text-xs text-gray-400 uppercase font-bold">Administración</span>
            </li>
            <li><a href="admin-editor-menus.html" class="block py-2 text-gray-500 dark:text-gray-400 hover:text-blue-600">📝 Editar Menús</a></li>
            <li><a href="admin-editor-recetas.html" class="block py-2 text-gray-500 dark:text-gray-400 hover:text-blue-600">👨‍🍳 Gestor Recetas</a></li>
        </ul>
    </div>
</nav>
`;

// INYECCIÓN DEL HTML
const contenedorMenu = document.getElementById('mi-menu-reutilizable');
if (contenedorMenu) {
    contenedorMenu.innerHTML = menuHTML;
} else {
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
}

// INICIALIZACIÓN DEL ICONO CORRECTO AL CARGAR
document.addEventListener("DOMContentLoaded", function() {
    const esOscuro = document.documentElement.classList.contains('dark');
    actualizarIcono(esOscuro);
});

// FUNCION TOGGLE MENU MÓVIL
function toggleMenu() {
    const menu = document.getElementById('menu-movil');
    menu.classList.toggle('hidden');
}