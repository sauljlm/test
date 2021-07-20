const calculateAge = (birth) => {
    let currentDate = new Date();
    birth = new Date(birth);
    let age = currentDate.getFullYear() - birth.getFullYear();

    if (currentDate.getMonth() < birth.getMonth()) {
        age = age - 1;
    } else {
        if ((currentDate.getMonth() == birth.getMonth()) && (currentDate.getUTCDate() < birth.getUTCDate())) {
            age = age - 1;
        }
    }
    return age;
};

const getProvinceName = (province) => {
    const currentProvince = fetch(`https://ubicaciones.paginasweb.cr/provincias.json`)
        .then(response => response.json())
        .then(data => {
            return data[province];
        });

    return currentProvince;
}

const getCantName = (province, cant) => {
    const currentCant = fetch(`https://ubicaciones.paginasweb.cr/provincia/${province}/cantones.json`)
        .then(response => response.json())
        .then(data => {
            return data[cant];
        });

    return currentCant;
}

const getDistrName = (province, cant, distr) => {
    const currentDistr = fetch(`https://ubicaciones.paginasweb.cr/provincia/${province}/canton/${cant}/distritos.json`)
        .then(response => response.json())
        .then(data => {
            return data[distr];
        });
    return currentDistr;
}

const generatePassword = () => {
    let caracteres = "Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$";
    let clave = '';
    let number = null;

    for (let i = 0; i <= 11; i++) {
        number = getNumber(0, caracteres.length);
        clave += caracteres.substring(number, number + 1);
    }
    return clave;
}

const getNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}