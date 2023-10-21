<template>
</template>
  
<script setup lang="ts" allowJs="true">
await navigateTo("Home");
console.log('Hello world');
// const replace_row_textarea = () => {
//     try {
//         const fnc_textarea = document.getElementById('myTextarea');
//         var heightLimit = 200; /* Maximum height: 200px */ 
//         console.log('up row');
//         fnc_textarea.oninput = function () {
//             fnc_textarea.style.height = ""; /* Reset the height*/
//             fnc_textarea.style.height = Math.min(fnc_textarea.scrollHeight, heightLimit) + "px";
//         };
//     } catch (error) {
//         console.error('at upRowInput', error);
//     }
// }

// const replaceColorCopilot = () => {
//     const checkbox = document.getElementById('myCheckbox');

//     if (checkbox.checked) {
//         document.getElementById('name_checkbox').style.color = 'rgb(32, 128, 141)';
//     } else {
//         document.getElementById('name_checkbox').style.color = '#4b4b4b';
//     }

// }

// const replaceText = () => {
//     let text = document.getElementById('type_ask').textContent;
//     const checkbox = document.getElementById('myCheckbox');

//     if (checkbox.checked) {
//         text = ' Copilot'
//         document.getElementById('type_ask').style.color = 'rgb(32, 128, 141)';
//     } else {
//         text = ' asking';
//         document.getElementById('type_ask').style.color = 'black';
//     }
//     document.getElementById('type_ask').textContent = text;
// }
</script>
  