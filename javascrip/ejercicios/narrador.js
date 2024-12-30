const d=document,
    w=window,
    c=console.log;
    export default function speachReader(){
        const $speachSelect = d.getElementById("speach-select"),
            $speachTextArea= d.getElementById("speach-text"),
            $speachBtn=d.getElementById("speach-btn"),
            speechMessage = new SpeechSynthesisUtterance();
        // console.log(speachMessage)
        let voices=[]
        // console.log(voices)
        d.addEventListener("DOMContentLoaded",(e)=>{
            w.speechSynthesis.addEventListener("voiceschanged",(e)=>{
                voices=w.speechSynthesis.getVoices();
                c(voices);
                voices.forEach((voice)=>{
                    const $option=d.createElement("option");
                    $option.value=voice.name;
                    $option.textContent=`${voice.name}--${voice.lang}`
                    $speachSelect.appendChild($option);
                })
            })

            d.addEventListener("change",(e)=>{
                c(e.target);
                if (e.target===$speachSelect) {
                    speechMessage.voice=voices.find(voice=>voice.name===e.target.value)
                }
                c(speechMessage);
            })

            d.addEventListener("click",(e)=>{
                if (e.target ===$speachBtn) {
                    speechMessage.text=$speachTextArea.value;
                    w.speechSynthesis.speak(speechMessage);
                }
            })
        })

    }