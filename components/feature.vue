<template>
    <Feature>
        <template #home>
            <div id="replace_type_ask" class="container__home w-full h-full mx-auto  max-w-screen-md px-20  text-center">
                <div class="title">
                    <h1 class="text-4xl">Where knowledge begins</h1>
                </div>
                <div class="relative">
                    <textarea id="myTextarea" class="input_user border-2" name="" cols="30" rows="1"
                        placeholder="Ask anything..." style="min-height: 114px !important;"
                        onclick="replace_row_textarea()"></textarea>
                    <button class="inp_buttom btn_focus">
                        <i class="fa-solid fa-magnifying-glass"></i> Focus
                    </button>
                    <button class="inp_buttom btn_file">
                        <i class="fa-solid fa-circle-plus" style="color: #25395b;"></i> File
                    </button>
                    <button class="btn_checkbox" onchange="replaceColorCopilot(), replaceText()">
                        <label class="switch">
                            <input type="checkbox" id="myCheckbox">
                            <span class="slider round"></span>
                            <div id="name_checkbox" class="name_checkbox">Copilot</div>
                        </label>
                    </button>
                    <button class="inp_buttom btn_arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div class="try_ask_curent">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    Try<span id="type_ask"> asking</span>
                </div>
            </div>
        </template>
        <template #discover>
            <div class="contain_header_dcv">
                <div class="header_discover box_dcv">
                    <i class="fa-regular fa-compass"></i><span> Discover</span>
                </div>
            </div>

            <div class="content_dcv box_dcv">
                <div class="blog_dcv">
                    <a href="">
                        <div class="title_dcv">
                            <h4>1,000-year-old 'alien' corpses displayed in Mexico's Congress</h4>
                        </div>
                        <div class="paragraphs_dcv">
                            <p>Recently, Mexico's Congress was presented with what a journalist claims to be 1,000-year-old
                                mummified
                                alien corpses. The specimens were displayed in the country's congress, sparking accest
                                cjabacjckjkjjd
                                csdcajk</p>
                        </div>
                    </a>
                    <div class=" label_dcv">
                        <div class="review_blog see">
                            <i class="fa-regular fa-eye"></i>
                            <span>80</span>
                        </div>
                        <div class="review_blog share">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>80</span>
                        </div>
                    </div>
                </div>
                <div class="blog_dcv">
                    <a href="">
                        <div class="title_dcv">
                            <h4>1,000-year-old 'alien' corpses displayed in Mexico's Congress</h4>
                        </div>
                        <div class="paragraphs_dcv">
                            <p>Recently, Mexico's Congress was presented with what a journalist claims to be 1,000-year-old
                                mummified
                                alien corpses. The specimens were displayed in the country's congress, sparking accest
                                cjabacjckjkjjd
                                csdcajk</p>
                        </div>
                    </a>
                    <div class=" label_dcv">
                        <div class="review_blog see">
                            <i class="fa-regular fa-eye"></i>
                            <span>80</span>
                        </div>
                        <div class="review_blog share">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>80</span>
                        </div>
                    </div>
                </div>
                <div class="blog_dcv">
                    <a href="">
                        <div class="title_dcv">
                            <h4>1,000-year-old 'alien' corpses displayed in Mexico's Congress</h4>
                        </div>
                        <div class="paragraphs_dcv">
                            <p>Recently, Mexico's Congress was presented with what a journalist claims to be 1,000-year-old
                                mummified
                                alien corpses. The specimens were displayed in the country's congress, sparking accest
                                cjabacjckjkjjd
                                csdcajk</p>
                        </div>
                    </a>
                    <div class=" label_dcv">
                        <div class="review_blog see">
                            <i class="fa-regular fa-eye"></i>
                            <span>80</span>
                        </div>
                        <div class="review_blog share">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>80</span>
                        </div>
                    </div>
                </div>
                <div class="blog_dcv">
                    <a href="">
                        <div class="title_dcv">
                            <h4>1,000-year-old 'alien' corpses displayed in Mexico's Congress</h4>
                        </div>
                        <div class="paragraphs_dcv">
                            <p>Recently, Mexico's Congress was presented with what a journalist claims to be 1,000-year-old
                                mummified
                                alien corpses. The specimens were displayed in the country's congress, sparking accest
                                cjabacjckjkjjd
                                csdcajk</p>
                        </div>
                    </a>
                    <div class=" label_dcv">
                        <div class="review_blog see">
                            <i class="fa-regular fa-eye"></i>
                            <span>80</span>
                        </div>
                        <div class="review_blog share">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>80</span>
                        </div>
                    </div>
                </div>
                <div class="blog_dcv">
                    <a href="">
                        <div class="title_dcv">
                            <h4>1,000-year-old 'alien' corpses displayed in Mexico's Congress</h4>
                        </div>
                        <div class="paragraphs_dcv">
                            <p>Recently, Mexico's Congress was presented with what a journalist claims to be 1,000-year-old
                                mummified
                                alien corpses. The specimens were displayed in the country's congress, sparking accest
                                cjabacjckjkjjd
                                csdcajk</p>
                        </div>
                    </a>
                    <div class=" label_dcv">
                        <div class="review_blog see">
                            <i class="fa-regular fa-eye"></i>
                            <span>80</span>
                        </div>
                        <div class="review_blog share">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>80</span>
                        </div>
                    </div>
                </div>
                <div class="blog_dcv">
                    <a href="">
                        <div class="title_dcv">
                            <h4>1,000-year-old 'alien' corpses displayed in Mexico's Congress</h4>
                        </div>
                        <div class="paragraphs_dcv">
                            <p>Recently, Mexico's Congress was presented with what a journalist claims to be 1,000-year-old
                                mummified
                                alien corpses. The specimens were displayed in the country's congress, sparking accest
                                cjabacjckjkjjd
                                csdcajk</p>
                        </div>
                    </a>
                    <div class=" label_dcv">
                        <div class="review_blog see">
                            <i class="fa-regular fa-eye"></i>
                            <span>80</span>
                        </div>
                        <div class="review_blog share">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>80</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #chatAI>
            <div class="container_chatbox w-full h-full">
                <div class="contain_head_cb">
                    <div class="avt_cb">
                        <img src="./img/connect_face.png" alt="">
                        <span> phanminhvu_t65@devthanh</span>
                    </div>
                    <div class="function_centerhead_cb">
                        <div class="function_cb-hover fnc_center_frist">
                            <i class="fa-solid fa-plus"></i>
                            <span>Collection </span>
                        </div>
                        <p> &nbsp;/&nbsp; </p>
                        <div class="function_cb-hover fnc_center_second">
                            <span> Untitled</span>
                        </div>
                    </div>
                    <div class="function_setting_cb">
                        <button class="active_setting setting_frist">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>

                        <button class="active_setting setting_second">
                            <i class="fa-solid fa-briefcase"></i>
                            <span>
                                Share
                            </span>
                        </button>
                    </div>
                </div>
                <!-- ************************************************************************** -->
                <div class="content_cb content_dcv box_dcv">
                    <div class="title_first">
                        <h2>Your message here</h2>
                    </div>

                    <div class="quick_search_cb">
                        <div class="css_title_cb status_quicksearch">
                            <i class="fa-solid fa-bolt"></i>
                            <span> Quick Search</span>
                        </div>
                        <div class="contain_box_cb">
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                            <div class="box_cb">
                                <p>Thị Mầu - Hòa Minzy x Masew | Official Music Video</p>
                                <div class="name_web">
                                    <img src="./img/youtube.png" alt="">
                                    <span>youtube</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bot_answer_cb">
                        <div class="css_title_cb header_answer">
                            <i class="fa-solid fa-bars-staggered"></i>
                            <span> Answer</span>
                        </div>

                        <div class="paragraphs_answer">
                            <p>
                                The Center for a New American Security (CNAS) is a Washington, D.C.-based think tank founded
                                in
                                2007 by Michèle Flournoy and Kurt M. Campbell 1 3. It focuses on national security issues
                                and
                                engages policymakers, experts, and the public with
                                innovative, fact-based research, ideas, and analysis 4. The organization has approximately
                                30
                                employees and a budget under $6 million 3
                                . Some of its top donors include Northrop Grumman Aerospace Systems, Open Society
                                Foundations,
                                Airbus Group, The Boeing Company, Chevron Corporation, Lockheed Martin Corporation, Raytheon
                                Company, the Taipei Economic and Cultural Representative Office, the United States
                                government,
                                BAE Systems, and BP 3
                                .
                            </p>
                        </div>
                        <div class="img_search_answer">
                            <img src="" alt="">
                        </div>
                    </div>

                    <div class="change_copilot_answer">
                        <div class="header_copilot">
                            <div class="copilot_title_first">
                                <i class="fa-solid fa-rotate-right"></i>
                                <span> Copilot</span>
                            </div>
                            <i class="fa-regular fa-flag"></i>
                            <i class="fa-solid fa-layer-group"></i>
                            <i class="fa-regular fa-clipboard"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </div>

                        <div class="box_copilot_answer">
                            <div class="triangle"></div>
                            <div class="box_copilot">
                                <div class="title_copilot_answer">
                                    <i class="fa-brands fa-galactic-republic"></i>
                                    <span>Try Copilot</span>
                                </div>
                                <div class="paragrhaps_boxchange_copilot">
                                    <p>
                                        Copilot is the best way to answer the hardest questions. Search the web more
                                        comprehensively
                                        than ever before.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="change_related_answer">
                        <div class="header_related">

                        </div>

                        <div class="box_related_answer">
                            <div class="css_title_cb title_related_answer">
                                <i class="fa-brands fa-stack-overflow"></i>
                                <span> Related</span>
                            </div>
                            <div class="related_name">
                                <button class="box-related">
                                    <p>What is the meaning of "Thị Mầu"</p>
                                    <span>+</span>
                                </button>
                                <button class="box-related">
                                    <p>What is the meaning of "Thị Mầu"</p>
                                    <span>+</span>
                                </button>
                                <button class="box-related">
                                    <p>What is the meaning of "Thị Mầu"</p>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ************************************************************************** -->
                <div class="checkbox">
                    <div class="fixed_checkbox">
                        <textarea class="chat_askAI" id="myTextarea" onclick="replace_row_textarea()" name="" cols="30"
                            rows="1" placeholder="Ask follow-up..."></textarea>

                        <button class="btn_checkbox location-first" onchange="replaceColorCopilot()">
                            <label class="switch">
                                <input type="checkbox" id="myCheckbox">
                                <span class="slider round"></span>
                                <div id="name_checkbox" class="name_checkbox">Copilot</div>
                            </label>
                        </button>
                        <button class="inp_buttom btn_arrow location-second">
                            <i class="fa-solid fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>

        </template>
    </Feature>
</template>