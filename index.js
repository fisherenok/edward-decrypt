const message = document.querySelector('textarea');
const answer = document.querySelector('p');

const onClick = () => answer.innerHTML = `Answer: ${toDecrypt(message.value)}`;

const toDecrypt = message => {
    const arrayMessage = [...message.trim()];
    for (let i = 0; i < arrayMessage.length - 1; i++) {
        if (arrayMessage[i] === arrayMessage[i + 1]) {
            arrayMessage.splice(i, 2);
            i -= 2;
        }
    }
    return arrayMessage.join('')
};




