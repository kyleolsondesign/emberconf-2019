'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MAGIC_PROP = exports.DESTROYED = exports.DESTROYING = undefined;

var _env = require('@glimmer/env');

var _owner = require('./owner');

var _a, _b;

const DESTROYING = Symbol('destroying');
const DESTROYED = Symbol('destroyed');
let MAGIC_PROP;
if (_env.DEBUG) {
    exports.MAGIC_PROP = MAGIC_PROP = Symbol('magic-prop');
}
exports.DESTROYING = DESTROYING;
exports.DESTROYED = DESTROYED;
exports.MAGIC_PROP = MAGIC_PROP;
/**
 * The `Component` class defines an encapsulated UI element that is rendered to
 * the DOM. A component is made up of a template and, optionally, this component
 * object.
 *
 * ## Defining a Component
 *
 * To define a component, subclass `Component` and add your own properties,
 * methods and lifecycle hooks:
 *
 * ```ts
 * import Component from '@glimmer/component';
 *
 * export default class extends Component {
 * }
 * ```
 *
 * ## Lifecycle Hooks
 *
 * Lifecycle hooks allow you to respond to changes to a component, such as when
 * it gets created, rendered, updated or destroyed. To add a lifecycle hook to a
 * component, implement the hook as a method on your component subclass.
 *
 * For example, to be notified when Glimmer has rendered your component so you
 * can attach a legacy jQuery plugin, implement the `didInsertElement()` method:
 *
 * ```ts
 * import Component from '@glimmer/component';
 *
 * export default class extends Component {
 *   didInsertElement() {
 *     $(this.element).pickadate();
 *   }
 * }
 * ```
 *
 * ## Data for Templates
 *
 * `Component`s have two different kinds of data, or state, that can be
 * displayed in templates:
 *
 * 1. Arguments
 * 2. Properties
 *
 * Arguments are data that is passed in to a component from its parent
 * component. For example, if I have a `UserGreeting` component, I can pass it
 * a name and greeting to use:
 *
 * ```hbs
 * <UserGreeting @name="Ricardo" @greeting="Olá" />
 * ```
 *
 * Inside my `UserGreeting` template, I can access the `@name` and `@greeting`
 * arguments that I've been given:
 *
 * ```hbs
 * {{@greeting}}, {{@name}}!
 * ```
 *
 * Arguments are also available inside my component:
 *
 * ```ts
 * console.log(this.args.greeting); // prints "Olá"
 * ```
 *
 * Properties, on the other hand, are internal to the component and declared in
 * the class. You can use properties to store data that you want to show in the
 * template, or pass to another component as an argument.
 *
 * ```ts
 * import Component from '@glimmer/component';
 *
 * export default class extends Component {
 *   user = {
 *     name: 'Robbie'
 *   }
 * }
 * ```
 *
 * In the above example, we've defined a component with a `user` property that
 * contains an object with its own `name` property.
 *
 * We can render that property in our template:
 *
 * ```hbs
 * Hello, {{user.name}}!
 * ```
 *
 * We can also take that property and pass it as an argument to the
 * `UserGreeting` component we defined above:
 *
 * ```hbs
 * <UserGreeting @greeting="Hello" @name={{user.name}} />
 * ```
 *
 * ## Arguments vs. Properties
 *
 * Remember, arguments are data that was given to your component by its parent
 * component, and properties are data your component has defined for itself.
 *
 * You can tell the difference between arguments and properties in templates
 * because arguments always start with an `@` sign (think "A is for arguments"):
 *
 * ```hbs
 * {{@firstName}}
 * ```
 *
 * We know that `@firstName` came from the parent component, not the current
 * component, because it starts with `@` and is therefore an argument.
 *
 * On the other hand, if we see:
 *
 * ```hbs
 * {{name}}
 * ```
 *
 * We know that `name` is a property on the component. If we want to know where
 * the data is coming from, we can go look at our component class to find out.
 *
 * Inside the component itself, arguments always show up inside the component's
 * `args` property. For example, if `{{@firstName}}` is `Tom` in the template,
 * inside the component `this.args.firstName` would also be `Tom`.
 */

