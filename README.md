
Hyperfish - a usable pure CSS menu
=============================

An pure CSS dropdown menu taking advantage of CSS3 transitions to provide a usable experience.

On desktop it works perfectly without the need for any JavaScript, however, for mobile a little JS is required to trigger the hovers.


## Installation

1. Rename `yourproject.scss` to whatever suits.

2. In the top section of the file, set any variables from `_hyperfish.scss` that you wish to override. For example, if your menu has 7 items, set:

        $hf-items: 7;

3. To style the menu, override the mixins with your own styles, for example:

		@mixin hf-theme-1f-ul {
			background-color: #325595;
			@include linear-gradient(#2a427e, #325595);
			border: 1px solid #182d49;
		}

	The four mixins available for overriding are `hf-theme-1f-ul`, `hf-theme-1f-li`, `hf-theme-2f-ul` and `hf-theme-2f-li`. Check `_globals.scss` for mroe details.

4. At the bottom of `yourproject.scss`, write your own styles for your site or import another CSS/SCSS file.

5. Link up jQuery and the plugin in `jquery.hyperfish.js` for mobile support. (At some point I will get around to writing a vanilla JS version.)
