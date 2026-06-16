import type { MDXComponents } from "mdx/types"
import type { ComponentPropsWithoutRef } from "react"
import {
  blockquoteStyle,
  codeBlock,
  inlineCode,
} from "@/lib/ui/brand-classes"

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-h1 lg:text-hero font-heading text-foreground leading-heading mb-8"
        {...(props as ComponentPropsWithoutRef<"h1">)}
      />
    ),

    h2: (props) => (
      <h2
        className="text-h2 font-heading text-foreground mt-16 mb-6"
        {...(props as ComponentPropsWithoutRef<"h2">)}
      />
    ),

    h3: (props) => (
      <h3
        className="text-h3 font-heading text-foreground mt-12 mb-4"
        {...(props as ComponentPropsWithoutRef<"h3">)}
      />
    ),

    h4: (props) => (
      <h4
        className="text-h4 font-heading text-foreground mt-8 mb-3"
        {...(props as ComponentPropsWithoutRef<"h4">)}
      />
    ),

    p: (props) => (
      <p
        className="text-body text-foreground/70 leading-body mb-6"
        {...(props as ComponentPropsWithoutRef<"p">)}
      />
    ),

    ul: (props) => (
      <ul
        className="mb-6 ml-6 list-disc space-y-3 text-body text-foreground/70 marker:text-brand-primary"
        {...(props as ComponentPropsWithoutRef<"ul">)}
      />
    ),

    ol: (props) => (
      <ol
        className="mb-6 ml-6 list-decimal space-y-3 text-body text-foreground/70 marker:text-brand-primary"
        {...(props as ComponentPropsWithoutRef<"ol">)}
      />
    ),

    li: (props) => (
      <li
        className="leading-body"
        {...(props as ComponentPropsWithoutRef<"li">)}
      />
    ),

    strong: (props) => (
      <strong
        className="font-semibold text-foreground"
        {...(props as ComponentPropsWithoutRef<"strong">)}
      />
    ),

    em: (props) => (
      <em
        className="italic text-foreground/80"
        {...(props as ComponentPropsWithoutRef<"em">)}
      />
    ),

    a: (props) => (
      <a
        className="font-medium text-brand-primary underline underline-offset-4 transition-colors hover:text-brand-primary/80"
        {...(props as ComponentPropsWithoutRef<"a">)}
      />
    ),

    hr: () => (
      <div className="my-12 h-px bg-linear-to-r from-brand-primary/50 via-border to-transparent" />
    ),

    blockquote: (props) => (
      <blockquote
        className={blockquoteStyle}
        {...(props as ComponentPropsWithoutRef<"blockquote">)}
      />
    ),

    code: (props) => (
      <code
        className={inlineCode}
        {...(props as ComponentPropsWithoutRef<"code">)}
      />
    ),

    pre: (props) => (
      <pre
        className={codeBlock}
        {...(props as ComponentPropsWithoutRef<"pre">)}
      />
    ),

    table: (props) => (
      <div className="mb-8 overflow-x-auto rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
        <table
          className="w-full border-collapse text-left"
          {...(props as ComponentPropsWithoutRef<"table">)}
        />
      </div>
    ),

    thead: (props) => (
      <thead
        className="border-b border-border/60 bg-white/2"
        {...(props as ComponentPropsWithoutRef<"thead">)}
      />
    ),

    th: (props) => (
      <th
        className="px-4 py-3 text-body-sm font-semibold text-foreground"
        {...(props as ComponentPropsWithoutRef<"th">)}
      />
    ),

    td: (props) => (
      <td
        className="border-t border-border/40 px-4 py-3 text-body-sm text-foreground/70"
        {...(props as ComponentPropsWithoutRef<"td">)}
      />
    ),

    ...components,
  }
}
