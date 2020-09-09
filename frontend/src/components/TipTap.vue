<template>
  <div class="editor" @click="toggleIMG">
    <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <font-awesome-icon icon="bold" />
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <font-awesome-icon icon="italic" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <font-awesome-icon icon="strikethrough" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <font-awesome-icon icon="underline" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <font-awesome-icon icon="code" />
        </button>

        <!-- 
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="paragraph" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="ul" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="ol" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <icon name="hr" />
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <icon name="undo" />
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          <icon name="redo" />
        </button> -->
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Image
} from "tiptap-extensions";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBold, faItalic, faStrikethrough, faUnderline, faCode);

export default Vue.extend({
  components: {
    EditorContent,
    EditorMenuBar,
    FontAwesomeIcon
  },
  data() {
    return {
      thumbnail: "",
      editor: new Editor({
        content: "<p>This is just a boring paragraph</p>",
        editorProps: {},
        extensions: [
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new Code(),
          new Image()
        ]
      })
    };
  },
  beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy();
  },
  methods: {
    getContent: function() {
      return this.editor.getHTML();
    },
    getThumbnail: function() {
      return this.thumbnail;
    },
    toggleIMG(event: any) {
      if (event.target.classList.contains("img-selected")) {
        //대표 이미지를 클릭한 경우
        event.target.classList.toggle("img-selected");
        this.thumbnail = "";
        return;
      }
      if (event.target.tagName === "IMG") {
        const imgs = document.querySelectorAll(".img-selected"); //대표 말고 다른 이미지를 클릭한 경우
        imgs.forEach(e => {
          e.classList.toggle("img-selected");
        });
        event.target.classList.toggle("img-selected");
        this.thumbnail = event.target.src;
      }
    }
  }
});
</script>

<style lang="scss">
@import "../assets/styles/tiptap/sass/main.scss";
.editor {
  min-height: 60vh;
}
.editor p {
  font-weight: 400;
}

.img-selected {
  border: 2px solid greenyellow;
  border-raidus: 1px;
}
</style>