class GlimmerComponent {
    /**
     * Constructs a new component and assigns itself the passed properties. You
     * should not construct new components yourself. Instead, Glimmer will
     * instantiate new components automatically as it renders.
     *
     * @param owner
     * @param args
     */
    constructor(owner, args) {
        this[_a] = false;
        this[_b] = false;
        if (_env.DEBUG && !(owner !== null && typeof owner === 'object' && args[MAGIC_PROP] === true)) {
            throw new Error(`You must pass both the owner and args to super() in your component: ${this.constructor.name}. You can pass them directly, or use ...arguments to pass all arguments through.`);
        }
        this.args = args;
        (0, _owner.setOwner)(this, owner);
    }
    get isDestroying() {
        return this[DESTROYING];
    }
    get isDestroyed() {
        return this[DESTROYED];
    }
    /**
     * Called before the component has been removed from the DOM.
     */
    willDestroy() {}
}
exports.default = GlimmerComponent;
_a = DESTROYING, _b = DESTROYED;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL0BnbGltbWVyL2NvbXBvbmVudC9hZGRvbi8tcHJpdmF0ZS9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTSxhQUFhLE9BQU8sWUFBUCxDQUFuQjtBQUNBLE1BQU0sWUFBWSxPQUFPLFdBQVAsQ0FBbEI7QUFFQSxJQUFJLFVBQUo7QUFFQSxJQUFJLFVBQUosRUFBVztBQUNULFlBRzhCLFVBSDlCLGdCQUFhLE9BQU8sWUFBUCxDQUFiO0FBQ0Q7UUFFUSxVLEdBQUEsVTtRQUFZLFMsR0FBQSxTO1FBQVcsVSxHQUFBLFU7QUFFaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEySGMsTUFBTyxnQkFBUCxDQUF1QjtBQUNuQzs7Ozs7Ozs7QUFRQSxnQkFBWSxLQUFaLEVBQTRCLElBQTVCLEVBQW1DO0FBMENuQyxhQUFBLEVBQUEsSUFBZSxLQUFmO0FBQ0EsYUFBQSxFQUFBLElBQWMsS0FBZDtBQTFDRSxZQUNFLGNBQ0EsRUFBRSxVQUFVLElBQVYsSUFBa0IsT0FBTyxLQUFQLEtBQWlCLFFBQW5DLElBQWdELEtBQWEsVUFBYixNQUE2QixJQUEvRSxDQUZGLEVBR0U7QUFDQSxrQkFBTSxJQUFJLEtBQUosQ0FDSix1RUFDRSxLQUFLLFdBQUwsQ0FBaUIsSUFDbkIsa0ZBSEksQ0FBTjtBQUtEO0FBRUQsYUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLDZCQUFTLElBQVQsRUFBZSxLQUFmO0FBQ0Q7QUErQkQsUUFBSSxZQUFKLEdBQWdCO0FBQ2QsZUFBTyxLQUFLLFVBQUwsQ0FBUDtBQUNEO0FBRUQsUUFBSSxXQUFKLEdBQWU7QUFDYixlQUFPLEtBQUssU0FBTCxDQUFQO0FBQ0Q7QUFFRDs7O0FBR0Esa0JBQVcsQ0FBSztBQWpFbUI7a0JBQWhCLGdCO0tBbURsQixVLEVBQVUsS0FDVixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVCVUcgfSBmcm9tICdAZ2xpbW1lci9lbnYnO1xuaW1wb3J0IHsgc2V0T3duZXIgfSBmcm9tICcuL293bmVyJztcblxuY29uc3QgREVTVFJPWUlORyA9IFN5bWJvbCgnZGVzdHJveWluZycpO1xuY29uc3QgREVTVFJPWUVEID0gU3ltYm9sKCdkZXN0cm95ZWQnKTtcblxubGV0IE1BR0lDX1BST1A6IHN5bWJvbDtcblxuaWYgKERFQlVHKSB7XG4gIE1BR0lDX1BST1AgPSBTeW1ib2woJ21hZ2ljLXByb3AnKTtcbn1cblxuZXhwb3J0IHsgREVTVFJPWUlORywgREVTVFJPWUVELCBNQUdJQ19QUk9QIH07XG5cbi8qKlxuICogVGhlIGBDb21wb25lbnRgIGNsYXNzIGRlZmluZXMgYW4gZW5jYXBzdWxhdGVkIFVJIGVsZW1lbnQgdGhhdCBpcyByZW5kZXJlZCB0b1xuICogdGhlIERPTS4gQSBjb21wb25lbnQgaXMgbWFkZSB1cCBvZiBhIHRlbXBsYXRlIGFuZCwgb3B0aW9uYWxseSwgdGhpcyBjb21wb25lbnRcbiAqIG9iamVjdC5cbiAqXG4gKiAjIyBEZWZpbmluZyBhIENvbXBvbmVudFxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYENvbXBvbmVudGAgYW5kIGFkZCB5b3VyIG93biBwcm9wZXJ0aWVzLFxuICogbWV0aG9kcyBhbmQgbGlmZWN5Y2xlIGhvb2tzOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICogfVxuICogYGBgXG4gKlxuICogIyMgTGlmZWN5Y2xlIEhvb2tzXG4gKlxuICogTGlmZWN5Y2xlIGhvb2tzIGFsbG93IHlvdSB0byByZXNwb25kIHRvIGNoYW5nZXMgdG8gYSBjb21wb25lbnQsIHN1Y2ggYXMgd2hlblxuICogaXQgZ2V0cyBjcmVhdGVkLCByZW5kZXJlZCwgdXBkYXRlZCBvciBkZXN0cm95ZWQuIFRvIGFkZCBhIGxpZmVjeWNsZSBob29rIHRvIGFcbiAqIGNvbXBvbmVudCwgaW1wbGVtZW50IHRoZSBob29rIGFzIGEgbWV0aG9kIG9uIHlvdXIgY29tcG9uZW50IHN1YmNsYXNzLlxuICpcbiAqIEZvciBleGFtcGxlLCB0byBiZSBub3RpZmllZCB3aGVuIEdsaW1tZXIgaGFzIHJlbmRlcmVkIHlvdXIgY29tcG9uZW50IHNvIHlvdVxuICogY2FuIGF0dGFjaCBhIGxlZ2FjeSBqUXVlcnkgcGx1Z2luLCBpbXBsZW1lbnQgdGhlIGBkaWRJbnNlcnRFbGVtZW50KClgIG1ldGhvZDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAqICAgZGlkSW5zZXJ0RWxlbWVudCgpIHtcbiAqICAgICAkKHRoaXMuZWxlbWVudCkucGlja2FkYXRlKCk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIERhdGEgZm9yIFRlbXBsYXRlc1xuICpcbiAqIGBDb21wb25lbnRgcyBoYXZlIHR3byBkaWZmZXJlbnQga2luZHMgb2YgZGF0YSwgb3Igc3RhdGUsIHRoYXQgY2FuIGJlXG4gKiBkaXNwbGF5ZWQgaW4gdGVtcGxhdGVzOlxuICpcbiAqIDEuIEFyZ3VtZW50c1xuICogMi4gUHJvcGVydGllc1xuICpcbiAqIEFyZ3VtZW50cyBhcmUgZGF0YSB0aGF0IGlzIHBhc3NlZCBpbiB0byBhIGNvbXBvbmVudCBmcm9tIGl0cyBwYXJlbnRcbiAqIGNvbXBvbmVudC4gRm9yIGV4YW1wbGUsIGlmIEkgaGF2ZSBhIGBVc2VyR3JlZXRpbmdgIGNvbXBvbmVudCwgSSBjYW4gcGFzcyBpdFxuICogYSBuYW1lIGFuZCBncmVldGluZyB0byB1c2U6XG4gKlxuICogYGBgaGJzXG4gKiA8VXNlckdyZWV0aW5nIEBuYW1lPVwiUmljYXJkb1wiIEBncmVldGluZz1cIk9sw6FcIiAvPlxuICogYGBgXG4gKlxuICogSW5zaWRlIG15IGBVc2VyR3JlZXRpbmdgIHRlbXBsYXRlLCBJIGNhbiBhY2Nlc3MgdGhlIGBAbmFtZWAgYW5kIGBAZ3JlZXRpbmdgXG4gKiBhcmd1bWVudHMgdGhhdCBJJ3ZlIGJlZW4gZ2l2ZW46XG4gKlxuICogYGBgaGJzXG4gKiB7e0BncmVldGluZ319LCB7e0BuYW1lfX0hXG4gKiBgYGBcbiAqXG4gKiBBcmd1bWVudHMgYXJlIGFsc28gYXZhaWxhYmxlIGluc2lkZSBteSBjb21wb25lbnQ6XG4gKlxuICogYGBgdHNcbiAqIGNvbnNvbGUubG9nKHRoaXMuYXJncy5ncmVldGluZyk7IC8vIHByaW50cyBcIk9sw6FcIlxuICogYGBgXG4gKlxuICogUHJvcGVydGllcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBpbnRlcm5hbCB0byB0aGUgY29tcG9uZW50IGFuZCBkZWNsYXJlZCBpblxuICogdGhlIGNsYXNzLiBZb3UgY2FuIHVzZSBwcm9wZXJ0aWVzIHRvIHN0b3JlIGRhdGEgdGhhdCB5b3Ugd2FudCB0byBzaG93IGluIHRoZVxuICogdGVtcGxhdGUsIG9yIHBhc3MgdG8gYW5vdGhlciBjb21wb25lbnQgYXMgYW4gYXJndW1lbnQuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCBDb21wb25lbnQgZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50JztcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gKiAgIHVzZXIgPSB7XG4gKiAgICAgbmFtZTogJ1JvYmJpZSdcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHdlJ3ZlIGRlZmluZWQgYSBjb21wb25lbnQgd2l0aCBhIGB1c2VyYCBwcm9wZXJ0eSB0aGF0XG4gKiBjb250YWlucyBhbiBvYmplY3Qgd2l0aCBpdHMgb3duIGBuYW1lYCBwcm9wZXJ0eS5cbiAqXG4gKiBXZSBjYW4gcmVuZGVyIHRoYXQgcHJvcGVydHkgaW4gb3VyIHRlbXBsYXRlOlxuICpcbiAqIGBgYGhic1xuICogSGVsbG8sIHt7dXNlci5uYW1lfX0hXG4gKiBgYGBcbiAqXG4gKiBXZSBjYW4gYWxzbyB0YWtlIHRoYXQgcHJvcGVydHkgYW5kIHBhc3MgaXQgYXMgYW4gYXJndW1lbnQgdG8gdGhlXG4gKiBgVXNlckdyZWV0aW5nYCBjb21wb25lbnQgd2UgZGVmaW5lZCBhYm92ZTpcbiAqXG4gKiBgYGBoYnNcbiAqIDxVc2VyR3JlZXRpbmcgQGdyZWV0aW5nPVwiSGVsbG9cIiBAbmFtZT17e3VzZXIubmFtZX19IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyBBcmd1bWVudHMgdnMuIFByb3BlcnRpZXNcbiAqXG4gKiBSZW1lbWJlciwgYXJndW1lbnRzIGFyZSBkYXRhIHRoYXQgd2FzIGdpdmVuIHRvIHlvdXIgY29tcG9uZW50IGJ5IGl0cyBwYXJlbnRcbiAqIGNvbXBvbmVudCwgYW5kIHByb3BlcnRpZXMgYXJlIGRhdGEgeW91ciBjb21wb25lbnQgaGFzIGRlZmluZWQgZm9yIGl0c2VsZi5cbiAqXG4gKiBZb3UgY2FuIHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhcmd1bWVudHMgYW5kIHByb3BlcnRpZXMgaW4gdGVtcGxhdGVzXG4gKiBiZWNhdXNlIGFyZ3VtZW50cyBhbHdheXMgc3RhcnQgd2l0aCBhbiBgQGAgc2lnbiAodGhpbmsgXCJBIGlzIGZvciBhcmd1bWVudHNcIik6XG4gKlxuICogYGBgaGJzXG4gKiB7e0BmaXJzdE5hbWV9fVxuICogYGBgXG4gKlxuICogV2Uga25vdyB0aGF0IGBAZmlyc3ROYW1lYCBjYW1lIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQsIG5vdCB0aGUgY3VycmVudFxuICogY29tcG9uZW50LCBiZWNhdXNlIGl0IHN0YXJ0cyB3aXRoIGBAYCBhbmQgaXMgdGhlcmVmb3JlIGFuIGFyZ3VtZW50LlxuICpcbiAqIE9uIHRoZSBvdGhlciBoYW5kLCBpZiB3ZSBzZWU6XG4gKlxuICogYGBgaGJzXG4gKiB7e25hbWV9fVxuICogYGBgXG4gKlxuICogV2Uga25vdyB0aGF0IGBuYW1lYCBpcyBhIHByb3BlcnR5IG9uIHRoZSBjb21wb25lbnQuIElmIHdlIHdhbnQgdG8ga25vdyB3aGVyZVxuICogdGhlIGRhdGEgaXMgY29taW5nIGZyb20sIHdlIGNhbiBnbyBsb29rIGF0IG91ciBjb21wb25lbnQgY2xhc3MgdG8gZmluZCBvdXQuXG4gKlxuICogSW5zaWRlIHRoZSBjb21wb25lbnQgaXRzZWxmLCBhcmd1bWVudHMgYWx3YXlzIHNob3cgdXAgaW5zaWRlIHRoZSBjb21wb25lbnQnc1xuICogYGFyZ3NgIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgYHt7QGZpcnN0TmFtZX19YCBpcyBgVG9tYCBpbiB0aGUgdGVtcGxhdGUsXG4gKiBpbnNpZGUgdGhlIGNvbXBvbmVudCBgdGhpcy5hcmdzLmZpcnN0TmFtZWAgd291bGQgYWxzbyBiZSBgVG9tYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xpbW1lckNvbXBvbmVudDxUID0gb2JqZWN0PiB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGEgbmV3IGNvbXBvbmVudCBhbmQgYXNzaWducyBpdHNlbGYgdGhlIHBhc3NlZCBwcm9wZXJ0aWVzLiBZb3VcbiAgICogc2hvdWxkIG5vdCBjb25zdHJ1Y3QgbmV3IGNvbXBvbmVudHMgeW91cnNlbGYuIEluc3RlYWQsIEdsaW1tZXIgd2lsbFxuICAgKiBpbnN0YW50aWF0ZSBuZXcgY29tcG9uZW50cyBhdXRvbWF0aWNhbGx5IGFzIGl0IHJlbmRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSBvd25lclxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3duZXI6IHVua25vd24sIGFyZ3M6IFQpIHtcbiAgICBpZiAoXG4gICAgICBERUJVRyAmJlxuICAgICAgIShvd25lciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3duZXIgPT09ICdvYmplY3QnICYmIChhcmdzIGFzIGFueSlbTUFHSUNfUFJPUF0gPT09IHRydWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBZb3UgbXVzdCBwYXNzIGJvdGggdGhlIG93bmVyIGFuZCBhcmdzIHRvIHN1cGVyKCkgaW4geW91ciBjb21wb25lbnQ6ICR7XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgIH0uIFlvdSBjYW4gcGFzcyB0aGVtIGRpcmVjdGx5LCBvciB1c2UgLi4uYXJndW1lbnRzIHRvIHBhc3MgYWxsIGFyZ3VtZW50cyB0aHJvdWdoLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICBzZXRPd25lcih0aGlzLCBvd25lciBhcyBhbnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hbWVkIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBmcm9tIGl0cyBwYXJlbnQgY29tcG9uZW50LlxuICAgKiBUaGV5IGNhbiBiZSBhY2Nlc3NlZCBpbiBKYXZhU2NyaXB0IHZpYSBgdGhpcy5hcmdzLmFyZ3VtZW50TmFtZWAgYW5kIGluIHRoZSB0ZW1wbGF0ZSB2aWEgYEBhcmd1bWVudE5hbWVgLlxuICAgKlxuICAgKiBTYXkgeW91IGhhdmUgdGhlIGZvbGxvd2luZyBjb21wb25lbnQsIHdoaWNoIHdpbGwgaGF2ZSB0d28gYGFyZ3NgLCBgZmlyc3ROYW1lYCBhbmQgYGxhc3ROYW1lYDpcbiAgICpcbiAgICogYGBgaGJzXG4gICAqIDxteS1jb21wb25lbnQgQGZpcnN0TmFtZT1cIkFydGh1clwiIEBsYXN0TmFtZT1cIkRlbnRcIiAvPlxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IG5lZWRlZCB0byBjYWxjdWxhdGUgYGZ1bGxOYW1lYCBieSBjb21iaW5pbmcgYm90aCBvZiB0aGVtLCB5b3Ugd291bGQgZG86XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGRpZEluc2VydEVsZW1lbnQoKSB7XG4gICAqICAgY29uc29sZS5sb2coYEhpLCBteSBmdWxsIG5hbWUgaXMgJHt0aGlzLmFyZ3MuZmlyc3ROYW1lfSAke3RoaXMuYXJncy5sYXN0TmFtZX1gKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogV2hpbGUgaW4gdGhlIHRlbXBsYXRlIHlvdSBjb3VsZCBkbzpcbiAgICpcbiAgICogYGBgaGJzXG4gICAqIDxwPldlbGNvbWUsIHt7QGZpcnN0TmFtZX19IHt7QGxhc3ROYW1lfX0hPC9wPlxuICAgKiBgYGBcbiAgICovXG4gIGFyZ3M6IFQ7XG5cbiAgW0RFU1RST1lJTkddID0gZmFsc2U7XG4gIFtERVNUUk9ZRURdID0gZmFsc2U7XG5cbiAgZ2V0IGlzRGVzdHJveWluZygpIHtcbiAgICByZXR1cm4gdGhpc1tERVNUUk9ZSU5HXTtcbiAgfVxuXG4gIGdldCBpc0Rlc3Ryb3llZCgpIHtcbiAgICByZXR1cm4gdGhpc1tERVNUUk9ZRURdO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICovXG4gIHdpbGxEZXN0cm95KCkge31cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=