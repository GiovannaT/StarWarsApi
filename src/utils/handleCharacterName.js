export async function handleCharacterName(url){
    var characterData = await fetch(url)
    var characterDataJson = await characterData.json();
    console.log('character: ',characterDataJson.name);
    return characterDataJson.name;
}