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

const isMobile = ()=>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        return true;
    }else{
        // false for not mobile device
        return false
    }
}

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
    const desktopLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMsg)}&phone=${prefixInput.value}${numberInput.value}`;
    const mobileLink = `whatsapp://send?text=${encodeURIComponent(fullMsg)}&phone=${prefixInput.value}${numberInput.value}`;
    console.log({desktopLink, mobileLink});

    const mobile = isMobile();
    console.log('mobile is: ',mobile)
    refLink.href = mobile ? mobileLink : desktopLink;
    refLink.innerHTML= 'WhatsApp Link'

    //some test:
    window.location.href = mobile ? mobileLink : desktopLink;


}