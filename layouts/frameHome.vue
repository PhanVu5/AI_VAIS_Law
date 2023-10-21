<template>
    <div id="container">
        <div class="box--1">
            <div class="function_head">
                <div class="logo__project">
                    <a href="/" onclick="route()">
                        <font-awesome-icon icon="fa-brands fa-slack" style="color: #46c3aa; font-size: 35px;" />
                        <!-- <p>perplexity</p> -->
                        <img src="@/image/logo/logo_hang.png" alt="">
                    </a>

                </div>
                <div class="search__ask">
                    <input class="search" type="text" placeholder="New Thead...">
                </div>
                <div class="function__app">
                    <div class="function__list">
                        <a class="function__home" href="/" onclick="route()">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Home
                        </a>
                    </div>
                    <div class="function__list">
                        
                            <a class="function__home" onclick="route()">
                                <font-awesome-icon icon="fa-regular fa-compass" /> Discover
                            </a>
                        
                    </div>
                    <div class="function__list">
                        <a class="function__home" href="/Thread" onclick="route()">
                            <font-awesome-icon icon="fa-regular fa-window-restore" /> My Threads
                        </a>
                    </div>
                </div>
            </div>

            <div class="function_footer">
                <div class="border_bt_footer">
                    <div class="introduction">
                        <h5>Try Pro</h5>
                        <p>
                            Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload more files.
                        </p>
                    </div>
                    <div class="function__list_footer">
                        <button class="function__learn">
                            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> Learn More
                        </button>
                    </div>
                    <div class="function__list_footer">
                        <a href="">
                            <div class="function__account">
                                <img src="@/image/logo/connect_face.png" alt="">
                                <p>phanminhvu_t65@devthanh</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="connect">
                    <div class="path_connect">
                        <button class="contact contact__download">
                            <font-awesome-icon icon="fa-solid fa-download" /> Download
                        </button>
                        <button class="contact">
                            <font-awesome-icon icon="fa-brands fa-x-twitter" />
                        </button>
                        <button class="contact">
                            <font-awesome-icon icon="fa-brands fa-github-alt" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="main-page" class="box--2">
        
        </div>
        <Nuxt/>
    </div>
</template>

<script setup lang="ts" allowJs="true">
const transformFeature = () =>{
    
}
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