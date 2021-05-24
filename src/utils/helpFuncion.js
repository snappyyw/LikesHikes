export function determiningComplexity(complexity) {
    if (complexity === "Medium"){
        return "#ffa500";
    }
    else if(complexity === "Difficult"){
        return "#ff0000";
    }
    return "#008000";
}

export function difficultyTranslation(complexity) {
    if (complexity === "Medium"){
        return "средняя";
    }
    else if(complexity === "Difficult"){
        return "сложная";
    }
    return "легкая";
}