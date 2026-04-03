// Static site utility script (GitHub Pages)
// Designed for simplicity and maintainability without over-engineering

document.addEventListener('DOMContentLoaded', () => {
    initUIInteractions();
    initLazyVideos();
    initLazyImages();
    updateCopyrightYear();

    // Delay image load slightly so animation feels intentional
    setTimeout(() => {
        lazyLoadImages();
    }, 1200);
});

/* =============================
   Sticky Header
============================= */

/**
 * Makes the header sticky when scrolling past its initial position.
 */
const initStickyHeader = () => {
    const header = document.getElementById('topBar');
    const bodyContainer = document.querySelector('.body-container');

    if (!header || !bodyContainer) return;

    const stickyOffset = header.offsetTop;

    const handleScroll = () => {
        const isSticky = window.scrollY > stickyOffset;
        header.classList.toggle('sticky', isSticky);
        bodyContainer.classList.toggle('bodyTopSpacer', isSticky);
    };

    window.addEventListener('scroll', handleScroll);
};

initStickyHeader();

/* =============================
   UI Interactions (Event Delegation)
============================= */

/**
 * Initializes UI interactions like tabs, mobile nav, scroll links, video modals, and social toggles.
 */
const initUIInteractions = () => {
    const body = document.getElementById('body');
    const tabs = document.querySelectorAll('ul.tabs li');
    const tabsContent = document.getElementById('tabsContent');
    const mobileNav = document.querySelector('.mobileNav');

    const mainVideo = document.querySelector('.main-video');
    const mainVideoContent = mainVideo?.innerHTML || '';

    const videoContainer = document.querySelector('.videoContainer');
    const videoDarkPane = document.querySelector('.videoDarkPane');

    document.addEventListener('click', (e) => {
        const target = e.target;

        // Tabs
        if (target.matches('.tab-link')) {
            const tabId = target.dataset.tab;

            tabs.forEach(tab => tab.classList.remove('current'));
            target.classList.add('current');

            tabsContent.className = `slide-${tabId}`;
        }

        // Mobile nav
        else if (target.matches('.mobileSelectedNav')) {
            mobileNav?.classList.toggle('showMenu');
        }

        // Scroll links
        else if (target.matches('#scrollTo-liveDemo')) {
            document.querySelector('#live-demo')?.scrollIntoView();
        }
        else if (target.matches('#scrollTo-screenshots')) {
            document.querySelector('#screenshots .slider-container')?.scrollIntoView();
        }
        else if (target.matches('#scrollTo-languages')) {
            document.querySelector('#supported-languages')?.scrollIntoView();
        }

        // Video load
        else if (target.matches('.loadVideo') && mainVideo) {
            const videoId = target.dataset.videoid;
            mainVideo.innerHTML = `
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/${videoId}?rel=0&hd=1&autoplay=1"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen>
                    </iframe>
                </div>`;
        }

        // Show video modal
        else if (target.matches('#show-video')) {
            videoContainer?.classList.toggle('show');
            body?.classList.add('noScroll');
        }

        // Close video modal
        else if (target.matches('.videoDarkPane')) {
			videoContainer?.classList.toggle('show');
			body?.classList.remove('noScroll');

			if (mainVideo) {
				mainVideo.innerHTML = mainVideoContent;

				// Restore all video thumbnails
				mainVideo.querySelectorAll('img.loadVideo').forEach(img => {
					img.src = img.dataset.src;
				});
			}
		}

        // Social toggle
        else if (target.matches('.getSocial')) {
            const followContainer = document.querySelector('.followMe');
            const showSocial = document.getElementById('showSocial');

            if (followContainer) {
                followContainer.innerHTML = getSocialHTML();
            }

            showSocial?.classList.toggle('show');
        }

        else if (target.matches('.followWrapper')) {
            document.getElementById('showSocial')?.classList.remove('show');
        }

        else {
            mobileNav?.classList.remove('showMenu');
        }
    });

    initPromoBar();
};

/* =============================
   Promo Bar
============================= */

/**
 * Inserts the promo bar HTML into the page.
 */
const initPromoBar = () => {
    const promo = document.querySelector('.promoBar-wrapper');
    if (!promo) return;

    promo.innerHTML = `
        <div class="promo-text">
            <span>Q2A theme, POLARIS is now out!</span>
            <a class="learn-more" href="https://rxchun.github.io/shop/polaris">
                Learn more
            </a>
        </div>
    `;
};

