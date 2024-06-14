import {Component, onMount} from "solid-js";
import style from "./index.css?inline";
import Nav from "./components/nav/Nav";
import InterestCard from "./components/InterestCard";
import InterestPage from "./components/InterestPage";

const App: Component = (props: any) => {

    // const elementStyle = document.createElement('style');
    // elementStyle.innerText = style;
    // document.head.appendChild(elementStyle);
    // document.addEventListener('astro:before-swap',()=>elementStyle.remove());

    const nav = () => [
        {
            icon: '<svg class="nav w-7 h-7" stroke-width="0.8" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf2ff" viewBox="2.55 3.23 18.9 18.22"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="#ddf2ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-5"></path></svg>',
            label: "Home",
            path: "/",
            click: () => {
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.onclick = () => {
                        dispatchEvent(new CustomEvent('navigate', {detail: "/"}));
                    }
                    link.classList.add("hidden");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 300);
                let navClicked = document.querySelector(".transition");
                navClicked && navClicked.classList.add("animated", "bounceOutUp");
            }
        },
        {
            icon: '<svg viewBox="0 0 24 24" class="nav w-7 h-7" stroke-width="0.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-10"></path><path d="M13 7L15 9.5L13 12" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-20"></path><path d="M5 7L3 9.5L5 12" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-30"></path><path d="M10 6L8 13" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-40"></path></svg>',
            label: "Work",
            path: "/software-engineer",
            click: () => {
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.onclick = () => {
                        dispatchEvent(new CustomEvent('navigate', {detail: "/software-engineer"}));
                    }
                    link.classList.add("hidden");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 300);
                let navClicked = document.querySelector(".transition");
                navClicked && navClicked.classList.add("animated", "bounceOutUp");
            }
        }
    ];

    const closeModal = (id: string) => {
        let modal = document.getElementById(id);
        setTimeout(() => document.querySelectorAll(".interest-card").forEach((card) => {
            card.classList.replace("hidden", "flex");
        }), 1000);
        modal && modal.setAttribute("transition-style", "out:wipe:bottom-left");
        setTimeout(() => modal && !modal.classList.contains("hidden") && modal.classList.replace("flex", "hidden"), 1000);
        document.dispatchEvent(new CustomEvent('interestModalClosed'));
    };

    onMount(() => setTimeout(() => document.querySelectorAll("svg.interest").forEach((elem) => !elem.classList.contains("active") && elem.classList.add("active")), 700));

    return (
        <div id="bgInt"
            class="h-full w-full bg-[url('https://nduartech.tiiny.site/dist/interests-light.svg')] dark:bg-[url('https://nduartech.tiiny.site/dist/interests.svg')] bg-cover bg-bottom min-h-screen min-w-screen overflow-y-hidden transition">
            <div
                class="flex h-full max-w-screen z-0">
                <div class="h-full max-h-screen w-full overflow-hidden z-0">
                    <Nav navItems={nav()}></Nav>
                </div>
            </div>
            <div class="h-screen w-screen flex flex-col justify-start items-center pt-16 md:pt-32">
                <div
                    class="max-h-screen h-fit w-9/12 overflow-y-scroll no-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5  place-items-center pb-20">
                    <InterestCard name="family" label="Family"
                                  imgSrc='<svg fill="transparent" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 486.113 486.113" xml:space="preserve" class="family interest stroke-regal-blue-600 dark:stroke-regal-blue-200"><g><g><path  stroke-width="7px" d="M388.361,124.681c3.198,0.81,6.497,1.215,9.798,1.215c16.248,0,31.23-10.254,37.108-25.409c5.945-15.336,1.595-33.211-10.688-44.128c-12.289-10.926-30.608-13.126-45.129-5.38c-14.433,7.701-22.806,23.889-20.773,40.119C360.685,107.137,372.69,120.713,388.361,124.681z" class="svg-elem-1"></path><path  stroke-width="7px" d="M486.04,242.101c0.013,0.421,0.016,0.379-0.02-1.216c-0.015-0.392-0.02-0.483-0.02-0.405c-0.764-20.169-5.106-40.449-13.886-58.682c-4.844-10.062-11.032-19.482-18.558-27.744c-3.597-3.951-7.458-7.665-11.628-11.008c-3.779-3.029-7.798-5.921-12.133-8.107c-4.491-2.266-9.21-4.07-14.21-4.809c-5.179-0.765-10.526-0.564-15.585,0.792c-7.08,1.898-16.697,9.546-18.598,11.234c-4.187,3.72-8.866,7.439-13.054,11.158l-24.382,21.662l-25.625,22.766c-5.43,4.824-10.86,9.647-16.29,14.471c-0.512,0.457-1.026,0.913-1.541,1.37c-4.414,3.948-5.035,10.532-2.045,15.255c-0.854,0.305-1.672,0.751-2.411,1.36c-5.204,4.286-10.704,7.923-17.54,8.843c-6.399,0.861-13.424-0.842-18.206-5.041c-11.452-10.052-26.238-9.257-37.909,0.058c-4.95,3.95-11.76,5.839-18.127,4.983c-6.831-0.92-12.344-4.554-17.541-8.845c-0.042-0.035-0.087-0.063-0.13-0.096c1.117-4.144-0.056-8.805-3.454-11.825c-4.161-3.696-8.322-7.393-12.482-11.089c-9.145-8.124-18.287-16.247-27.432-24.37c-9.117-8.101-18.236-16.202-27.355-24.303c-2.984-2.652-11.476-10.283-12.764-11.41c-9.197-8.028-19.527-12.367-30.957-11.433c-11.012,0.9-20.846,6.759-29.224,13.613c-9.421,7.708-17.474,17.261-23.7,27.709c-5.693,9.554-9.88,19.708-13.125,30.326c-3.465,11.329-4.998,23.207-5.785,34.989c-0.789,11.81-0.045,23.655,1.163,35.407c0.067,0.657,0.135,1.316,0.204,1.975c0.65,6.148,6.211,10.848,12.383,10.433c6.125-0.411,10.98-5.726,10.857-11.86c-0.08-4.129-0.199-8.254-0.115-12.383c0.122-6.117,0.57-12.168,1.195-18.252c1.133-11.035,3.828-22.218,7.963-32.51c0.727-1.807,1.473-3.602,2.293-5.369v34.555L9.043,343.966c-0.492,2.508,0.158,5.076,1.778,7.047c1.623,1.973,4.019,3.104,6.573,3.104h29.206l6.864,31.956c1.521,7.123,8.655,11.842,15.805,10.52l-2.303-43.017h4.87l4.153,73.249c0.384,7.113,6.439,12.898,13.57,12.908c7.195,0.01,13.289-5.84,13.588-13.025l3.289-72.591h28.022c2.555,0,4.95-1.131,6.573-3.104c1.62-1.971,2.271-4.539,1.778-7.047l-28.334-100.066v-46.413l54.1,38.98c1.594,1.14,3.404,1.816,5.258,2.06c0.319,1.212,0.916,2.361,1.796,3.331c5.23,5.762,10.956,10.666,18.054,13.992c6.385,2.992,13.573,4.244,20.593,3.856v22.718l-19.878,78.116c-0.317,1.626,0.103,3.292,1.153,4.569c1.053,1.279,2.607,2.013,4.263,2.013h16.082l2.879,63.462c0.24,4.973,4.479,9.02,9.462,9c4.925-0.021,9.097-3.998,9.364-8.91l3.485-63.552h0.77l2.878,63.462c0.243,4.973,4.48,9.02,9.464,9c4.925-0.021,9.097-3.998,9.363-8.91l3.484-63.552h15.902c1.651,0,3.203-0.731,4.256-2.006s1.477-2.937,1.155-4.591l-19.861-77.273v-23.547c6.904,0.387,13.983-0.816,20.288-3.706c7.236-3.313,13.068-8.293,18.378-14.141c1.9-2.09,2.525-4.991,1.784-7.622c2.207-0.106,4.411-0.821,6.338-2.209l54.847-39.519v78.662c0,3.957-0.042,7.9,0.122,11.854c0.266,6.324,0.531,12.646,0.796,18.971l1.306,31.125c0.497,11.852,0.994,23.701,1.493,35.551c0.449,10.749,0.899,21.498,1.352,32.248c0.297,7.07,0.593,14.141,0.89,21.211c0.061,1.406,0.116,2.812,0.178,4.221c0.328,7.287,6.528,13.23,13.829,13.205c7.224-0.025,13.339-5.875,13.703-13.086l5.683-111.963c1.794,0,3.575-0.1,5.355-0.326l-3.964,78.486c7.388,1.484,14.618-3.232,16.204-10.621l3.109-14.488c2.298-10.684,4.592-21.365,6.888-32.049l6.976-32.476c1.129-5.259,2.26-10.517,3.389-15.774c0.32-1.492,0.868-2.937,1.178-4.441c0.534-2.613,0.806-5.281,0.806-7.949v-69.933c3.854,8.308,6.667,17.186,8.41,26.17c1.095,5.635,1.92,11.27,2.479,16.982c0.536,5.434,0.66,10.885,0.771,16.34c0.065,3.336-0.103,6.682-0.17,10.018c-0.107,6.244,4.881,11.607,11.106,11.984c6.233,0.377,11.816-4.373,12.457-10.582c0.504-4.904,1-9.797,1.298-14.719C486.161,254.781,486.164,248.453,486.04,242.101z M241.98,276.095l-0.573,0.359l-0.755-0.468c-0.081-0.05-0.161-0.099-0.24-0.149c-1.43-0.9-2.783-1.929-4.097-2.99c-1.795-1.449-3.514-2.996-5.133-4.64c-1.73-1.758-3.356-3.634-4.749-5.674c-1.272-1.862-2.383-3.897-2.952-6.093c-0.504-1.946-0.521-4.021,0.266-5.896c0.418-0.998,1.038-1.898,1.78-2.682c0.933-0.984,2.062-1.846,3.265-2.471c1.452-0.756,3.083-1.08,4.712-0.959c1.421,0.105,2.806,0.524,4.093,1.125c1.002,0.465,1.954,1.041,2.841,1.701c0.063,0.047,0.962,0.797,0.98,0.778c0.392-0.362,0.821-0.687,1.257-0.996c0.953-0.676,1.978-1.259,3.055-1.711c1.334-0.56,2.768-0.915,4.219-0.923c1.683-0.01,3.322,0.475,4.745,1.37C269.406,255.03,247.525,272.802,241.98,276.095z" class="svg-elem-2"></path><path  stroke-width="7px" d="M75.372,131.782c18.267,0,34.562-13.127,38.382-31.004c1.91-8.932,0.622-18.431-3.635-26.514c-4.1-7.778-10.82-14.065-18.86-17.628c-8.36-3.706-17.96-4.352-26.751-1.825c-8.479,2.438-15.996,7.788-21.113,14.97c-10.702,15.016-9.271,36.108,3.318,49.563C54.092,127.231,64.572,131.782,75.372,131.782z" class="svg-elem-3"></path><path  stroke-width="7px" d="M231.728,224.998c3.08,1.169,6.367,1.765,9.661,1.765c9.036,0,17.642-4.617,22.654-12.134c5.083-7.623,5.959-17.579,2.285-25.975c-3.58-8.183-11.173-14.233-19.959-15.858c-8.98-1.661-18.379,1.375-24.683,7.984c-6.307,6.619-8.889,16.188-6.772,25.086C216.976,214.548,223.389,221.829,231.728,224.998z" class="svg-elem-4"></path></g></g></svg>'></InterestCard>
                    <InterestCard name="basketball" label="Basketball"
                                  imgSrc='<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="transparent" class="basketball interest stroke-regal-blue-600 dark:stroke-regal-blue-200"><g><path  d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z" class="svg-elem-1"></path><g><path  d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z" class="svg-elem-2"></path><path  d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z" class="svg-elem-3"></path><path  d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z" class="svg-elem-4"></path><path  d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z" class="svg-elem-5"></path><path  d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z" class="svg-elem-6"></path><path  d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z" class="svg-elem-7"></path><path  d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z" class="svg-elem-8"></path><path  d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z" class="svg-elem-9"></path></g><path opacity="0.2"  d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z" class="svg-elem-10"></path><path opacity="0.2"  d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z" class="svg-elem-11"></path><g opacity="0.2"><path  d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z" class="svg-elem-12"></path><path  d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z" class="svg-elem-13"></path></g></g></svg>'></InterestCard>
                    <InterestCard name="ballroom" label="Ballroom"
                                  imgSrc='<svg width="100%" height="100%" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ballroom interest stroke-regal-blue-600 dark:stroke-regal-blue-200 iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="transparent"> <g > <path d="M4.7 13.5C2.1 13.3 2 18.6 2 21.2c.1 4.8 12.1 14.5 13.9 14.3c1.3-.1 2.8-1.8 4.7-1.5c0 0-11-20.2-15.9-20.5" class="svg-elem-1"> </path> <path d="M22.7 33c-2.7 2.7-.7 13.3 1.7 16.3C30 56.2 46 62 54.1 62c3.9 0 7.4-1.9 7.8-5.2c.6-4.6-3.2-12.8-8.2-15.6c-7.4-4.1-25.2-14.3-31-8.2" class="svg-elem-2"> </path> </g> <path d="M7.4 2.6C4.2 5.4 2.8 14.8 3.9 18.8c1.2 4.3 10.7 9 13.2 12.6c2.7 3.8 4.7 13.6 8.3 16.5C31.9 53.4 50 60.6 58 57.7C69.3 53.5 41.8 21.9 31.2 15C25 11 11.4-.9 7.4 2.6"  class="svg-elem-3"> </path> <g > <path d="M25.9 45.8c2.8 1.9 5.8 3.5 8.9 4.9c3.1 1.4 6.3 2.6 9.5 3.5c1.6.5 3.3.9 4.9 1.1c1.6.3 3.3.4 4.9.2c1.6-.2 3.1-.8 3.4-2.1c.4-1.3 0-2.9-.6-4.4c-.2-.5 0-1 .5-1.2c.5-.2 1 0 1.2.5c.3.8.6 1.7.7 2.6c.1.9.1 1.9-.3 2.9s-1.2 1.8-2.1 2.2c-.9.4-1.8.6-2.7.7c-1.8.1-3.5-.1-5.2-.4c-1.7-.3-3.4-.8-5-1.4c-3.3-1.1-6.4-2.4-9.5-4c-2.9-1.4-5.9-3.1-8.6-5.1" class="svg-elem-4"> </path> <path d="M15 29.2C22.7 40.7 26.9 42 32.6 44c1.7.6 5.7 1.1 7.2 0c1.6-1.2 1.8-7.8 1.8-7.8s7.8 4.4 9.8 2.9c2.1-1.6-9-14.2-9-14.2s3 4.3 1.8 4.7C38 31.7 33.3 17.8 31 14.9c-.7-.9-2-2.2-3.1-2.2c-1.6-.1-7 .9-6.9 2.5c.1 1.3 3.1-.6 4.2.2c2.9 2.2 7.7 10.3 7.4 13.9c-.2 2.4-4.8 9-7.2 9.4C24 39 15 29.2 15 29.2" class="svg-elem-5"> </path> </g> <path d="M8.2 2.8C6.1 4.1 7 10.3 8 12.6c.8 1.7 3.9 4.5 5.7 5c2.6.7 10.5-3.6 10.5-3.6s5.2 1.4 4.2.5C25.3 11.4 11 1.1 8.2 2.8"  class="svg-elem-6"> </path> <g > <path d="M58.6 39.4h-.2c-.2 0-5.3-1-8.3-4.6c-2.1-2.5-3.3-5.4-4.4-8.2c-1.6-3.9-3.1-7.7-7.2-9.9c-1.9-1.1-4.1-.4-4.1-.4c-.5.2-1.1-.1-1.3-.6c-.2-.5.1-1.1.6-1.3c.1 0 3-1 5.7.5c4.7 2.6 6.4 6.8 8.1 10.9c1.1 2.6 2.2 5.4 4.1 7.7c2.5 3 7.1 3.9 7.1 3.9c.5.1.9.6.8 1.2c0 .5-.4.8-.9.8" class="svg-elem-7"> </path> <path d="M29.5 30.2c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.1-.5.3-.8.3" class="svg-elem-8"> </path> <path d="M27.3 26.9c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.1-.5.3-.8.3" class="svg-elem-9"> </path> <path d="M25 23.5c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3" class="svg-elem-10"> </path> <path d="M22.9 20.9c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3" class="svg-elem-11"> </path> <path d="M20.7 18c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3" class="svg-elem-12"> </path> <path d="M15.8 56.2c-3.7 0-7.4-1.2-7.6-1.3c-.5-.2-.8-.7-.6-1.3s.7-.8 1.3-.6c2.2.7 8.7 2.2 11.2.1c2.9-2.4 2-6.1.1-12c-1.8-5.7-3.7-12.1-1.2-18.7c.6-1.5 2.3-7.1 2.3-7.2c.2-.5.7-.8 1.2-.7c.5.2.8.7.7 1.2c-.1.2-1.7 5.7-2.3 7.3c-2.3 6-.4 12 1.3 17.4c1.7 5.6 3.4 10.9-.8 14.2c-1.5 1.3-3.5 1.6-5.6 1.6" class="svg-elem-13"> </path> </g></svg>'></InterestCard>
                    <InterestCard name="reading" label="Reading"
                                  imgSrc='<svg class="w-full h-full reading interest stroke-regal-blue-600 dark:stroke-regal-blue-200" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 501.333 501.333" xml:space="preserve" fill="transparent"><ellipse style="stroke-width: 10px; " cx="250.667" cy="101.333" rx="98.133" ry="101.333" class="svg-elem-1"></ellipse><polygon style="stroke-width: 10px; " points="250.667,501.333 12.8,454.4 12.8,181.333 250.667,228.267 " class="svg-elem-2"></polygon><polygon style="stroke-width: 10px; " points="250.667,501.333 488.533,454.4 488.533,181.333 250.667,228.267 " class="svg-elem-3"></polygon><g><path style="stroke-width: 10px; " d="M90.667,301.867c-1.067-5.333-6.4-8.533-11.733-7.467L3.2,311.467l4.267,19.2L83.2,313.6C88.533,312.533,91.733,307.2,90.667,301.867z" class="svg-elem-4"></path><path style="stroke-width: 10px; " d="M94.933,318.933L9.6,338.133l4.267,19.2l85.333-19.2c5.333-1.067,8.533-6.4,7.467-11.733C104.533,321.067,100.267,317.867,94.933,318.933z" class="svg-elem-5"></path><path style="stroke-width: 10px; " d="M94.933,347.733l-80,18.133l4.267,19.2l80-18.133c5.333-1.067,8.533-6.4,7.467-11.733C105.6,349.867,100.267,346.667,94.933,347.733z" class="svg-elem-6"></path><path style="stroke-width: 10px; " d="M88.533,377.6l-68.267,16l4.267,19.2l68.267-16c5.333-1.067,8.533-6.4,7.467-11.733C99.2,379.733,93.867,375.467,88.533,377.6z" class="svg-elem-7"></path><polygon style="stroke-width: 10px; " points="0,417.067 48,406.4 26.667,307.2 0,312.533 " class="svg-elem-8"></polygon><path style="stroke-width: 10px; " d="M410.667,301.867c1.067-5.333,6.4-8.533,11.733-7.467l75.733,17.067l-4.267,19.2L418.133,313.6C412.8,312.533,409.6,307.2,410.667,301.867z" class="svg-elem-9"></path><path style="stroke-width: 10px; " d="M406.4,318.933l85.333,19.2l-4.267,19.2l-85.333-19.2c-5.333-1.067-8.533-6.4-7.467-11.733C396.8,321.067,401.067,317.867,406.4,318.933z" class="svg-elem-10"></path><path style="stroke-width: 10px; " d="M406.4,347.733l80,18.133l-4.267,19.2l-80-18.133c-5.333-1.067-8.533-6.4-7.467-11.733C395.733,349.867,401.067,346.667,406.4,347.733z" class="svg-elem-11"></path><path style="stroke-width: 10px; " d="M412.8,377.6l68.267,16l-4.267,19.2l-68.267-16c-5.333-1.067-8.533-6.4-7.467-11.733C402.133,379.733,407.467,375.467,412.8,377.6z" class="svg-elem-12"></path><polygon style="stroke-width: 10px; " points="501.333,417.067 453.333,406.4 474.667,307.2 501.333,312.533 " class="svg-elem-13"></polygon></g></svg>'></InterestCard>
                    <InterestCard name="camping" label="Camping"
                                  imgSrc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1028 800"  fill="transparent" class="w-full h-full camping interest stroke-regal-blue-600 dark:stroke-regal-blue-200"> <g id="SVGRepo_bgCarrier" stroke-width="0" transform="matrix(1, 0, 0, 1, 1.1368683772161603e-13, 0)"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"  stroke-width="3.072" transform="matrix(1, 0, 0, 1, 1.1368683772161603e-13, 0)"></g> <g id="SVGRepo_iconCarrier" style="" transform="matrix(1.9787729978561401, 0, 0, 2.3363490104675293, 15.840682983398551, -111.55290222167969)"> <path  stroke-width="8" d="M168.465 391.022h314.59c3.747 0 5.954-4.206 3.825-7.29L329.585 130.298c-1.848-2.676-5.803-2.676-7.651 0L164.639 383.733c-2.128 3.083.079 7.289 3.826 7.289z" class="svg-elem-1"></path> <path  stroke-width="8" d="M202.068 323.393l4.403.034h243.105l-9.301-14.786h-229.25l-8.957 14.752z" class="svg-elem-2"></path> <path  stroke-width="8" d="M191.954 339.723l-9.177 14.786h285.965l-9.177-14.786z" class="svg-elem-3"></path> <path  stroke-width="8" d="M325.76 163.418l-81.528 227.604h81.528z" class="svg-elem-4"></path> <path  stroke-width="8" d="M 167.007 390.233 C 165.69553847840976 390.2347418274505 164.44477997984825 389.68058498016006 163.565 388.708 L 145.373 368.624 C 142.97391720279276 365.9755018457841 144.34157380806252 361.7231071883559 147.83478189009332 360.9696896173002 C 149.45598537672683 360.6200273113615 151.14058179709272 361.16182776686844 152.254 362.391 L 170.446 382.475 C 172.8446981688816 385.1236844781843 171.47659946988568 389.3757792163681 167.98342234072774 390.12877052753856 C 167.66254707786376 390.1979385874372 167.33524554794215 390.2328771817556 167.007 390.233 Z" class="svg-elem-5"></path> <path  stroke-width="8" d="M 416.88 388.707 L 435.072 368.623 C 437.47108279006017 365.97450183931005 436.1034261716262 361.7221071874371 432.6102180875623 360.9686896258079 C 430.989014608735 360.61902732613123 429.3044182002151 361.16082777650695 428.19100000000003 362.39 L 409.999 382.474 C 407.59991720993986 385.12249816068993 408.9675738283738 389.3748928125629 412.4607819124377 390.1283103741921 C 414.08198539126505 390.47797267386875 415.76658179978494 389.93617222349303 416.88 388.707 Z" class="svg-elem-6"></path> <path  stroke-width="8" d="M 487.955 388.707 L 506.147 368.623 C 508.546082775766 365.97450182636203 507.1784261369194 361.72210717906864 503.68521804878924 360.96868963629254 C 502.0640145855743 360.61902734913997 500.3794181948305 361.160827795784 499.26599999999996 362.39 L 481.07399999999996 382.474 C 478.6749172099398 385.12249816068993 480.04257382837375 389.3748928125629 483.53578191243764 390.1283103741921 C 485.156985391265 390.47797267386875 486.8415817997849 389.93617222349303 487.9549999999999 388.707 L 487.955 388.707 Z" class="svg-elem-7"></path> <path  stroke-width="8" d="M502.091 373.401h-10.192a1.85 1.85 0 0 1 0-3.698h6.601L325.76 127.936L153.02 369.704h7.689a1.848 1.848 0 0 1 0 3.698h-11.282a1.847 1.847 0 0 1-1.504-2.923l176.332-246.795c.693-.971 2.314-.971 3.008 0l176.332 246.795a1.85 1.85 0 0 1 .14 1.92a1.851 1.851 0 0 1-1.644 1.002z" class="svg-elem-8"></path> <path  stroke-width="8" d="M244.232 391.022l67.132-187.414s-55.829 116.389-104.42 152.532c-.001-.001 13.877 34.882 37.288 34.882z" class="svg-elem-9"></path> <path  stroke-width="8" d="M431.632 373.401h-13.004a1.85 1.85 0 0 1 0-3.698h10.2L324.061 125.486a1.848 1.848 0 1 1 3.397-1.457l105.873 246.795a1.848 1.848 0 0 1-1.699 2.577z" class="svg-elem-10"></path> <path  stroke-width="8" d="M66.544 385.448v-88.937c0-7.432 6.026-13.465 13.462-13.465s13.462 6.033 13.462 13.465v88.937c0 7.432-26.924 7.432-26.924 0z" class="svg-elem-11"></path> <path  stroke-width="8" d="M153.405 350.217c.645-.774 1.043-1.521 1.221-2.243c1.22-3.166.919-7.112-1.688-9.973c-12.92-14.182-26.929-35.896-39.542-57.818c7.133 2.404 14.385 3.848 20.978 4.686c5.99.761 9.498-7.81 5.093-12.645c-11.27-12.37-23.536-31.638-34.411-50.762c6.037 2.165 12.235 3.425 17.831 4.137c4.733.602 7.504-6.171 4.024-9.991c-14.949-16.409-32.118-48.173-42.569-68.975c-.419-1.343-1.237-2.356-2.226-2.992l-.045-.028a4.876 4.876 0 0 0-.926-.458a4.238 4.238 0 0 0-1.063-.242a4.257 4.257 0 0 0-.844 0a4.238 4.238 0 0 0-1.063.242a4.648 4.648 0 0 0-.926.458l-.045.028c-.99.636-1.807 1.648-2.226 2.992c-10.452 20.802-27.62 52.566-42.569 68.975c-3.48 3.82-.709 10.592 4.024 9.991c5.597-.711 11.795-1.971 17.831-4.137c-10.875 19.124-23.141 38.392-34.411 50.762c-4.405 4.835-.897 13.407 5.093 12.645c6.593-.838 13.844-2.281 20.978-4.686c-12.613 21.922-26.622 43.636-39.542 57.818c-4.044 4.44-2.544 11.491 1.594 14.182c17.751 18.496 40.411 19.935 72.029 19.935c32.498 0 58.336-5.34 72.388-20.759a8.37 8.37 0 0 0 1.012-1.142z" class="svg-elem-12"></path> </g></svg>'></InterestCard>
                    <InterestCard name="cooking" label="Cooking"
                                  imgSrc='<svg fill="transparent" class="cooking interest stroke-regal-blue-600 dark:stroke-regal-blue-200 w-full h-full" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-46.04 -46.04 552.49 552.49" xml:space="preserve"  stroke-width="8px" width="552.489990234375" height="552.489990234375"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_105_"> <path id="XMLID_109_" d="M178.119,164.886c14.811,1.093,14.468,1.068,39.286,2.899l43.727-13.856l38.776,51.818h-27.198 c-0.155,5.164-1.393,10.1-3.65,14.662h28.156c4.328,11.392,15.34,19.49,28.25,19.49h57.548c16.688,0,30.216-13.528,30.216-30.216 c0-2.17-1.759-3.929-3.929-3.929l-89.75-0.007l-43.894-58.657c5.116-5.024,7.303-12.663,4.989-19.965 c-3.279-10.35-14.327-16.083-24.677-12.801l-3.905,1.238l-5.117-6.838c-2.604-3.477-7.53-4.184-11.008-1.584 c-3.476,2.603-4.186,7.53-1.584,11.007l1.831,2.447l-31.651,10.03l-39.613-22.196c-4.604-8.763-13.788-14.742-24.374-14.742h-49.08 c-15.2,0-27.522,12.322-27.522,27.522v64.004l0,0h46.611c0-16.344,0-17.28,0-28.192l-2.425-8.363l33.758,59.949 c3.156,5.602,8.965,9.463,15.683,9.959l78.326,5.78c10.87,0.799,20.258-7.404,21.051-18.158 c0.778-10.538-7.101-20.235-18.158-21.051l-67.814-5.004l-30.571-54.288C170.703,157.207,167.865,154.27,178.119,164.886z" class="svg-elem-1"></path> <path id="XMLID_987_" d="M372.231,136.142c-0.182,1.238,0.279,2.479,1.128,3.038c0.849,0.56,1.879,0.302,2.524-0.631 c4.864-7.037,9.861-17.065,7.333-26.189c-3.824-13.802-7.603-19.918-5.87-30.334c0.113-0.68-0.14-1.37-0.612-1.669 c-0.472-0.299-1.041-0.13-1.374,0.41c-3.223,5.229-7.374,14.495-6.205,26.311C370.485,120.526,373.509,127.447,372.231,136.142z" class="svg-elem-2"></path> <path id="XMLID_988_" d="M343.902,186.949c-0.182,1.238,0.279,2.479,1.128,3.039s1.88,0.301,2.524-0.631 c4.865-7.037,9.861-17.065,7.333-26.189c-3.824-13.802-7.603-19.919-5.87-30.335c0.113-0.68-0.14-1.37-0.612-1.669 c-0.472-0.299-1.041-0.13-1.374,0.41c-3.223,5.229-7.374,14.495-6.205,26.311C342.155,171.333,345.179,178.254,343.902,186.949z" class="svg-elem-3"></path> <path id="XMLID_991_" d="M424.768,256.165H284.725c-8.685,0-15.727,7.042-15.727,15.727s7.042,15.727,15.726,15.727v164.653 c0,3.323,2.694,6.017,6.017,6.017h128.009c3.323,0,6.017-2.694,6.017-6.017V287.619c8.685,0,15.727-7.042,15.727-15.727 S433.453,256.165,424.768,256.165z" class="svg-elem-4"></path> <path id="XMLID_992_" d="M188.553,314.784H138.3l5.285,14.41L121.83,431.925c-2.699,12.745,5.445,25.265,18.191,27.965 c12.746,2.699,25.265-5.447,27.965-18.191l23.162-109.37C192.742,324.8,190.41,319.849,188.553,314.784z" class="svg-elem-5"></path> <path id="XMLID_993_" d="M63.945,232.869c0,36.841,0.587,15.227-2.941,99.56l-39.306,95.396 c-4.963,12.046,0.78,25.834,12.824,30.798c12.051,4.963,25.835-0.783,30.798-12.824l40.889-99.242 c1.047-2.544,1.643-5.252,1.758-8.001c3.102-74.138,2.588-51.871,2.588-105.687H63.945L63.945,232.869z" class="svg-elem-6"></path> <circle id="XMLID_994_" cx="116.221" cy="40.741" r="40.741" class="svg-elem-7"></circle> <path id="XMLID_995_" d="M181.106,236.067l-24.692-1.822c-16.86-1.245-27.491-13.897-29.629-21.263l-4.023-13.873H63.945v19.858 h60.512v74.965c0,3.839,3.112,6.95,6.951,6.95h61.354c2.228,0,4.321-1.068,5.628-2.872s1.67-4.126,0.976-6.243L181.106,236.067z" class="svg-elem-8"></path> </g> </g></svg>'></InterestCard>
                </div>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-purple-700 dark:bg-purple-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="family"
                transition-style="in:wipe:bottom-right">
                <InterestPage title="Family"
                              content="As the proud father to a beautiful baby girl and the best dog, a grateful husband to the most incredible woman in the world, and eldest son of supportive and caring parents, I am honored to be part of my family. Everyone has different answers to the question 'What get's you up in the morning? What drives you?' Throughout my life, my family has been my why."
                              icon={() => <svg class="min-w-16 min-h-16" width="64px" height="64px" stroke-width="0.9"
                                               viewBox="0 0 24 24"
                                               fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                                  <path
                                      d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
                                      stroke="#ffffff" stroke-width="0.9" stroke-linejoin="round"></path>
                              </svg>}>
                </InterestPage>
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("family")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-orange-700 dark:bg-orange-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="basketball"
                transition-style="in:circle:hesitate">
                <InterestPage title="Basketball"
                              content="Favorite Team: Heat, Favorite Player: Dwyane Wade, GOAT: Michael Jordan. Now that that's out of the way, let's dive in. As an Indian growing up in a predominantly Hispanic community, basketball helped me make friends, overcoming language barriers and stereotypes. I can still remember being told not to bother playing, because of my skin color. The number of times I got told to go back to my computer and future in tech support. Part of what kept me out for hours every summer was proving those people wrong. Proving I did belong, in my community and on those courts. I also just loved to win, and hated losing enough to wait until I could get back on the court and win again. My friends and I stayed out for hours almost every day, summer after summer, hooping till our shoes wore out. While the summers of basketball have since ended, they left an ember that flares up occassionally, a competitive spirit and will to succeed that burns a bit deeper down."
                              icon={() => <svg class="min-w-16 min-h-16" width="64px" height="64px" stroke-width="0.9"
                                               viewBox="0 0 24 24"
                                               fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                                  <path
                                      d="M17.7357 20.1916C22.2597 17.0238 23.3592 10.7884 20.1914 6.2643C17.0237 1.74025 10.7882 0.640771 6.26415 3.80855C1.7401 6.97632 0.640621 13.2118 3.8084 17.7358C6.97617 22.2599 13.2116 23.3594 17.7357 20.1916Z"
                                      stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                  <path d="M17.7357 20.1916L6.26416 3.80853" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M19.5774 5.47348C15.8066 11.3693 11.069 14.6867 3.27527 16.8884"
                                        stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                  <path d="M13.0597 2.05625C13.4732 7.29607 16.4517 11.55 21.7065 14.4052"
                                        stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                  <path d="M2.29333 9.59491C7.0757 11.7757 10.0544 16.0294 10.9402 21.9439"
                                        stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                              </svg>}>
                </InterestPage>
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("basketball")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-red-700 dark:bg-red-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="ballroom"
                transition-style="in:diamond:hesitate">
                <InterestPage title="Ballroom Dance"
                              content="Coming from a musical family, my parents had us acting, singing, and playing instruments from an early age. And, when I was in the fifth grade my mother 'forced' me to sign up for the ballroom program at my school, courtesy of Dancing Classrooms. When the program ended, I found myself asking to take the lessons the dance company offered in New York (my parents somehow made it work every weekend). I was a shy kid, and I didn't enjoy performing, but I loved learning to dance, and took pride in not being too shabby at it. Years later, I tried out for the ballroom dance team at my university as an undergraduate freshman. It was on that team that I met my wife. And the rest is history."
                              icon={() => <svg class="min-w-16 min-h-16" width="64px" height="64px" fill="transparent"
                                               version="1.1"
                                               id="Layer_1"
                                               xmlns="http://www.w3.org/2000/svg"

                                               viewBox="0 0 256 256"
                                               enable-background="new 0 0 256 256"
                                               stroke="#ffffff" stroke-width="6px">
                                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                     stroke="#CCCCCC"
                                     stroke-width="3.072"></g>
                                  <g id="SVGRepo_iconCarrier">
                                      <path
                                          d="M87.002,70.047c4.24,10.293,16.021,15.2,26.315,10.96c6.352-2.617,10.643-8.108,12.009-14.347l16.375,4.657l2.249-6.608 l-16.786-11.215l1.627-13.675c0.305-2.567-1.299-4.975-3.785-5.682l-21.375-6.079c-2.486-0.707-5.118,0.497-6.209,2.84 l-5.668,12.175L72.12,44.281l-2.249,6.607l16.784,4.774C85.058,60.178,85.034,65.269,87.002,70.047z M127.515,131.464H103.24 L90.648,85.99c-1.821-8.031-8.992-14.15-17.406-14.15H28.81c-3.065,0-6.129,1.628-7.849,4.309L3.343,106.947 c-2.68,4.299-0.961,9.699,3.257,12.339c3.843,2.397,9.538,0.931,12.329-3.065l15.04-26.115h23.303L28.588,139.57 c-3.346,5.771-3.663,12.812-0.848,18.86l14.36,30.856l-12.663,48.457c-1.77,6.999,2.397,14.018,9.214,15.849 c6.999,1.77,14.008-2.397,15.849-9.214l13.401-53.029c0.718-2.721,0.627-5.947-0.809-8.678l-1.224-2.589l17.204,9.912L66.1,236.236 c-2.468,6.706,0.708,14.362,7.373,16.901c6.766,2.579,14.221-0.819,16.719-7.596l20.744-56.69 c2.569-7.009-0.293-14.827-6.766-18.529l-36.664-20.926l14.342-25.053l5.234,18.492c1.184,4.05,4.898,6.834,9.117,6.834h31.314 c5.065,0.183,8.862-3.65,9.052-8.616C136.739,136.519,132.368,131.908,127.515,131.464z M190.205,60.283 c16.823-6.387,25.937-24.044,22.136-41.086c-0.049,0.876-0.442,1.597-0.804,2.401c-2.273,5.056-8.353,7.364-13.409,5.09 c-0.804-0.362-1.557-0.838-2.195-1.263c-5.544-4.565-13.392-6.16-20.387-3.504c-10.494,3.984-16.014,15.798-11.935,26.542 C167.69,59.206,179.462,64.361,190.205,60.283z M253.942,204.308c0,0-4.046-64.753-29.837-88.016 c-0.17-0.153-0.337-0.295-0.506-0.443V69.487l21.414-9.347c5.463-2.386,8.391-8.52,6.81-14.269L241.496,8.319 c-1.258-4.578-5.99-7.268-10.569-6.01c-4.578,1.259-7.269,5.991-6.009,10.569l9.151,33.277l-18.992,8.29l-38.175,16.952 c-7.452,3.31-12.559,10.408-13.325,18.525l-1.897,20.062l-22.306-12.783c-4.12-2.361-9.373-0.936-11.734,3.184 c-2.361,4.12-0.935,9.373,3.184,11.734l30.013,17.2c1.772,1.016,3.736,1.526,5.703,1.526c1.805,0,3.612-0.429,5.275-1.29 c3.478-1.801,5.775-5.204,6.146-9.106l1.797-19.007l8.947,20.92c0,0,1.934,13.718-22.757,31.354 c-28.32,20.228-18.711,62.202-18.711,62.202s8.44-2.941,20.734-4.623v31.425c0.008,6.093,5.169,11.046,11.126,11.126 c6.093-0.008,11.038-5.166,11.126-11.126v-32.395c4.144,0.236,8.392,0.733,12.656,1.583l-0.259,0.118l8.408,33.344 c1.498,5.906,7.713,9.447,13.508,8.068c5.906-1.498,9.44-7.708,8.068-13.508l-6.186-24.531 C250.962,216.192,253.942,204.308,253.942,204.308z"></path>
                                  </g>
                              </svg>}></InterestPage>
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("ballroom")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-yellow-700 dark:bg-yellow-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="reading"
                transition-style="in:square:hesitate">
                <InterestPage title="Reading"
                              content="Reading has always been my escape. I was the type of kid who always borrowed at least 2 (sometimes 3) books at a time from my school library, knowing full and well that my parents would take the first book away when they sent us to bed. I would keep the second book carefully hidden, only to whip it out once the lights were off and read by flashlight. In school you'd almost always find me with a book held out in front of my face. While the quantity of my reading consumption has decreased since the carefree days of my youth, I am still enthused every time I get encounter some good literature. Admittedly I have a weakness for fiction. Non-fiction books are fine, but they often don't transport the reader in quite the same way a good story can. Currently, I am finishing up Brandon Sanderson's Cosmere-universe books. (I would highly recommend them to anyone.)"
                              icon={() => <svg class="min-w-16 min-h-16" width="64px" height="64px" stroke-width="0.9"
                                               viewBox="0 0 24 24"
                                               fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                                  <path d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143"
                                        stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"></path>
                                  <path
                                      d="M16 8.77975C16 9.38118 15.7625 9.95883 15.3383 10.3861C14.3619 11.3701 13.415 12.3961 12.4021 13.3443C12.17 13.5585 11.8017 13.5507 11.5795 13.3268L8.6615 10.3861C7.7795 9.49725 7.7795 8.06225 8.6615 7.17339C9.55218 6.27579 11.0032 6.27579 11.8938 7.17339L11.9999 7.28027L12.1059 7.17345C12.533 6.74286 13.1146 6.5 13.7221 6.5C14.3297 6.5 14.9113 6.74284 15.3383 7.17339C15.7625 7.60073 16 8.17835 16 8.77975Z"
                                      stroke="#ffffff" stroke-width="0.9" stroke-linejoin="round"></path>
                                  <path d="M6 17L20 17" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round"></path>
                                  <path d="M6 21L20 21" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round"></path>
                                  <path d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17" stroke="#ffffff"
                                        stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>}></InterestPage>
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("reading")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-green-700 dark:bg-green-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="camping"
                transition-style="in:wipe:cinematic">
                <InterestPage title="Camping"
                              content="Being in nature is cathartic, and has often been a great way for me to reset, take a step back, and center myself. I loved getting lost in the woods as a child, to the chagrin of my parents, pretending I was exploring uncharted territory. I enjoyed fishing, sitting in a little row boat on a pond and watching nature go by. But the best moments always happened around the fire. The heat of the flame and the time honored traditions of making s'mores and singing songs create an atmosphere that resonates deep within the human consciousness, at least certainly within my own. Gathering around a fire connects people in a way that little else can."
                              icon={() => <svg class="min-w-16 min-h-16" width="64px" height="64px" stroke-width="0.9"
                                               viewBox="0 0 24 24"
                                               fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                                  <path
                                      d="M9 14C9 15.6099 10.3771 16 12.0758 16C14.9661 16 15.9206 14.3333 13.9982 11C11.3069 14 10.9224 9.33333 11.3069 8C10.1534 10 9 11.8785 9 14Z"
                                      stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                  <path
                                      d="M12 16C15.1559 16 17 13.9024 17 10.3125C17 6.72265 12 3 12 3C12 3 7 6.72265 7 10.3125C7 13.9024 8.84409 16 12 16Z"
                                      stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                  <path d="M4.27258 21.0703L19.7274 16.9292" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round"></path>
                                  <path d="M4.27259 16.9292L12 18.9998" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round"></path>
                                  <path d="M19.7274 21.0703L15.8637 20.035" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round"></path>
                              </svg>}></InterestPage>
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("camping")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-pink-700 dark:bg-pink-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="cooking"
                transition-style="in:wipe:up">
                <InterestPage title="Cooking"
                              content="While my passion for cooking has only recently begun, it is one that I greatly enjoy. One of the most gratifying feelings is seeing a loved one's eyes light up as they try your food. And while cleaning up after is less than enticing, the preparation of a meal can be a great way to relax after a long day."
                              icon={() => <svg class="min-w-16 min-h-16" width="64px" height="64px" stroke-width="0.9"
                                               viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                               color="#ffffff">
                                  <path d="M8.5 14.5L5 22" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                  <path d="M8 6C8 6 9 4.9387 9 4C9 2.66667 8 2 8 2" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12 6C12 6 13 4.9387 13 4C13 2.66667 12 2 12 2" stroke="#ffffff"
                                        stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M16 6C16 6 17 4.9387 17 4C17 2.66667 16 2 16 2" stroke="#ffffff"
                                        stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M16.5 17.5L7.5 17.5" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linejoin="round"></path>
                                  <path d="M15.5 14.5L17.6 19" stroke="#ffffff" stroke-width="0.9"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path
                                      d="M18.5 22C19.3284 22 20 21.3284 20 20.5C20 19.6716 19.3284 19 18.5 19C17.6716 19 17 19.6716 17 20.5C17 21.3284 17.6716 22 18.5 22Z"
                                      stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                  <path
                                      d="M12 15C15.664 15 18.6705 12.185 18.9747 8.59974C19.0027 8.26956 18.7314 8 18.4 8H5.6C5.26863 8 4.99732 8.26956 5.02533 8.59974C5.32955 12.185 8.33603 15 12 15Z"
                                      stroke="#ffffff" stroke-width="0.9"></path>
                              </svg>}></InterestPage>
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("cooking")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
        </div>
    );
};

export default App;
