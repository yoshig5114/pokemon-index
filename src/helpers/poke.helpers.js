export function filterByType(list, type){
    if(type) return list.filter((poke) => poke.type == type);
    else return list;
}

export function filterByWeakness(list, weakness){
    if(weakness) return list.filter((poke) => poke.weakness == weakness);
    else return list;
}

export function getListOf(list, prop){
    return [...new Set(list.map((poke) => poke[prop] || ""))];
}