/* =============================
   Social HTML
============================= */

/**
 * Returns the HTML for the social icons.
 * @returns {string} Social icons HTML
 */
const getSocialHTML = () => `
    <div class="socialCell">
        <a href="https://codepen.io/csspens" target="_blank">
            <img class="socialicon" width="44" height="44" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzQNn0lBirUAn4djVU6XwNfVMb4UaIItjkXaJztUGpTT7JAfWRNQbvp6woepvMFsaBEuuP31KeuwPoGJ_fJuIuVa35mUYU0g-FFSKTzKd6ruHZBgmaO-Nzlxzd-Cd4b7as9n4KBPpx43k6JtQMUrIpsiiZ2ZJ6XxBe3M6aXOjVOXOGvSSxNns_ZH9_/s80/codepen.png"/>
        </a>
    </div>
    <div class="socialCell">
        <a href="https://www.instagram.com/gdev.official" target="_blank">
           <img class="socialicon" width="44" height="44" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqmpiJhkKXdxvXghndLQyKECa6ITVdSYS9eAYeKL53Mjsh1l2RmpbpNLUt9poacjES8eKtMC0U30uMrCtVSf36kIsOMyNKS5w_rjrbbOQBi5WB-0TP_u6NSfb9XT6mc_bkUZ1j62zXp1igzCS624Rxa768k6-8YH-fGuoB8oapTFtr0AZ66W5LJT6J/s80/instagram.png"/>
        </a>
    </div>
    <div class="socialCell">
        <a href="https://www.facebook.com/gdev.official" target="_blank">
            <img class="socialicon" width="44" height="44" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-rZDRGoNm9ScJAWJsaGSEjxTPo9u-OROxcIY6ig1iFnYfTkE-Al53FxNJUNyu019ToOoeP0FTWE7QayWmdtybXN6MpJtiaDnn-YTXtPmivlG1Kuw4yRlM-Kjm7JovLK1Bt6kzYSAkLPlhnLwHmVfYhHhKYi7BoR4owHHJY_UgJi6m9tm8bSWoNxw/s80/facebook.png"/>
        </a>
    </div>
`;

/* =============================
   Lazy Videos
============================= */

/**
 * Initializes lazy-loading for videos using IntersectionObserver.
 */
const initLazyVideos = () => {
    const videos = document.querySelectorAll('video.lazyvideo');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const video = entry.target;

            [...video.children].forEach(source => {
                if (source.tagName === 'SOURCE') source.src = source.dataset.src;
            });

            video.src = video.dataset.src;
            video.load();
            video.classList.remove('lazyvideo');

            obs.unobserve(video);
        });
    });

    videos.forEach(video => observer.observe(video));
};

/* =============================
   Lazy Images
============================= */

/**
 * Initializes lazy-loading for images using LazyLoad library.
 */
const initLazyImages = () => {
    new LazyLoad({
        elements_selector: '.lazyimg'
    });
};

/**
 * Loads avatar images after animation completes and triggers header text animation.
 */
const lazyLoadImages = () => {
    const images = document.querySelectorAll('.lazyimg1');

    images.forEach((img) => {
        const src = img.dataset.src;
        if (!src) return;

        const temp = new Image();
        temp.onload = () => (img.src = src);
        temp.src = src;
    });
	
	// Animate header text after avatar images loaded
    // setTimeout(() => {
        const header = document.querySelector('.spHeader h3');
        rollTextToTarget(header, 'Chun');
    // }, 0);
};

/* =============================
   Avatar Animation
============================= */

/**
 * Initializes avatar download animations with SVG path and progress.
 */
