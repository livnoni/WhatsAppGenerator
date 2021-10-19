const DEFAULT_VALUES = {
    name: 'Yehuda Livnoni',
    prefix: '+972',
    number: '0541234567',
    messageTextArea: 'write your message here',
    startWithInputInput: 'Hello'
};

const nameInput = document.getElementById('name_input');
const prefixInput = document.getElementById('prefix_input');
const numberInput = document.getElementById('number_input');
const startWithInputInput = document.getElementById('start_with_input');
const messageTextArea = document.getElementById('message_text_area');
const refLink = document.getElementById('link');

nameInput.value = DEFAULT_VALUES.name;
prefixInput.value = DEFAULT_VALUES.prefix;
numberInput.value = DEFAULT_VALUES.number;
messageTextArea.value = DEFAULT_VALUES.messageTextArea;
startWithInputInput.value = DEFAULT_VALUES.startWithInputInput;

const generate = ()=>{
    if(!prefixInput.value){
        alert(`you must enter phone prefix!`);
        return;
    }
    if(!numberInput.value){
        alert(`you must enter phone number!`);
        return;
    }
    let fullMsg = startWithInputInput.value;
    fullMsg += ' ';
    fullMsg += nameInput.value;
    fullMsg += ',';
    fullMsg += '\n';
    fullMsg += messageTextArea.value;
    const link = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMsg)}&phone=${prefixInput.value}${numberInput.value}`;
    console.log(link);
    refLink.href = link;
    refLink.innerHTML= 'WhatsApp Link'
}