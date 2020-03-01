const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"]
const semaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

export function numberToMonth(number) {
    return months[number]
}

export function numberToSemaine(number) {
    return semaine[number]
}
