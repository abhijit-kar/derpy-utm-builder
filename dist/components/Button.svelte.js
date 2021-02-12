/* src/components/Button.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	attr,
	bubble,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let button;
	let button_class_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	return {
		c() {
			button = element("button");
			if (default_slot) default_slot.c();
			attr(button, "type", "button w-full");

			attr(button, "class", button_class_value = `inline-flex items-center p-1 text-sm font-medium text-gray-700
    bg-transparent rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500
    ${/*disable*/ ctx[0]
			? "cursor-default pointer-events-none"
			: "focus:ring-2"} `);
		},
		m(target, anchor) {
			insert(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
				}
			}

			if (!current || dirty & /*disable*/ 1 && button_class_value !== (button_class_value = `inline-flex items-center p-1 text-sm font-medium text-gray-700
    bg-transparent rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500
    ${/*disable*/ ctx[0]
			? "cursor-default pointer-events-none"
			: "focus:ring-2"} `)) {
				attr(button, "class", button_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { disable = false } = $$props;

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("disable" in $$props) $$invalidate(0, disable = $$props.disable);
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	return [disable, $$scope, slots, click_handler];
}

class Button extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { disable: 0 });
	}
}

export default Button;