let voices = [] 
speechSynthesis.onvoiceschanged = ()=>{
    voices = speechSynthesis.getVoices()
    const voicesNames = voices.map(e=> e.name)
    console.assert(voicesNames.length > 0, "Nessuna voce trovata")

    voicesNames.forEach((voice, index)=>{
        const option = document.createElement('option')
        option.value = index
        option.innerHTML = voice
        document.querySelector("select").appendChild(option)
        console.assert(document.querySelector("select", "Select non trovata"))
        
    })
    console.log("Voci caricate")
}

document.querySelector("#parla").onclick = ()=>{
    let messaggio = new SpeechSynthesisUtterance()
    const voceSelezionata = document.querySelector('select').value
    const testo = document.querySelector("textarea").value
    const rate = document.querySelector('#rate').value
    const pitch = document.querySelector('#pitch').value
    console.log({pitch, rate})
    messaggio.voice = voices[voceSelezionata]
    messaggio.text = testo
    messaggio.pitch = pitch
    messaggio.rate = rate
    
    speechSynthesis.speak(messaggio)

}

