/* src/App.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_store_value,
	space,
	transition_in,
	transition_out
} from "../snowpack/pkg/svelte/internal.js";

import { config, utmParams, builtURL } from "./stores/store.js";

import {
	AffiliateSection,
	TopSection,
	BottomSection,
	GitHubRibbon,
	ThemeSwitcher,
	SectionContainer
} from "./components/index.js";

function create_default_slot_1(ctx) {
	let topsection;
	let current;
	topsection = new TopSection({});

	return {
		c() {
			create_component(topsection.$$.fragment);
		},
		m(target, anchor) {
			mount_component(topsection, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(topsection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(topsection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(topsection, detaching);
		}
	};
}

// (34:4) <SectionContainer>
function create_default_slot(ctx) {
	let bottomsection;
	let t;
	let textarea;
	let current;
	bottomsection = new BottomSection({});

	return {
		c() {
			create_component(bottomsection.$$.fragment);
			t = space();
			textarea = element("textarea");
			attr(textarea, "class", "w-full p-2 text-center text-gray-400 rounded-md outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500");
			attr(textarea, "id", "story");
			attr(textarea, "name", "story");
			attr(textarea, "rows", "3");
			textarea.value = /*$builtURL*/ ctx[0];
		},
		m(target, anchor) {
			mount_component(bottomsection, target, anchor);
			insert(target, t, anchor);
			insert(target, textarea, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*$builtURL*/ 1) {
				textarea.value = /*$builtURL*/ ctx[0];
			}
		},
		i(local) {
			if (current) return;
			transition_in(bottomsection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(bottomsection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(bottomsection, detaching);
			if (detaching) detach(t);
			if (detaching) detach(textarea);
		}
	};
}

function create_fragment(ctx) {
	let githubribbon;
	let t0;
	let header;
	let t2;
	let main;
	let sectioncontainer0;
	let t3;
	let sectioncontainer1;
	let t4;
	let footer;
	let themeswitcher;
	let t5;
	let affiliatesection;
	let t6;
	let p;
	let current;
	githubribbon = new GitHubRibbon({});

	sectioncontainer0 = new SectionContainer({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	sectioncontainer1 = new SectionContainer({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	themeswitcher = new ThemeSwitcher({});
	affiliatesection = new AffiliateSection({});

	return {
		c() {
			create_component(githubribbon.$$.fragment);
			t0 = space();
			header = element("header");
			header.innerHTML = `<h1 class="text-4xl font-bold text-white">Derpy UTM Builder</h1>`;
			t2 = space();
			main = element("main");
			create_component(sectioncontainer0.$$.fragment);
			t3 = space();
			create_component(sectioncontainer1.$$.fragment);
			t4 = space();
			footer = element("footer");
			create_component(themeswitcher.$$.fragment);
			t5 = space();
			create_component(affiliatesection.$$.fragment);
			t6 = space();
			p = element("p");

			p.innerHTML = `Made with ❤️ by
        <a target="_blank" rel="noopener" class="hover:underline" href="https://www.derpycoder.com">DerpyCoder</a>`;

			attr(header, "class", "mt-10 mb-10");
			attr(main, "class", "w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:2-5/12");
			attr(p, "class", "text-white");
			attr(footer, "class", "mb-3");
		},
		m(target, anchor) {
			mount_component(githubribbon, target, anchor);
			insert(target, t0, anchor);
			insert(target, header, anchor);
			insert(target, t2, anchor);
			insert(target, main, anchor);
			mount_component(sectioncontainer0, main, null);
			append(main, t3);
			mount_component(sectioncontainer1, main, null);
			insert(target, t4, anchor);
			insert(target, footer, anchor);
			mount_component(themeswitcher, footer, null);
			append(footer, t5);
			mount_component(affiliatesection, footer, null);
			append(footer, t6);
			append(footer, p);
			current = true;
		},
		p(ctx, [dirty]) {
			const sectioncontainer0_changes = {};

			if (dirty & /*$$scope*/ 16) {
				sectioncontainer0_changes.$$scope = { dirty, ctx };
			}

			sectioncontainer0.$set(sectioncontainer0_changes);
			const sectioncontainer1_changes = {};

			if (dirty & /*$$scope, $builtURL*/ 17) {
				sectioncontainer1_changes.$$scope = { dirty, ctx };
			}

			sectioncontainer1.$set(sectioncontainer1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(githubribbon.$$.fragment, local);
			transition_in(sectioncontainer0.$$.fragment, local);
			transition_in(sectioncontainer1.$$.fragment, local);
			transition_in(themeswitcher.$$.fragment, local);
			transition_in(affiliatesection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(githubribbon.$$.fragment, local);
			transition_out(sectioncontainer0.$$.fragment, local);
			transition_out(sectioncontainer1.$$.fragment, local);
			transition_out(themeswitcher.$$.fragment, local);
			transition_out(affiliatesection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(githubribbon, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(header);
			if (detaching) detach(t2);
			if (detaching) detach(main);
			destroy_component(sectioncontainer0);
			destroy_component(sectioncontainer1);
			if (detaching) detach(t4);
			if (detaching) detach(footer);
			destroy_component(themeswitcher);
			destroy_component(affiliatesection);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $config;
	let $utmParams;
	let $builtURL;
	component_subscribe($$self, config, $$value => $$invalidate(1, $config = $$value));
	component_subscribe($$self, utmParams, $$value => $$invalidate(2, $utmParams = $$value));
	component_subscribe($$self, builtURL, $$value => $$invalidate(0, $builtURL = $$value));

	if (localStorage.derpy_utm_builder) {
		const tmp = JSON.parse(localStorage.derpy_utm_builder);
		set_store_value(config, $config = tmp.config, $config);
		set_store_value(utmParams, $utmParams = tmp.utmParams, $utmParams);
	}

	config.subscribe(persistData);
	utmParams.subscribe(persistData);

	function persistData() {
		localStorage.derpy_utm_builder = JSON.stringify({ config: $config, utmParams: $utmParams });
	}

	return [$builtURL];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;