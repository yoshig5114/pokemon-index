export function filterByType(list, type){
    if(type) return list.filter((poke) => poke.type == type);
    else return list;
}

export function filterByWeaknesses(list, weaknesses){
    if(weaknesses) return list.filter((poke) => poke.weaknesses == weaknesses);
    else return list;
}

export function getListOf(list, prop){
    return [...new Set(list.map((poke) => poke[prop] || ""))];
}

export function handleSearch(list, searchTerm){
    if(searchTerm) return list.filter((poke) => poke.name == searchTerm);
  else return [list[0]];
}