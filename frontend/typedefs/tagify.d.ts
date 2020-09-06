declare module "@yaireo/tagify" {
  import Vue from "vue";
  export type RegexString = RegExp | string;
  export type FalsyValues = null | false | 0;
  export type ReactTagifyMode = null | "select" | "mix" | "input" | "textarea";

  //   export interface ReactTagifyCallbacks {
  //     /**
  //      * A tag has been added
  //      */
  //     add?: (e: Event) => void;

  //     /**
  //      * A tag has been removed (use removeTag intead with jQuery)
  //      */
  //     remove?: (e: Event) => void;

  //     /**
  //      * A tag has been added but did not pass vaildation. See event detail
  //      */
  //     invalid?: (e: Event) => void;

  //     /**
  //      * Input event, when a tag is being typed/edited. e.detail exposes value, inputElm & isValid
  //      */
  //     input?: (e: Event) => void;

  //     /**
  //      * Clicking a tag. Exposes the tag element, its index & data
  //      */
  //     click?: (e: Event) => void;

  //     /**
  //      * Double-clicking a tag
  //      */
  //     dblclick?: (e: Event) => void;

  //     /**
  //      * When tagify input has focus and a key was pressed
  //      */
  //     keydown?: (e: Event) => void;

  //     /**
  //      * The component currently has focus
  //      */
  //     focus?: (e: Event) => void;

  //     /**
  //      * The component lost focus
  //      */
  //     blur?: (e: Event) => void;

  //     /**
  //      * Typing inside an edited tag
  //      */
  //     "edit:input"?: (e: Event) => void;

  //     /**
  //      * Just before a tag has been updated, while still in "edit" mode
  //      */
  //     "edit:beforeUpdate"?: (e: Event) => void;

  //     /**
  //      * A tag as been updated (changed view editing or by directly calling the replaceTag() method)
  //      */
  //     "edit:updated"?: (e: Event) => void;

  //     /**
  //      * A tag is now in "edit mode"
  //      */
  //     "edit:start"?: (e: Event) => void;

  //     /**
  //      *  keydown event while an edited tag is in focus
  //      */
  //     "edit:keydown"?: (e: Event) => void;

  //     /**
  //      * Suggestions dropdown is to be rendered. The dropdown DOM node is passed in the callback, see demo.
  //      */
  //     "dropdown:show"?: (e: Event) => void;

  //     /**
  //      * Suggestions dropdown has been removed from the DOM
  //      */
  //     "dropdown:hide"?: (e: Event) => void;

  //     /**
  //      * Suggestions dropdown item selected (by mouse/keyboard/touch)
  //      */
  //     "dropdown:select"?: (e: Event) => void;

  //     /**
  //      * Tells the percentage scrolled. (event.detail.percentage)
  //      */
  //     "dropdown:scroll"?: (e: Event) => void;
  //   }

  //   export interface ReactTagifyDropdownSettings {
  //     /**
  //      * Minimum characters input for showing a suggestions list. false will not render a suggestions list.
  //      */
  //     enabled?: boolean;

  //     /**
  //      * Maximum items to show in the suggestions list
  //      * @default 10
  //      */
  //     maxItems?: number;

  //     /**
  //      * Custom classname for the dropdown suggestions selectbox
  //      */
  //     classname?: string;

  //     /**
  //      * Enables filtering dropdown items values' by string containing and not only beginning
  //      * @default true
  //      */
  //     fuzzySearch?: boolean;

  //     /**
  //      * Enable searching for accented items in the whitelist without typing exact match (#491)
  //      * @default true
  //      */
  //     accentedSearch?: boolean;

  //     /**
  //      * manual - will not render the dropdown, and you would need to do it yourself. See demo
  //      * text - will place the dropdown next to the caret
  //      * input - will place the dropdown next to the input
  //      * all - normal, full-width design
  //      * @default null
  //      */
  //     position?: string;

  //     /**
  //      * When a suggestions list is shown, highlight the first item, and also suggest it in the input (The suggestion can be accepted with → key)
  //      * @default false
  //      */
  //     highlightFirst?: boolean;

  //     /**
  //      * Close the dropdown after selecting an item, if enabled:0 is set (which means always show dropdown on focus)
  //      * @default true
  //      */
  //     closeOnSelect?: boolean;

  //     /**
  //      * if whitelist is an Array of Objects: Ex. [{value:'foo', email:'foo@a.com'},...])
  //      * this setting controlls which data key will be printed in the dropdown.
  //      * Ex. mapValueTo: data => "To:" + data.email
  //      * Ex. mapValueTo: "email"
  //      * @param before
  //      */
  //     mapValueTo?: (before: any[]) => any | string[];

  //     /**
  //      * When a user types something and trying to match the whitelist items for suggestions, this setting allows matching other keys of a whitelist objects
  //      * @default ["value", "searchBy"]
  //      */
  //     searchKeys?: string[];
  //   }

  //   export interface ReactTagifyAutoCompleteSettings {
  //     enabled?: boolean;
  //     rightKey?: boolean;
  //   }

  //   export interface ReactTagifyTemplates {
  //     wrapper: any;
  //     tag: any;
  //     dropdownItem: any;
  //   }

  //   export interface ReactTagifySettings {
  //     /**
  //      * Loading state of tags
  //      */
  //     loading?: boolean;

  //     /**
  //      * Placeholder text. If this attribute is set on an input/textarea element it will override this setting
  //      */
  //     placeholder?: string;

  //     /**
  //      * [RegEx string] split tags by any of these delimiters. Example: `",
  //      */
  //     delimiters?: RegexString;

  //     /**
  //      * Validate input by RegEx pattern (can also be applied on the input itself as an attribute) Ex: /[1-9]/
  //      */
  //     pattern?: RegexString;

  //     /**
  //      * Use select for single-value dropdown-like select box. See mix as value to allow mixed-content. The 'pattern' setting must be set to some character.
  //      */
  //     mode?: ReactTagifyMode;

  //     /**
  //      * Interpolation for mix mode. Everything between these will become a tag
  //      */
  //     mixTagsInterpolator?: string[];

  //     /**
  //      * Define conditions in which typed mix-tags content is allowing a tag to be created after.
  //      */
  //     mixTagsAllowedAfter?: RegexString;

  //     /**
  //      * Should duplicate tags be allowed or not
  //      */
  //     duplicates?: boolean;

  //     /**
  //      * Should ONLY use tags allowed in whitelist. In mix-mode, setting it to false will not allow creating new tags.
  //      */
  //     enforceWhitelist?: boolean;

  //     /**
  //      * Autocomplete settings
  //      */
  //     autoComplete?: ReactTagifyAutoCompleteSettings;

  //     /**
  //      * An array of tags which only they are allowed
  //      */
  //     whitelist?: string[];

  //     /**
  //      * An array of tags which aren't allowed
  //      */
  //     blacklist?: string[];

  //     /**
  //      * Automatically adds the text which was inputed as a tag when blur event happens
  //      */
  //     addTagOnBlur?: boolean;

  //     /**
  //      * Exposed callbacks object to be triggered on events: 'add' / 'remove' tags
  //      */
  //     callbacks?: ReactTagifyCallbacks;

  //     /**
  //      * Maximum number of allowed tags. when reached, adds a class "tagify--hasMaxTags" to <Tags>
  //      */
  //     maxTags?: number;

  //     /**
  //      * Number of clicks on a tag to enter "edit" mode. Only 1 or 2 work. false or null will disallow editing
  //      */
  //     editTags?: FalsyValues | 1 | 2;

  //     /**
  //      * Object consisting of functions which return template strings
  //      */
  //     templates?: ReactTagifyTemplates;

  //     /**
  //      * Takes a tag input as argument and returns a transformed value
  //      * @param Tag A tag
  //      */
  //     transformTag?: (Tag: string) => string;

  //     /**
  //      * If true, do not remove tags which did not pass validation
  //      */
  //     keepInvalidTags?: boolean;

  //     /**
  //      * If true, do not add invalid, temporary, tags before automatically removing them
  //      */
  //     skipInvalid?: boolean;

  //     /**
  //      * On pressing backspace key:
  //      * true - remove last tag
  //      * edit - edit last tag
  //      */
  //     backspace?: boolean | "edit";

  //     /**
  //      * If you wish your original input/textarea value property format to other than the default (which I recommend keeping) you may use this and make sure it returns a string.
  //      * @param originalInput An original input.
  //      */
  //     originalInputValueFormat?: (originalInput: string) => string;

  //     /**
  //      * Dropdown settings
  //      */
  //     dropdown?: ReactTagifyDropdownSettings;
  // //   }

  //   export interface ReactTagifyProps {
  //     mode: string;
  //     settings: Record<string, any>;
  //     initialValue: string;
  //     onChange: Function;
  //   }

  //   export interface Event extends ChangeEvent {
  //     type?: any;
  //     detail: any;
  //   }

  export default class ReactTagify extends Vue {
    element: any;

    settings: any;
    /**
     * Reverts the input element back as it was before Tagify was applied
     */
    destroy(): void;

    /**
     * Removes all tags and resets the original input tag's value property
     */
    removeAllTags(): void;

    /**
     * Accepts a String (word, single or multiple with a delimiter), an Array of Objects (see above) or Strings
     */
    addTags(
      tagsItems: string[],
      clearInput?: boolean,
      skipInvalid?: boolean
    ): void;

    /**
     * (#502) Remove single/multiple Tags. When nothing passed, removes last tag.
     * silent - A flag, which when turned on, does not remove any value and does not update the original input value but simply removes the tag from tagify
     * tranDuration - delay for animation, after which the tag will be removed from the DOM
     */
    removeTags(tags: any): void;

    /**
     * Converts the input's value into tags. This method gets called automatically when instansiating Tagify. Also works for mixed-tags
     */
    loadOriginalValues(values: string | string[]): void;

    /**
     * {value} - return an Array of found matching items (case-insensetive)
     * @param object
     */
    getWhitelistItemsByValue(object: any): void;

    /**
     * Returns the index of a specific tag, by value
     * @param value
     * @returns Found tag
     */
    getTagIndexByValue(value: string): any;

    /**
     * Converts a String argument ([[foo]]⁠ and [[bar]]⁠ are..) into HTML with mixed tags & texts
     * @param tags
     * @returns Parsed string
     */
    parseMixTags(tags: string): string;

    /**
     * Returns a DOM nodes list of all the tags
     */
    getTagElms(): any;

    /**
     * Returns a specific tag DOM node by value
     */
    getTagElmByValue(value: string): any;
    /**
     * Goes to edit-mode in a specific tag
     */
    editTag(node: any): void;

    /**
     * Exit a tag's edit-mode. if "tagData" exists, replace the tag element with new data and update Tagify value
     */
    replaceTag(tag: any): void;

    /**
     * Toogle loading state on/off (Ex. AJAX whitelist pulling)
     * @param to Sets loading state to a assigned value
     */
    loading(to: boolean): void;

    /**
     * Toogle loading state on/off (Ex. AJAX whitelist pulling) but for a specific tag element
     */
    tagLoading(tag: any): void;

    /**
     * Returns a tag element from the supplied tag data
     * @param tagData
     */
    createTagElem(tagData: any): any;

    /**
     * Injects text or HTML node at last caret position. The selection parameter is optional
     */
    injectAtCaret(element: any): void;
  }
}