const initAvatarAnimation = () => {
    const avatars = document.querySelectorAll('.downloadAvatar');

    /**
     * Calculates Bezier control points for smooth SVG path.
     * @param {number[]} currentPoint - [x, y] of current point
     * @param {number} index - Index of the point
     * @param {Array<number[]>} points - Array of [x, y] points
     * @param {number} tension - Tension factor for control points
     * @returns {string} SVG cubic Bezier curve command
     */
    function getPoint(currentPoint, index, points, tension) {
        const calcControl = (p1, p2, p3, reverse) => {
            const start = p2 || p1;
            const end = p3 || p1;
            const delta = {
                length: Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)),
                angle: Math.atan2(end[1] - start[1], end[0] - start[0])
            };
            const angle = delta.angle + (reverse ? Math.PI : 0);
            const length = delta.length * tension;
            return [p1[0] + Math.cos(angle) * length, p1[1] + Math.sin(angle) * length];
        };

        const control1 = calcControl(points[index - 1], points[index - 2], currentPoint, false);
        const control2 = calcControl(currentPoint, points[index - 1], points[index + 1], true);
        return `C ${control1[0]},${control1[1]} ${control2[0]},${control2[1]} ${currentPoint[0]},${currentPoint[1]}`;
    }

    /**
     * Generates an SVG path string from points
     * @param {number} y - Middle Y point
     * @param {number} fromX - Start X
     * @param {number} toX - End X
     * @param {number} tension - Tension for control points
     * @param {Array<number[]>} [pointsArray] - Optional points array
     * @returns {string} SVG path string
     */
    function getPath(y, fromX, toX, tension, pointsArray) {
        const points = pointsArray || [[fromX, 16], [20, y], [toX, 16]];
        return `<path d="${points.reduce((acc, pt, idx, arr) =>
            idx === 0 ? `M ${pt[0]},${pt[1]}` : `${acc} ${getPoint(pt, idx, arr, tension)}`, "")}" />`;
    }

    avatars.forEach((avatar) => {
        const iconContainer = avatar.querySelector('.icon > div');
        const arrow = avatar.querySelector('.icon .arrow');
        const percentageText = avatar.querySelector('span');
        const progress = { value: 0 };

        const state = new Proxy({ y: 30, s: 0, f: 8, l: 32 }, {
            set(target, prop, value) {
                target[prop] = value;
                if (target.y !== null && target.s !== null && target.f !== null && target.l !== null) {
                    arrow.innerHTML = getPath(target.y, target.f, target.l, target.s);
                }
                return true;
            }
        });
		
		arrow.innerHTML = getPath(state.y, state.f, state.l, state.s);

        setTimeout(() => {
            if (avatar.classList.contains('animation')) return;

            avatar.classList.add('loading', 'animation');

            gsap.to(state, { f: 2, l: 38, duration: 0.3, delay: 0.15 });
            gsap.to(state, { s: 0.2, y: 16, duration: 0.8, delay: 0.15, ease: Elastic.easeOut.config(1, 0.4) });
            gsap.to(progress, {
                value: 100,
                duration: 1.4,
                delay: 0.8,
                onUpdate: () => {
                    percentageText.textContent = Math.round(progress.value) + '%';
                }
            });

            setTimeout(() => {
                iconContainer.style.setProperty('overflow', 'visible');
                setTimeout(() => avatar.classList.remove('animation'), 600);
            }, 3820);
        }, 200);
    });
};

initAvatarAnimation();

/* =============================
   Roll Text Animation
============================= */

/**
 * Animates the text content of an element to a target string with rolling characters effect.
 * @param {HTMLElement} element - The element whose text will be animated
 * @param {string} targetText - The final text to display
 * @param {number} frames - Number of frames for the rolling animation
 * @param {function} [charGenerator] - Optional function to generate random characters
 */
const rollTextToTarget = (element, targetText, frames = 90, charGenerator) => {
    if (!element) return;
	
	const originalText = element.textContent || "";
    const maxLength = Math.max(originalText.length, targetText.length);
    const randomChar = charGenerator || (() => String.fromCharCode(65 + Math.floor(Math.random() * 26)));

    let frame = 0;
	element.classList.add('appear');

    const rollFrame = () => {
        if (frame >= frames) {
            element.textContent = targetText;
            return;
        }

        let newText = "";
        for (let i = 0; i < maxLength; i++) {
            if (i < targetText.length) {
                newText += frame < frames - 1 ? randomChar() : targetText[i];
            }
        }

        element.textContent = newText;
        frame++;
        requestAnimationFrame(rollFrame);
    };

    rollFrame();
};

/* =============================
   Footer Year
============================= */

/**
 * Updates copyright year dynamically.
 */
const updateCopyrightYear = () => {
    const year = new Date().getFullYear();

    document.querySelectorAll('.qa-attribution-link').forEach(el => {
        if (el.textContent.includes('Copyright ©')) {
            el.textContent = `Copyright © ${year}`;
        }
    });
};
