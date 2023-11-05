import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return  (
        <div class="header">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc back-arrow" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon">
                <path class="svg-path" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
            <img class="logo" src="https://twinklecube.com/_next/image?url=%2Ftwinklecube.png&w=1080&q=75" alt="twinklecube-logo" />
        </div>
    )
})
