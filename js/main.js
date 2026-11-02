function switch_palette(option) {
    switch (option) {
        case 1:
            document.documentElement.style.setProperty('--most-color', '#F0F2F0');
            document.documentElement.style.setProperty('--color-second', '#646664');
            document.documentElement.style.setProperty('--dark-color', '#121513');
            break;
        case 2:
            document.documentElement.style.setProperty('--most-color', '#E8F1F9');
            document.documentElement.style.setProperty('--color-second', '#6F42A3');
            document.documentElement.style.setProperty('--dark-color', '#171A20');
            break;
        case 3:
            document.documentElement.style.setProperty('--most-color', '#ECE7DF');
            document.documentElement.style.setProperty('--color-second', '#FFE761');
            document.documentElement.style.setProperty('--dark-color', '#121213');
            break;
    }
}