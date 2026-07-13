# Prototype deck framework

Each prototype defines a `window.DECK` content object and uses the shared presenter framework.

Controls:

- Right arrow, down arrow, space, Page Down, or clicking the right 75% of the slide advances.
- Left arrow, up arrow, Page Up, or clicking the left 25% moves backward.
- `N` toggles presenter notes.
- `H` or `?` toggles keyboard help.
- Home and End jump to the first and last slides.
- The current slide is encoded in the URL hash for direct linking.

The framework uses hard cuts for slide changes, restrained fragment reveals, no external JavaScript dependencies, and a reduced-motion mode.
